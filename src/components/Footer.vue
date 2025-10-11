<template>
  <footer id="footer" class="text-center">
    <div class="container py-3">
      <h5 class="fw-bold">Kontakt</h5>
      <p>Musterstraße 12<br>12345 Musterstadt<br>Tel: +49 123 456789<br>E-Mail: info@hotel-technikum.at</p>
        <div id="footerLinks" class="mt-3">
          <RouterLink :to="{ name: 'impressum' }">Impressum</RouterLink>
          <span class="mx-2">|</span>
          <a href="" class="footer-link">Über uns</a>
        </div>
    <div class="p-3 border-top">
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