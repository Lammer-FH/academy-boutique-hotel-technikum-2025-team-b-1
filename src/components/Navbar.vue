<template>
  <nav class="navbar navbar-expand-lg navbar-light" id="navBar">
    <div class="container-fluid">
      <RouterLink :to="{ name: 'landingPage' }" class="navbar-brand d-flex align-items-center fw-bold">
        <img src="@/assets/pictures/logo/editable-hotel-logo-vector-business-corporate-identity-with-boutique-hotels-resort-message/rm330-pa-logo2-11.jpg"
             alt="Logo" id="logo" />
        <span class="ms-2"></span>
      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in links" :key="link.text">
            <a class="nav-link" :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
        <button class="btn ms-lg-3" id="loginButton">Login</button>
      </div>
    </div>
  </nav>
</template>

<script setup>

const links = [
  { text: 'Zimmer', href: '#' },
  { text: 'Restaurant', href: '#' },
  { text: 'Spa', href: '#' },
  { text: 'Über uns', href: '#' },
  { text: 'Kontakt', href: '#' },
];
</script>

<style scoped>
#navBar {
  background-color: #FFDAD5;


}
#logo {
  height: 60px;
  border-radius: 20%;
}
#loginButton {
  background-color: #FEF1C8;
}
</style>