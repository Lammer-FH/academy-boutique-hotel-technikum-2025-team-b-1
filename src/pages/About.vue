<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <section class="hero text-white d-flex align-items-center">
      <div class="overlay"></div>
      <div class="container position-relative">
        <div class="row align-items-center">
          <div class="col-12 col-lg-7">
            <h1 class="display-4 mb-3">Über uns</h1>
            <p class="lead mb-4">
              Wiener Charme trifft modernes Boutique-Design: persönlich, nachhaltig und mit viel Liebe zum Detail.
            </p>
            <div class="d-flex gap-2 flex-wrap">
              <router-link to="/rooms" class="btn btn-light btn-lg">Zimmer ansehen</router-link>
              <router-link to="/impressum" class="btn btn-outline-light btn-lg">Impressum</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-body-tertiary border-top border-bottom">
      <div class="container">
        <div class="text-center mb-4">
          <h2 class="h3 mb-2">Wofür wir stehen</h2>
          <p class="text-muted mb-0">Regional, nachhaltig, persönlich und mitten in Wien.</p>
        </div>

        <div class="row g-4">
          <div class="col-12 col-md-6 col-xl-3">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h3 class="h5 card-title">Regional & frisch</h3>
                <p class="card-text">Zutaten und Partner aus Wien & Umgebung: wir stehen für kurze Wege und volle Qualität.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h3 class="h5 card-title">Nachhaltig gedacht</h3>
                <p class="card-text">Energieeffizienz, Refill-Stationen, Zero-Waste-Ansatz: Bei uns steht Nachhaltigkeit im Vordergrund.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h3 class="h5 card-title">Persönlicher Service</h3>
                <p class="card-text">Kleines Team, kurze Wege: Wir sind ehrlich, herzlich und jederzeit für Sie da.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h3 class="h5 card-title">Beste Lage</h3>
                <p class="card-text">Zentral & ruhig: Unser Hotel besticht mit der Besten Lage für Kultur, Business und Stadtentdeckungen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROOMS (10 Zimmer) -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-12 col-lg-6">
            <img class="img-fluid rounded-4 shadow" src="@/assets/pictures/hotel-zimmer/sherwood-exclusive-lara-antalya-photo-6.JPEG"
                 alt="zimmer">
          </div>
          <div class="col-12 col-lg-6">
            <h2 class="h3 mb-2">Unsere Zimmer</h2>
            <p class="text-muted">
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
            <router-link to="/rooms" class="btn btn-primary">Alle Zimmer ansehen</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light border-top">
      <div class="container">
        <div class="row align-items-center g-4 flex-lg-row-reverse">
          <div class="col-12 col-lg-6">
            <img class="img-fluid rounded-4 shadow" src="@/assets/pictures/hotel-spa/csm_Spa-Bereich_MatthiasDengler_85_7b56b73679.jpg" alt="spa" />
          </div>
          <div class="col-12 col-lg-6">
            <h2 class="h3 mb-2">Unser Spa</h2>
            <p class="text-muted">
              Für ein Boutiquehotel unserer Größe setzen wir auf Ruhe statt Trubel: kompakte
              <strong>Finnische Sauna</strong>, ein gemütlicher <strong>Ruhebereich</strong> mit
              Kräutertee & Infused Water, <strong>2 Behandlungsräume</strong> für Massagen (auf Anfrage) sowie
              <strong>Duschen & frische Handtücher</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-12 col-lg-6">
            <img class="img-fluid rounded-4 shadow" src="@/assets/pictures/hotel-restaurant/dobedan-exclusive-belek-fransiz-restoran-card-list.jpg" alt="Restaurant – regional & saisonal" />
          </div>
          <div class="col-12 col-lg-6">
            <h2 class="h3 mb-2">Restaurant & Frühstück</h2>
            <p class="text-muted">
              Saisonale Küche mit Zutaten aus der Region – unkompliziert, frisch, ehrlich. Morgens wartet ein liebevoll
              zusammengestelltes Frühstück, tagsüber kleine, wechselnde Gerichte und am Abend ausgewählte Klassiker.
            </p>
            <router-link to="/impressum" class="btn btn-outline-primary">Kontakt & Info</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-primary text-white">
      <div class="container">
        <div class="row align-items-center g-3">
          <div class="col-12 col-lg-8">
            <h2 class="h3 mb-2">Bereit für deinen Aufenthalt?</h2>
            <p class="mb-0">Finde dein Lieblingszimmer und buche in wenigen Schritten.</p>
          </div>
          <div class="col-12 col-lg-4 text-lg-end">
            <router-link class="btn btn-light btn-lg" to="/rooms">Jetzt Zimmer wählen</router-link>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 60vh;
  color: white;
  background:
      linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("@/assets/pictures/hotel-fotos/Brach_Reception_7_GuillaumedeLaubier-scaled.jpg")
      center/cover no-repeat;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
}

.btn-primary,
.bg-primary{
  background-color: #FFDAD5 !important;
  border-color: #FFDAD5 !important;
  color: #5a3d2e !important;
}

.btn-primary:hover {
  background-color: #fbc7c0 !important;
  border-color: #fbc7c0 !important;
}


.btn-outline-primary {
  color: #5a3d2e !important;
  border-color: #FFDAD5 !important;
}

.btn-outline-primary:hover {
  background-color: #FFDAD5 !important;
  color: #5a3d2e !important;
}

.bg-primary {
  background-color: #FFDAD5 !important;
  color: #5a3d2e !important;
}

.display-4{
  color: #FFDAD5 !important;
}

</style>
