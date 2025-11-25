<template>
  <BNavbar toggleable="xl" id="navBar">
    <BContainer fluid class="navbar-container">

      <div class="navbar-left">
        <RouterLink :to="{ name: 'landingPage' }" class="navbar-brand">
          <img
              src="@/assets/pictures/logo/editable-hotel-logo-vector-business-corporate-identity-with-boutique-hotels-resort-message/rm330-pa-logo2-11.jpg"
              alt="Logo"
              id="logo"
          />
        </RouterLink>
      </div>

      <div class="navbar-title-wrapper">
        <RouterLink :to="{ name: 'landingPage' }" class="navbar-title">
          Boutique Hotel Technikum
        </RouterLink>
      </div>


      <div class="navbar-right">
        <BNavbarToggle target="main-nav" />

        <BCollapse id="main-nav" is-nav>
          <BNavbarNav class="ms-auto d-flex align-items-center nav-links">

            <BNavItem
                v-for="link in links"
                :key="link.text"
                :to="link.to"
            >
              {{ link.text }}
            </BNavItem>

            <BButton id="loginButton" class="ms-3">
              Login
            </BButton>

          </BNavbarNav>
        </BCollapse>
      </div>

    </BContainer>
  </BNavbar>
</template>

<script setup>
import {
  BNavbar,
  BNavbarToggle,
  BNavbarNav,
  BNavItem,
  BContainer,
  BCollapse,
  BButton
} from "bootstrap-vue-next";

const links = [
  { text: "Zimmer", to: "#" },
  { text: "Restaurant", to: "#" },
  { text: "Spa", to: "#" },
  { text: "Über uns", to: { name: "about" } },
  { text: "Kontakt", to: "#" }
];
</script>

<style scoped>
#navBar {
  background-color: #ffdAD5;
  padding: 0.5rem 1rem;
  position: relative;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-left {
  flex: 0 0 auto;
}

.navbar-right {
  flex: 0 0 auto;
}


.navbar-title-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  pointer-events: none;
}

.navbar-title {
  pointer-events: auto;
  color: #5a3d2e;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
}


#logo {
  height: 55px;
  border-radius: 20%;
}


.nav-links .nav-link {
  color: #5a3d2e !important;
  padding: 0 0.5rem;
}
.nav-links .nav-link:hover {
  color: #a86c5b !important;
}


#loginButton {
  background-color: #fef1c8;
  border: none;
  color: #5a3d2e;
}


@media (max-width: 992px) {
  .navbar-title-wrapper {
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
  }

  .navbar-right {
    margin-left: auto;
  }
}
</style>