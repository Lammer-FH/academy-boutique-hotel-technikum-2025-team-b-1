<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <body class="body">
    <h1>Über uns</h1>

    <section>
      <h2>Wer wir sind</h2>
      <p>
        Das Boutique Hotel Technikum vereint Wiener Charme mit modernem Komfort.
        Wir sind ein kleines Team mit großer Leidenschaft für Gastfreundschaft,
        Regionalität und Nachhaltigkeit.
      </p>
    </section>

    <section>
      <h2>Unsere Mission & Werte</h2>
      <ul>
        <li><strong>Regional & frisch:</strong> Kooperationen mit Partnerbetrieben aus Wien & Umgebung.</li>
        <li><strong>Nachhaltig:</strong> Energieeffiziente Systeme, Refill-Stationen, Zero-Waste-Ansatz.</li>
        <li><strong>Persönlich:</strong> Kurze Wege, ein Team, das zuhört und mitdenkt.</li>
        <li><strong>Zentrale Lage:</strong> Ideal für Kultur, Business und Stadtentdeckungen.</li>
      </ul>
    </section>

    <section>
      <h2>Unsere Zimmer</h2>
      <p>
        In unseren insgesamt <strong>10 liebevoll gestalteten Zimmern</strong> trifft modernes Design auf Wiener Gemütlichkeit.
        Ob gemütliches <strong>Einzelzimmer</strong>, stilvolles <strong>Doppelzimmer</strong>,
        großzügige <strong>Familien-Suite</strong> oder romantische <strong>Honeymoon Suite</strong> –
        jedes unserer Zimmer wurde mit viel Liebe zum Detail eingerichtet.
      </p>
      <p>
        Alle Räume bieten hohen Komfort, darunter moderne Bäder, schnelles WLAN, Klimaanlage, TV und optional Frühstück im Haus.
        In den oberen Etagen genießen Sie einen besonders schönen <strong>Blick über Wien</strong>,
        während unsere <strong>barrierefreien Zimmer</strong> im Erdgeschoss höchsten Komfort und Zugänglichkeit garantieren.
      </p>
      <p>
        Für Paare, Familien oder Geschäftsreisende – im Boutique Hotel Technikum findet jeder seinen Lieblingsplatz zum Ankommen und Wohlfühlen.
      </p>
    </section>
    <section>
      <h2>Unser kleines Spa</h2>
      <p>
        Klein, fein und wohltuend – perfekt für ein Boutiquehotel in unserer Größe.
        Wir setzen auf Ruhe statt Trubel: ein Ort zum Runterkommen nach einem Tag in Wien.
      </p>
      <ul class="feature-list">
        <li><strong>Finnische Sauna</strong> (kompakt) mit Zeitfenstern zur entspannten Nutzung</li>
        <li><strong>Ruhebereich</strong> mit Liegen, Kräutertee & Infused Water</li>
        <li><strong>2 Behandlungsräume</strong> für Massagen (auf Anfrage/Termin)</li>
        <li><strong>Duschen</strong> & frische Handtücher</li>
      </ul>

      <section>
        <h2>Restaurant & Frühstück</h2>
        <p>
          Saisonale Küche mit Zutaten aus der Region – unkompliziert, frisch und ehrlich.
          Morgens servieren wir ein sorgfältig zusammengestelltes Frühstück, tagsüber kleine,
          wechselnde Gerichte und am Abend ausgewählte Klassiker.
        </p>
        <ul class="feature-list">
          <li><strong>Regional & saisonal:</strong> enge Zusammenarbeit mit Partnern aus Wien & Umgebung</li>
          <li><strong>Kurze Karte, hohe Qualität:</strong> Fokus auf Frische statt Masse</li>
          <li><strong>Vegetarische & vegane Optionen</strong> stets verfügbar</li>
          <li><strong>Weinauswahl</strong> mit österreichischem Schwerpunkt</li>
        </ul>
      </section>
     <section><h2>Bereit für deinen Aufenthalt?</h2>
      <p>
        Finde dein Lieblingszimmer und buche in wenigen Schritten.
        <!--Link zu Zimmern!-->
      </p>
      </section>
    </section>
    </body>
  </DefaultLayout>
</template>



<style scoped>
.body{
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.feature-list {
  margin: 0.5rem 0 0 1.2rem;
}
.feature-list li { line-height: 1.6; }

section + section {
  margin-top: 28px;
}
h1 { margin-bottom: 12px; }
h2 { margin-bottom: 8px; }
p, li { line-height: 1.6; }

</style>