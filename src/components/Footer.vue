<template>
  <b-container fluid id="footer" class="text-center">
      <b-card-title class="fw-bold mb-3">Kontakt</b-card-title>

      <b-card-text>
        Musterstraße 12<br />
        12345 Musterstadt<br />
        Tel: +49 123 456789<br />
        E-Mail: info@hotel-technikum.at
      </b-card-text>

      <b-row id="footerLinks" class="mt-3 justify-content-center">
        <b-col cols="auto">
          <RouterLink class="footer-link" :to="{ name: 'impressum' }">Impressum</RouterLink>
        </b-col>
        <b-col cols="auto">|</b-col>
        <b-col cols="auto">
          <RouterLink class="footer-link" :to="{ name: 'about' }">Über uns</RouterLink>
        </b-col>
      </b-row>


      <b-card-text class="p-3 mt-3 border-top">
        © 2025 Boutique Hotel Technikum – Alle Rechte vorbehalten
      </b-card-text>
  </b-container>
</template>

<style scoped>
#footer {
  padding-top: 20px;
  background-color: #FFDAD5;
  color: #5a3d2e;
  font-size: 0.95rem;
  border-top: 3px solid #FEF1C8;
}


#footerLinks {
  font-weight: 500;
}

.footer-link {
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link,
.footer-link:visited {
  color: #5a3d2e;
}

.footer-link:hover {
  color: #a86c5b;
  text-decoration: underline;
}
</style>
<script setup lang="ts">
import {BContainer} from "bootstrap-vue-3";
</script>