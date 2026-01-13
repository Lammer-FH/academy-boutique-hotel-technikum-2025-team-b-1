<script setup>
import {
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
  BAlert,
  BSpinner
} from "bootstrap-vue-next";
import {storeToRefs} from "pinia";
import {useRegistrationStore} from "@/stores/registrationStore";
import {ref} from "vue";


const registrationStore = useRegistrationStore();

const showPassword = ref(false);

// We need to define an emit to call it later in the onSubmit function.
const emit = defineEmits(["success"]);

const {
  firstname,
  lastname,
  username,
  password,
  email,
  emailConfirm,
  validationErrors,
  errorMessages,
} = storeToRefs(registrationStore)

// This line of code is needed to destruct the function out of the instance.
const {register} = registrationStore

// Starts the registration process.
// If the registration was successful, a "success" event is emitted to the parent component.
async function onSubmit() {
  const ok = await register();
  if (ok) {
    emit("success");
  }
}

</script>

<template>
  <div>
    <BAlert v-if="errorMessages" variant="danger" show class="mb-3">{{ errorMessages }}</BAlert>
    <BForm @submit.prevent="onSubmit" novalidate>
      <BFormGroup
          label="Vorname"
          label-for="registration-firstname"
          :state="validationErrors.firstname ? false : null"
          class="mb-3"
      >
        <BFormInput
            id="registration-firstname"
            v-model="firstname"
            :state="validationErrors.firstname ? false : null"
            required
            maxLength="20"/>
        <small v-if="validationErrors.firstname" class="text-danger">
          {{ validationErrors.firstname }}
        </small>
      </BFormGroup>
      <BFormGroup
          label="Nachname"
          label-for="registration-lastname"
          :state="validationErrors.lastname ? false : null"
          class="mb-3"
      >
        <BFormInput
            id="registration-lastname"
            v-model="lastname"
            :state="validationErrors.lastname ? false : null"
            required
            maxLength="20"
        />
        <small v-if="validationErrors.lastname" class="text-danger">
          {{ validationErrors.lastname }}
        </small>
      </BFormGroup>
      <BFormGroup
          label="Username"
          label-for="registration-username"
          :state="validationErrors.username ? false : null"
          class="mb-3"
      >
        <BFormInput
            id="registration-username"
            v-model="username"
            :state="validationErrors.username ? false : null"
            required
            maxLength="25"
        />
        <small v-if="validationErrors.username" class="text-danger">
          {{ validationErrors.username }}
        </small>
      </BFormGroup>
      <BFormGroup
          label="Passwort"
          label-for="registration-password"
          :state="validationErrors.password ? false : null"
          class="mb-3"
      >
        <div class="input-group">
          <BFormInput
              id="registration-password"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              :state="validationErrors.password ? false : null"
              required
              maxLength="20"
          />
          <button
              type="button"
              class="btn btn-outline-secondary"
              @click="showPassword = !showPassword"
          >
            {{ showPassword ? "❌" : "👁️" }}
          </button>
        </div>
        <small v-if="validationErrors.password" class="text-danger">
          {{ validationErrors.password }}
        </small>
      </BFormGroup>
      <BFormGroup
          label="E-Mail-Adresse"
          label-for="registration-email"
          :state="validationErrors.email ? false : null"
          class="mb-3"
      >
        <BFormInput
            id="registration-email"
            type="email"
            v-model="email"
            :state="validationErrors.email ? false : null"
            required
            maxLength="30"
        />
        <small v-if="validationErrors.email" class="text-danger">
          {{ validationErrors.email }}
        </small>
      </BFormGroup>
      <BFormGroup
          label="E-Mail-Adresse bestätigen"
          label-for="registration-email-confirm"
          :state="validationErrors.emailConfirm ? false : null"
          class="mb-3"
      >
        <BFormInput
            id="registration-email-confirm"
            type="email"
            v-model="emailConfirm"
            :state="validationErrors.emailConfirm ? false : null"
            required
            maxLength="30"
        />
        <small v-if="validationErrors.emailConfirm" class="text-danger">
          {{ validationErrors.emailConfirm }}
        </small>
      </BFormGroup>
      <div class="d-flex justify-content-center mb-3">
        <BButton id=registerButton type="submit" :disabled="registrationStore.isSubmitting">
          <BSpinner v-if="registrationStore.isSubmitting" small class="me-2"/>
          Registrieren
        </BButton>
      </div>
    </BForm>
  </div>

</template>

<style scoped>
#registerButton {
  color: black;
  background-color: #FFDAD5;
}
</style>