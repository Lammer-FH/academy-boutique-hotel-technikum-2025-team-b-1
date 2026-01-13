<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import {
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BAlert,
  BSpinner,
  BCard,
  BCardBody,
} from "bootstrap-vue-next";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useUserStore } from "@/stores/userStore";

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const { isLoading, error, isLoggedIn } = storeToRefs(userStore);

const email = ref("");
const password = ref("");
const validationErrors = ref({});

// Redirect if already logged in
onMounted(() => {
  if (isLoggedIn.value) {
    redirectAfterLogin();
  }
  userStore.clearError();
});

function validate() {
  const errors = {};

  if (!email.value.trim()) {
    errors.email = "E-Mail-Adresse ist erforderlich.";
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    errors.email = "Bitte eine gültige E-Mail-Adresse eingeben.";
  }

  if (!password.value) {
    errors.password = "Passwort ist erforderlich.";
  }

  validationErrors.value = errors;
  return Object.keys(errors).length === 0;
}

function redirectAfterLogin() {
  const redirectTo = route.query.redirect || "/";
  router.push(redirectTo);
}

async function handleSubmit() {
  if (!validate()) return;

  const success = await userStore.login(email.value, password.value);
  if (success) {
    redirectAfterLogin();
  }
}
</script>

<template>
  <DefaultLayout>
    <div class="login-container">
      <BCard class="login-card">
        <BCardBody>
          <h2 class="text-center mb-4">Anmelden</h2>

          <BAlert
            :model-value="!!error"
            variant="danger"
            dismissible
            @closed="userStore.clearError()"
          >
            {{ error }}
          </BAlert>

          <BForm @submit.prevent="handleSubmit">
            <BFormGroup
              label="E-Mail-Adresse"
              label-for="email"
              :invalid-feedback="validationErrors.email"
              :state="validationErrors.email ? false : null"
            >
              <BFormInput
                id="email"
                v-model="email"
                type="email"
                placeholder="ihre@email.at"
                :state="validationErrors.email ? false : null"
                :disabled="isLoading"
                autocomplete="email"
              />
            </BFormGroup>

            <BFormGroup
              label="Passwort"
              label-for="password"
              :invalid-feedback="validationErrors.password"
              :state="validationErrors.password ? false : null"
              class="mt-3"
            >
              <BFormInput
                id="password"
                v-model="password"
                type="password"
                placeholder="Passwort eingeben"
                :state="validationErrors.password ? false : null"
                :disabled="isLoading"
                autocomplete="current-password"
              />
            </BFormGroup>

            <BButton
              type="submit"
              variant="primary"
              class="w-100 mt-4 login-button"
              :disabled="isLoading"
            >
              <BSpinner v-if="isLoading" small class="me-2" />
              {{ isLoading ? "Wird angemeldet..." : "Anmelden" }}
            </BButton>
          </BForm>

          <div class="text-center mt-3">
            <RouterLink to="/" class="text-muted">
              Zurück zur Startseite
            </RouterLink>
          </div>
        </BCardBody>
      </BCard>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.login-card {
  width: 100%;
  max-width: 420px;
}
</style>
