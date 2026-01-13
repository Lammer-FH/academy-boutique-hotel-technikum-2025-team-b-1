<script setup lang="ts">
import {BContainer,BCardTitle,BCardText,BRow,BCol } from "bootstrap-vue-next";
</script>

<template>
  <b-container fluid id="footer" class="text-center">
    <b-card-title class="fw-bold mb-3">Kontakt</b-card-title>

    <section id="contact">
    <b-card-text>
      <ul class="list-unstyled">
        <li>Boutique Hotel Technikum</li>
        <li>Höchstädtplatz 6</li>
        <li>1200 Wien</li>
        <li>Tel: +43 123 45678</li>
        <li>E-Mail: info@hotel-technikum.at</li>
      </ul>
    </b-card-text>
    </section>

    <b-row id="footerLinks" class="mt-3 justify-content-center">
      <b-col cols="auto">
        <RouterLink class="footer-link" :to="{ name: 'impressum' }">Impressum </RouterLink>
      </b-col>
      <b-col cols="auto">|</b-col>
      <b-col cols="auto">
        <RouterLink class="footer-link" :to="{ name: 'about' }"> Über uns</RouterLink>
      </b-col>
    </b-row>
    <br>

    <b-card-text class="p-3 mt-3">
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