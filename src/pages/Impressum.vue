<script setup>


import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>

    <body class="body">
    <h1>Impressum</h1>

    <section>
      <h2>Verantwortlich für den Inhalt</h2>
      <p>Thomas Bauer, Theresa Divotgey und Julia Roll</p>
    </section>

    <section>
      <h2>Adresse</h2>
      <p>Höchstädtplatz<br>
        1200 Wien<br>
        Österreich</p>
    </section>

    <section>
      <h2>Kontakt</h2>
      <p>Telefon: +43 123 456789<br>
        E-Mail: <a href="mailto:info@hotel-technikum.at">info@hotel-technikum.at</a></p>
    </section>

    <section>
      <h2>Haftung für Inhalte</h2>
      <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
    </section>

    <section>
      <h2>Haftung für Links</h2>
      <p>Unsere Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb übernehmen wir für diese fremden Inhalte auch keine Gewähr.</p>
    </section>

    <section>
      <h2>Urheberrecht</h2>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.</p>
    </section>

    </body>
  </DefaultLayout>
</template>

<style scoped>
.body{
  margin-top: 20px;   /* Abstand über dem Content */
  margin-bottom: 20px; /* Abstand unter dem Content */
  /* optional: max-width, zentrieren etc. */
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}


</style>