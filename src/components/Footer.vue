<script setup>
import { BContainer, BCardTitle, BCardText, BRow, BCol } from "bootstrap-vue-next";
</script>

<template>
  <BContainer fluid id="footer" class="text-center">
    <BCardTitle class="fw-bold mb-3">Kontakt</BCardTitle>

<<<<<<< HEAD
    <BCardText>
=======
    <section id="contact">
    <b-card-text>
>>>>>>> 3c9ed7c (added the feature click on contact and the page scrolls down)
      <ul class="list-unstyled">
        <li>Boutique Hotel Technikum</li>
        <li>Höchstädtplatz 6</li>
        <li>1200 Wien</li>
        <li>Tel: +43 123 45678</li>
        <li>E-Mail: info@hotel-technikum.at</li>
      </ul>
<<<<<<< HEAD
    </BCardText>
=======
    </b-card-text>
    </section>
>>>>>>> 3c9ed7c (added the feature click on contact and the page scrolls down)

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