<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BootstrapCarousel from "@/components/Carousel.vue";

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
    <div id="landingPage">
      <section class="text-center my-5">
        <h2>Willkommen im Boutique Hotel Technikum</h2>
        <p>Erleben Sie Stil, Komfort und Wohlfühlatmosphäre...</p>
      </section>
      <header id="header" class="text-center mt-4">
        <h1>BOUTIQUE HOTEL</h1>
        <h1>Technikum</h1>
      </header>

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

      <div class="container-fluid text-center" id="containerRooms">
        <h2>Unsere Zimmer</h2>
        <br>
        <BootstrapCarousel carousel-id="carouselRooms" :images="imagesRooms"/>
        <br>
        <h2>Boutique-Komfort neu definiert</h2>
        <p>Unsere Zimmer sind der ideale Ort zum Entspannen und Wohlfühlen. Jedes Zimmer wurde mit Liebe zum Detail
          eingerichtet und verbindet Komfort mit einem klaren, modernen Stil. Ob allein, zu zweit oder mit Familie – bei
          uns finden Sie den passenden Raum für Ihren Aufenthalt. Hochwertige Materialien, angenehme Farben und
          durchdachte Ausstattung sorgen dafür, dass Sie sich vom ersten Moment an wohlfühlen. Hier können Sie ankommen,
          abschalten und einfach die Zeit genießen.</p>
        <br>
        <a class="btn ms-lg-3" id="linkZimmer">Zu den Zimmern</a>
      </div>

      <div class="container-fluid text-center" id="containerRestaurant">
        <h2>Unser Restaurant</h2>
        <br>
        <BootstrapCarousel carousel-id="carouselRestaurant" :images="imagesRestaurant"/>
        <br>
        <h2>Restaurant Lammé</h2>
        <p>In unserem Restaurant genießen Sie frisch zubereitete Gerichte in entspannter Atmosphäre. Wir legen großen
          Wert auf regionale und saisonale Zutaten, die mit Sorgfalt und Liebe zum Detail verarbeitet werden. Ob zum
          Frühstück, Mittag- oder Abendessen – bei uns steht der Geschmack im Mittelpunkt. Lassen Sie sich von unserer
          Küche mit kreativen, aber ehrlichen Speisen verwöhnen und genießen Sie dazu ausgewählte Getränke in
          gemütlichem Ambiente. Unser Team sorgt mit freundlichem Service und Leidenschaft dafür, dass jeder Besuch zu
          einem genussvollen Erlebnis wird.</p>
        <br>
        <a class="btn ms-lg-3" id="linkRestaurant">zum Restaurant</a>
      </div>

      <div class="container-fluid text-center" id="containerSpa">
        <h2>Unser Spa-Bereich</h2>
        <br>
        <BootstrapCarousel carousel-id="carouselSpa" :images="imagesSpa"/>
        <br>
        <h2>Willkommen in einer Welt der Ruhe und Erneuerung.</h2>
        <p>Unser Spa ist der perfekte Ort, um Körper und Geist zur Ruhe kommen zu lassen. Hier treffen modernes Design
          und eine angenehme, warme Atmosphäre aufeinander. Lassen Sie den Alltag für eine Weile hinter sich und
          genießen Sie entspannte Momente in einer Umgebung aus Licht, Ruhe und Wohlbefinden. Ob bei einer wohltuenden
          Massage, einer pflegenden Gesichtsbehandlung oder in der Sauna – hier steht Ihr persönliches Wohl im
          Mittelpunkt. Unsere Spa-Therapeutinnen und -Therapeuten verwenden hochwertige Produkte und gehen individuell
          auf Ihre Wünsche ein. Abgerundet wird das Erlebnis durch unseren gemütlichen Ruheraum und den Wellnessbereich,
          der zum Verweilen einlädt.</p>
        <br>
        <a class="btn ms-lg-3" id="linkSpa">zum Spa</a>
      </div>

    </div>
  </DefaultLayout>
</template>

<style scoped>
#landingPage {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.9;
}

#header {
  font-weight: bold;
  font-size: 2rem;
  color: #5a3d2e;
}

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
}

#carouselLandingPageMain img, #carouselZimmer img, #carouselRestaurant img, #carouselSpa img {
  height: 450px;
  object-fit: cover;
}


#linkZimmer, #linkSpa, #linkRestaurant {
  background-color: #FEF1C8;
}

#containerRooms, #containerRestaurant, #containerSpa {
  padding: 30px;
  max-width: 1200px;
  margin-bottom: 50px;
  text-align: center;
  transition: background-color 0.4s ease, transform 0.3s ease;
}

#containerRooms:hover, #containerRestaurant:hover, #containerSpa:hover {
  background-color: #F9E6E4;
  border-radius: 30px;
  transform: scale(1.02);
}

#containerRooms {
  margin-top: 20px;
}
</style>