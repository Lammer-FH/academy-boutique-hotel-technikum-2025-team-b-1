<script setup>
import { BContainer, BCardTitle, BCardText, BRow, BCol } from "bootstrap-vue-next";
</script>

<template>
  <BContainer fluid id="footer" class="text-center">
    <BCardTitle class="fw-bold mb-3">Kontakt</BCardTitle>

    <BCardText>
      <ul class="list-unstyled">
        <li>Musterstraße 12</li>
        <li>12345 Musterstadt</li>
        <li>Tel: +49 123 456789</li>
        <li>E-Mail: info@hotel-technikum.at</li>
      </ul>
    </BCardText>

    <BRow id="footerLinks" class="mt-3 justify-content-center">
      <BCol cols="auto">
        <RouterLink class="footer-link" :to="{ name: 'impressum' }">Impressum</RouterLink>
      </BCol>
      <BCol cols="auto">|</BCol>
      <BCol cols="auto">
        <RouterLink class="footer-link" :to="{ name: 'about' }">Über uns</RouterLink>
      </BCol>
    </BRow>
    <br />

    <BCardText class="p-3 mt-3">
      © 2025 Boutique Hotel Technikum – Alle Rechte vorbehalten
    </BCardText>
  </BContainer>
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