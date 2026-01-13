<script setup>
const links = [
  { text: 'Zimmer', to: { name: 'rooms' } },
  { text: 'Über uns', to: { name: 'about' } },
];
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

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
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
        <button class="btn ms-lg-3" id="loginButton">Login</button>
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

#loginButton {
  background-color: #FEF1C8;
}
</style>
