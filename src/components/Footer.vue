<template>
  <footer id="footer" class="text-center">
    <div class="container py-3">
      <h5 class="fw-bold">Kontakt</h5>
      <p>Musterstraße 12<br>12345 Musterstadt<br>Tel: +49 123 456789<br>E-Mail: info@hotel-technikum.at</p>
        <div id="footerLinks" class="mt-3">
          <RouterLink class="footer-link" :to="{ name: 'impressum' }">Impressum</RouterLink>
          <span class="mx-2">|</span>
          <RouterLink class="footer-link" :to="{ name: '' }">Über Uns</RouterLink>
        </div>
    <div class="p-3">
      © 2025 Boutique Hotel Technikum – Alle Rechte vorbehalten
    </div>
    </div>
  </footer>
</template>

<style scoped>
#footer {
  padding-top: 20px;
  background-color: #FFDAD5;
  color: #5a3d2e;
  font-size: 0.95rem;
  border-top: 3px solid #FEF1C8;
}


.footer-link {
  color: inherit;
  text-decoration: none;
}

.footer-link:hover {
  color: #a86c5b;
  text-decoration: underline;
}

#footerLinks {
  font-weight: 500;
}

.footer-link {
  color: #5a3d2e;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #a86c5b;
  text-decoration: underline;
}
</style>
<script setup lang="ts">
</script>