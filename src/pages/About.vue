<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import SplitSection from "@/components/SplitSection.vue";
const imgTeam = new URL('@/assets/pictures/hotel-lobby/helena-lopes-yIcm3DWRz-c-unsplash.jpg', import.meta.url).href;
const imgBooking = new URL('@/assets/pictures/hotel-zimmer/STRJU-P0020-One-King-Bed-Overview.4x3.jpg.webp', import.meta.url).href;
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
                <p class="card-text">Kleines Team, kurze Wege: Wir sind ehrlich, herzlich und rund um die Uhr für Sie da.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-3">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h3 class="h5 card-title">Beste Lage</h3>
                <p class="card-text">Zentral & ruhig: Unser Hotel besticht mit der Besten Lage für Kultur, Business und Stadtentdeckungen und ist dennoch in einer ruhigen Lage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <SplitSection
        :img="imgTeam"
        title="Das Team hinter dem Boutique Hotel Technikum"
        :text-muted="`Das Boutique Hotel Technikum wurde von Thomas Bauer, Theresa Divotgey und Julia Roll gegründet – drei kreativen Köpfen, die ihre Leidenschaft für Design und Gastfreundschaft teilen.`"
        :bg="'#f8f9fa'"
    >
      <p>
        Gemeinsam haben sie ein Hotel geschaffen, das modernes Boutique-Ambiente mit Wiener Charme vereint.
        Ihr Ziel: ein Ort, an dem sich Stil und Herzlichkeit begegnen. Das haben sie im Boutiquehotel Technikum mit viel Liebe zum Detail,
        nachhaltigem Denken und einem klaren Gespür für Atmosphäre vereint.
      </p>
      <p>
        Was als gemeinsames Hirngespinst begann, wurde zu einer Vision:
        ein Haus, das nicht nur zum Übernachten, sondern zum Wohlfühlen, Entspannen und Verweilen einlädt.
      </p>
    </SplitSection>


    <SplitSection
        :img="imgBooking"
        :reverse="true"
        :bg="'#FFDAD5'"
        title="Bereit für deinen Aufenthalt?"
    >
      <p class="mb-4">
        Finde dein Lieblingszimmer und buche in wenigen Schritten – mit nur einem Klick bist du deinem
        nächsten Wohlfühlmoment ein Stück näher.
      </p>
      <router-link class="btn btn-light btn-lg" to="/zimmer">Jetzt Zimmer wählen</router-link>
    </SplitSection>
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
      url("src/assets/pictures/hotel-fotos/726816457.jpg")
      center/cover no-repeat;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
}


.display-4 {
  color: #FFDAD5 !important;
}
</style>


