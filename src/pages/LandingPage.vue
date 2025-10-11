<script setup>
import { RouterLink } from 'vue-router'
import DefaultLayout from "@/layouts/DefaultLayout.vue";

</script>

<template>
  <defaultLayout>
  <div id="landingPage">

    <header id="header" class="text-center mt-4">
      <h1>BOUTIQUE HOTEL</h1>
      <h1>Technikum</h1>
    </header>

    <div id="carouselLandingPageMain" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/pictures/hotel-fotos/sherwood-exclusive-lara-antalya-photo-6.JPEG" class="d-block w-100"
               alt="hotel">
        </div>
        <div class="carousel-item">
          <img src="@/assets/pictures/hotel-fotos/Brach_Reception_7_GuillaumedeLaubier-scaled.jpg" class="d-block w-100"
               alt="hotel">
        </div>
        <div class="carousel-item">
          <img src="@/assets/pictures/hotel-fotos/franv_lume-boutique-hotel_gym-scaled.jpg" class="d-block w-100"
               alt="hotel">
        </div>
        <div class="carousel-item">
          <img src="@/assets/pictures/hotel-fotos/luxushotel-5-boutique-hotel-dasposthotel-82716.jpg"
               class="d-block w-100" alt="hotel">
        </div>
        <div class="carousel-item">
          <img src="@/assets/pictures/hotel-fotos/top_solarium_.jpg" class="d-block w-100" alt="hotel">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselLandingPageMain"
              data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselLandingPageMain"
              data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container-fluid text-center" id="containerWelcomeText">
      <h2>Willkommen im Boutique Hotel Technikum</h2>
      <p>
        Erleben Sie Stil, Komfort und Wohlfühlatmosphäre inmitten moderner Eleganz.<br>
        Genießen Sie entspannte Stunden, kulinarische Highlights und erstklassigen Service – Ihr Rückzugsort für
        unvergessliche Momente.
      </p>
    </div>

      <div class="container-fluid text-center" id="containerConceptText">
        <h2>Unser Konzept</h2>
        <p>
          Im Boutique Hotel Technikum verbinden wir nachhaltiges Denken mit frischer, kreativer Energie. Unser junges Team
          gestaltet jeden Aufenthalt mit Leidenschaft, Innovation und Liebe zum Detail – von der Einrichtung über die
          Kulinarik bis hin zu besonderen Erlebnisangeboten.<br>
          Wir legen Wert auf regionale, nachhaltige Produkte, kreative Akzente in Design und Atmosphäre und einen
          persönlichen Service, der jeden Gast individuell anspricht.<br>
          Nachhaltigkeit, Kreativität und Teamgeist sind die Eckpfeiler unseres Konzepts – und wir laden Sie ein, Teil
          dieser Erfahrung zu sein.
        </p>
      </div>

    <div class="container-fluid text-center" id="containerZimmer">
      <h2>Unsere Zimmer</h2>
      <br>
      <div id="carouselZimmer" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/pictures/hotel-zimmer/sherwood-exclusive-lara-antalya-photo-6.JPEG" class="d-block w-100"
                 alt="hotel-zimmer">
          </div>
          <div class="carousel-item">
            <img src="@/assets/pictures/hotel-zimmer/f1f7ddb4-051f-4d8b-9d5c-14891432398a.jpg" class="d-block w-100"
                 alt="hotel-zimmer">
          </div>
          <div class="carousel-item">
            <img src="@/assets/pictures/hotel-zimmer/3cef2b65.jpg.avif" class="d-block w-100" alt="hotel-zimmer">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselZimmer" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselZimmer" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br>
      <h2>Boutique-Komfort neu definiert</h2>
      <p>
        Unsere Zimmer
        Erleben Sie Komfort und Stil in unseren liebevoll gestalteten Zimmern. Jede Kategorie bietet ein einzigartiges
        Ambiente, hochwertige Ausstattung und eine Wohlfühlatmosphäre, die zum Entspannen und Verweilen einlädt. Egal ob
        gemütlich, großzügig oder luxuriös – unsere Zimmer sind der perfekte Rückzugsort für unvergessliche Momente.
      </p>
      <br>
      <button class="btn ms-lg-3" id="buttonZimmer">Zu den Zimmern</button>
    </div>

    <div class="container-fluid text-center" id="containerRestaurant">
      <h2>Unsere Restaurants</h2>
      <br>
      <div id="carouselRestaurant" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/pictures/hotel-restaurant/Casa-Padrino-Luxus_Sofa-Lounge-Fuer-Grand-Hotels.png"
                 class="d-block w-100" alt="hotel-restaurant">
          </div>
          <div class="carousel-item">
            <img src="@/assets/pictures/hotel-restaurant/dobedan-exclusive-belek-fransiz-restoran-card-list.jpg"
                 class="d-block w-100" alt="hotel-restaurant">
          </div>
          <div class="carousel-item">
            <img src="@/assets/pictures/hotel-restaurant/dobedan-exclusive-belek-panorama-restoran-slider2.jpg"
                 class="d-block w-100" alt="hotel-restaurant">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselRestaurant" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselRestaurant" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br>
      <h2>Unsere drei kulinarischen Highlights</h2>
      <p>
        Im Boutique Hotel Technikum erwarten Sie gleich drei einzigartige Restaurants, die jeden Besuch zu einem
        besonderen Erlebnis machen.

        Restaurant „Aurora“ – Genießen Sie moderne Gourmetküche in stilvollem Ambiente. Kreative Gerichte aus
        regionalen, nachhaltigen Zutaten verwöhnen Gaumen und Sinne.

        Bistro „Lumen“ – Locker, frisch, inspirierend. Perfekt für einen leichten Lunch, köstliche Snacks oder einen
        entspannten Kaffee am Nachmittag.

        Rooftop „Soleil“ – Atemberaubender Ausblick, entspannte Atmosphäre und exklusive Drinks. Hier treffen
        kulinarische Highlights auf unvergessliche Sonnenuntergänge.

        Unsere Restaurants stehen für Vielfalt, Kreativität und höchste Qualität – lassen Sie sich von jedem Konzept
        verzaubern und genießen Sie unvergessliche Momente bei uns.

      </p>
      <br>
      <button class="btn ms-lg-3" id="buttonRestaurant">zum Restaurant</button>
    </div>

    <div class="container-fluid text-center" id="containerSpa">
      <h2>Unser Spa-Bereich</h2>
      <br>
      <div id="carouselSpa" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/pictures/hotel-spa/csm_Spa-Bereich_MatthiasDengler_85_7b56b73679.jpg"
                 class="d-block w-100" alt="hotel-spa">
          </div>
          <div class="carousel-item">
            <img src="@/assets/pictures/hotel-spa/severins-alpine-retreat-wellness-spa-header.jpg"
                 class="d-block w-100" alt="hotel-spa">
          </div>
          <div class="carousel-item">
            <img src="@/assets/pictures/hotel-spa/wellness-knigge.jpg"
                 class="d-block w-100" alt="hotel-spa">
          </div>
          <div class="carousel-item">
            <img src="@/assets/pictures/hotel-spa/franv_lume-boutique-hotel_gym-scaled.jpg"
                 class="d-block w-100" alt="hotel-spa">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselSpa" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselSpa" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br>
      <h2>Willkommen in einer Welt der Ruhe und Erneuerung.</h2>
      <p>
        Unser Spa ist ein Rückzugsort für alle, die Körper und Geist in Einklang bringen möchten – modern, klar und
        dennoch wohltuend warm im Ambiente.

        Lassen Sie den Alltag hinter sich und tauchen Sie ein in eine Atmosphäre aus Licht, Duft und Leichtigkeit. Ob
        wohltuende Massage, revitalisierende Gesichtsbehandlung oder ein Moment purer Stille in unserer Sauna – hier
        zählt nur Ihr Wohlbefinden.

        Unsere Spa-Therapeuten arbeiten mit hochwertigen Pflegeprodukten und maßgeschneiderten Behandlungen, die genau
        auf Ihre Bedürfnisse abgestimmt sind. Ergänzt wird das Erlebnis durch unseren Ruheraum und den exklusiven
        Wellnessbereich, in dem Zeit keine Rolle spielt.
      </p>
      <br>
      <button class="btn ms-lg-3" id="buttonSpa">zum Spa</button>
    </div>

  </div>
  </defaultLayout>
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

#carouselLandingPageMain img,
#carouselZimmer img,
#carouselRestaurant img, #carouselSpa img {
  height: 400px;
  object-fit: cover;
}


#loginButtonLandingPage {
  background-color: #FEF1C8;
}

#buttonZimmer {
  background-color: #FEF1C8;
}

#buttonRestaurant {
  background-color: #FEF1C8;
}

#buttonSpa {
  background-color: #FEF1C8;
}


#containerZimmer,
#containerRestaurant, #containerSpa {
  padding: 30px;
  max-width: 1200px;
  margin-bottom: 50px;
  text-align: center;
  transition: background-color 0.4s ease, transform 0.3s ease;
}

#containerZimmer:hover,
#containerRestaurant:hover, #containerSpa:hover {
  background-color: #F9E6E4;
  border-radius: 30px;
  transform: scale(1.02);
}

#containerZimmer {
margin-top: 20px;
}



</style>