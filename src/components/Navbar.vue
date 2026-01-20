<script setup>
import { storeToRefs } from "pinia";
import { BButton, BSpinner } from "bootstrap-vue-next";
import { useUserStore } from "@/stores/userStore";
import { useToast } from 'bootstrap-vue-next'

const { create: showToast } = useToast()
const userStore = useUserStore();
const { isLoggedIn, isLoading, user } = storeToRefs(userStore);

const links = [
  { text: 'Zimmer', to: { name: 'rooms' } },
  { text: 'Über uns', to: { name: 'about' } },
];

function handleLogout() {
  userStore.logout();
  const duration = 5_000;
  showToast({
    title: 'Sie wurden erfolgreich ausgeloggt!',
    modelValue: duration,
  });
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light" id="navBar">
    <div class="container-fluid">
      <RouterLink :to="{ name: 'landingPage' }" class="navbar-brand d-flex align-items-center fw-bold">
        <img
            src="@/assets/pictures/logo/editable-hotel-logo-vector-business-corporate-identity-with-boutique-hotels-resort-message/rm330-pa-logo2-11.jpg"
            alt="Logo" id="logo"/>
        <span class="ms-2"></span>
      </RouterLink>

      <RouterLink :to="{ name: 'landingPage' }" class="navbar-center no-underline">
        Boutique Hotel Technikum
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Navigation öffnen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in links" :key="link.text">
            <RouterLink v-if="link.to" class="nav-link" :to="link.to">
              {{ link.text }}
            </RouterLink>
            <a v-else class="nav-link" :href="link.href">
              {{ link.text }}
            </a>
          </li>
          <a class="nav-link" href="#contact">Kontakt</a>
        </ul>

        <BSpinner v-if="isLoading" small label="Einloggen..." />
        <template v-else>
          <div v-if="isLoggedIn" class="d-flex align-items-center ms-lg-3">
            <span class="user-greeting me-2">
              Hallo, {{ user.firstname }}
            </span>
            <BButton 
              class="auth-button"
              @click="handleLogout"
            >
              Abmelden
            </BButton>
          </div>

          <RouterLink v-else :to="{ name: 'login' }" class="ms-lg-3">
            <BButton class="auth-button">
              Anmelden
            </BButton>
          </RouterLink>
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.no-underline {
  text-decoration: none;
  color: #5a3d2e;
}

.no-underline:hover {
  text-decoration: none;
}

#navBar {
  background-color: #FFDAD5;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
}

#logo {
  height: 60px;
  border-radius: 20%;
}

.navbar-center {
  text-align: center;
  font-size: 1.5rem;
  color: #5a3d2e;
}

.auth-button {
  background-color: #FEF1C8;
  border-color: #FEF1C8;
  color: #5a3d2e;
}

.auth-button:hover {
  background-color: #f5e4b0;
  border-color: #f5e4b0;
  color: #5a3d2e;
}

.user-greeting {
  color: #5a3d2e;
  font-weight: 500;
}
</style>
