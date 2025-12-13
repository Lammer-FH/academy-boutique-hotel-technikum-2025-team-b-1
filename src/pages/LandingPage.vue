<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BootstrapCarousel from "@/components/Carousel.vue";
import SectionWithCarousel from "@/components/SectionWithCarousel.vue";

const imagesLanding = [
  new URL('@/assets/pictures/hotel-fotos/Facade BHS.jpg', import.meta.url).href,
  new URL('@/assets/pictures/hotel-fotos/STRJU-P0020-One-King-Bed-Overview.4x3.jpg.webp', import.meta.url).href,
  new URL('@/assets/pictures/hotel-fotos/franv_lume-boutique-hotel_gym-scaled.jpg', import.meta.url).href,
  new URL('@/assets/pictures/hotel-fotos/luxushotel-5-boutique-hotel-dasposthotel-82716.jpg', import.meta.url).href
];

const imagesRooms = [
  new URL('@/assets/pictures/hotel-zimmer/STRJU-P0020-One-King-Bed-Overview.4x3.jpg.webp', import.meta.url).href,
  new URL('@/assets/pictures/hotel-zimmer/4k-wangen-im-allgaeu-photo-38.JPEG', import.meta.url).href,
  new URL('@/assets/pictures/hotel-zimmer/photo-4k-wangen-im-allgaeu-5.JPEG', import.meta.url).href
];

const imagesRestaurant = [
  new URL('@/assets/pictures/hotel-restaurant/csm_Anbau_Restaurant_Panoramarestaurant_mit_moderner_Architektur_Oberjoch_Allgaeu_22d7660774.jpg.webp', import.meta.url).href,
  new URL('@/assets/pictures/hotel-restaurant/Hotel_Galantha_GH100498_small_©Gregor_Hofbauer.jpg', import.meta.url).href,
  new URL('@/assets/pictures/hotel-restaurant/Hotel_Galantha_GH109162_small_©Gregor_Hofbauer_2023-05-31-135931_syzy.jpg', import.meta.url).href,
  new URL('@/assets/pictures/hotel-restaurant/Restaurant-Hotel_Galantha_GH100436_small_heller-min_2023-05-31-144242_pzun.jpg', import.meta.url).href
];

const imagesSpa = [
  new URL('@/assets/pictures/hotel-spa/csm_Spa-Bereich_MatthiasDengler_85_7b56b73679.jpg', import.meta.url).href,
  new URL('@/assets/pictures/hotel-spa/alpenstern-pool.jpg', import.meta.url).href,
  new URL('@/assets/pictures/hotel-spa/swimming-pool-spa-hotel-blue-water-reflections-peaceful-2880x1800-2595.jpg', import.meta.url).href,
  new URL('@/assets/pictures/hotel-spa/franv_lume-boutique-hotel_gym-scaled.jpg', import.meta.url).href
];
</script>

<template>
  <DefaultLayout>
    <BootstrapCarousel carousel-id="carouselLandingPageMain" :images="imagesLanding"/>
      <div class="container-fluid text-center" id="containerWelcomeText">
        <h2>Willkommen im Boutique Hotel Technikum</h2>
        <p>Erleben Sie Stil, Komfort und Wohlfühlatmosphäre inmitten moderner Eleganz.<br>Genießen Sie entspannte
          Stunden, kulinarische Highlights und erstklassigen Service – Ihr Rückzugsort für unvergessliche Momente.</p>
      </div>

      <div class="container-fluid text-center" id="containerConceptText">
        <h2>Unser Konzept</h2>
        <p>Im Boutique Hotel Technikum vereinen wir Nachhaltigkeit mit einer modernen, frischen Art, Gastfreundschaft zu
          leben. Unser engagiertes Team sorgt mit Leidenschaft und Liebe zum Detail dafür, dass sich jeder Gast bei uns
          rundum wohlfühlt – von der Einrichtung über das Essen bis hin zu kleinen, besonderen Momenten. Wir setzen auf
          regionale Produkte, achtsamen Umgang mit Ressourcen und ein Design, das Natürlichkeit und Komfort verbindet.
          Persönlicher Service und ein herzliches Miteinander stehen für uns im Mittelpunkt – damit Ihr Aufenthalt bei
          uns zu einer echten Auszeit wird.</p>
      </div>

    <SectionWithCarousel
        section-title="Unsere Zimmer"
        section-subtitle="Boutique-Komfort neu definiert"
        section-text="Unsere Zimmer sind der ideale Ort zum Entspannen und Wohlfühlen. Hochwertige Materialien, angenehme Farben und durchdachte Ausstattung sorgen dafür, dass Sie sich vom ersten Moment an wohlfühlen."
        button-text="Zu den Zimmern"
        button-link="/zimmer"
        button-id="linkZimmer"
        :images="imagesRooms"
        carousel-id="carouselRooms"
    />

    <SectionWithCarousel
        section-title="Unser Restaurant"
        section-subtitle="Restaurant Lammé"
        section-text="In unserem Restaurant genießen Sie frisch zubereitete Gerichte in entspannter Atmosphäre. Wir legen großen Wert auf regionale und saisonale Zutaten, die mit Sorgfalt verarbeitet werden."
        button-text="zum Restaurant"
        button-link="#"
        button-id="linkRestaurant"
        :images="imagesRestaurant"
        carousel-id="carouselRestaurant"
    />

    <SectionWithCarousel
        section-title="Unser Spa-Bereich"
        section-subtitle="Willkommen in einer Welt der Ruhe und Erneuerung."
        section-text="Unser Spa ist der perfekte Ort, um Körper und Geist zur Ruhe kommen zu lassen. Hier treffen modernes Design und eine angenehme, warme Atmosphäre aufeinander. Lassen Sie den Alltag für eine Weile hinter sich und genießen Sie entspannte Momente in einer Umgebung aus Licht, Ruhe und Wohlbefinden. Ob bei einer wohltuenden Massage, einer pflegenden Gesichtsbehandlung oder in der Sauna – hier steht Ihr persönliches Wohl im Mittelpunkt. Unsere Spa-Therapeutinnen und -Therapeuten verwenden hochwertige Produkte und gehen individuell auf Ihre Wünsche ein. Abgerundet wird das Erlebnis durch unseren gemütlichen Ruheraum und den Wellnessbereich, der zum Verweilen einlädt."
        button-text="zum Spa"
        button-link="#"
        button-id="linkSpa"
        :images="imagesSpa"
        carousel-id="carouselSpa"
    />
  </DefaultLayout>
</template>

<style scoped>
#containerWelcomeText {
  padding: 30px;
  max-width: 1200px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #FFDAD5;
  border-radius: 20px;
  transition: background-color 0.4s ease, transform 0.3s ease;
}

#containerConceptText {
  background-color: #ffffff;
  border-top: 3px solid #FEF1C8;
  border-bottom: 3px solid #FEF1C8;
  padding: 30px;
  max-width: 1200px;
  margin: 50px auto;
  text-align: center;
}

#carouselLandingPageMain img, #carouselZimmer img, #carouselRestaurant img, #carouselSpa img {
  height: 450px;
  object-fit: cover;
}
</style>