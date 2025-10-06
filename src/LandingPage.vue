<script setup>
</script>

<template>
  <div id="landingPage">
    <nav class="navbar navbar-expand-lg navbar-light" id="navBar">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center fw-bold" href="LandingPage.vue">
          <img
              src="@/assets/bilder/logo/editable-hotel-logo-vector-business-corporate-identity-with-boutique-hotels-resort-message/rm330-pa-logo2-11.jpg"
              alt="Hotel Logo"
              class="me-2"
              id="logo"
          />
        </a>

        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="#">Zimmer</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Restaurant</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Spa</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Über uns</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Anreise & Kontakt</a></li>
          </ul>
          <button class="btn ms-lg-3" type="button" id="loginButtonLandingPage">Login</button>
        </div>
      </div>
    </nav>

    <div id="header" class="text-center mt-4">
      <h1>BOUTIQUE HOTEL</h1>
      <h1>Technikum</h1>
    </div>

    <div id="carouselLandingPageMain" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/bilder/hotel-fotos/sherwood-exclusive-lara-antalya-photo-6.JPEG" class="d-block w-100"
               alt="hotel">
        </div>
        <div class="carousel-item">
          <img src="@/assets/bilder/hotel-fotos/Brach_Reception_7_GuillaumedeLaubier-scaled.jpg" class="d-block w-100"
               alt="hotel">
        </div>
        <div class="carousel-item">
          <img src="@/assets/bilder/hotel-fotos/franv_lume-boutique-hotel_gym-scaled.jpg" class="d-block w-100"
               alt="hotel">
        </div>
        <div class="carousel-item">
          <img src="@/assets/bilder/hotel-fotos/luxushotel-5-boutique-hotel-dasposthotel-82716.jpg"
               class="d-block w-100" alt="hotel">
        </div>
        <div class="carousel-item">
          <img src="@/assets/bilder/hotel-fotos/top_solarium_.jpg" class="d-block w-100" alt="hotel">
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
      <p id="paragraphLandingPage">
        Erleben Sie Stil, Komfort und Wohlfühlatmosphäre inmitten moderner Eleganz.<br>
        Genießen Sie entspannte Stunden, kulinarische Highlights und erstklassigen Service – Ihr Rückzugsort für
        unvergessliche Momente.
      </p>
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
      <div id="carouselZimmer" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/bilder/hotel-zimmer/sherwood-exclusive-lara-antalya-photo-6.JPEG" class="d-block w-100"
                 alt="hotel-zimmer">
          </div>
          <div class="carousel-item">
            <img src="@/assets/bilder/hotel-zimmer/f1f7ddb4-051f-4d8b-9d5c-14891432398a.jpg" class="d-block w-100"
                 alt="hotel-zimmer">
          </div>
          <div class="carousel-item">
            <img src="@/assets/bilder/hotel-zimmer/3cef2b65.jpg.avif" class="d-block w-100" alt="hotel-zimmer">
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
      <h2>Restaurant</h2>
      <div id="carouselRestaurant" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/bilder/hotel-restaurant/Casa-Padrino-Luxus_Sofa-Lounge-Fuer-Grand-Hotels.png"
                 class="d-block w-100" alt="hotel-restaurant">
          </div>
          <div class="carousel-item">
            <img src="@/assets/bilder/hotel-restaurant/dobedan-exclusive-belek-fransiz-restoran-card-list.jpg"
                 class="d-block w-100" alt="hotel-restaurant">
          </div>
          <div class="carousel-item">
            <img src="@/assets/bilder/hotel-restaurant/dobedan-exclusive-belek-panorama-restoran-slider2.jpg"
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
  </div>
</template>

<style scoped>
#landingPage {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.9;
}

#navBar {
  background-color: #FFDAD5;
}

#logo {
  height: 60px;
  width: auto;
  border-radius: 20%;
}

#header {
  font-weight: bold;
  font-size: 2rem;
  color: #5a3d2e;
}

#carouselLandingPageMain img,
#carouselZimmer img,
#carouselRestaurant img {
  height: 400px;
  object-fit: cover;
}

#paragraphLandingPage {
  padding: 30px;
  border-bottom: #FFDAD5 solid 3px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
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

#containerWelcomeText,
#containerZimmer,
#containerRestaurant {
  padding: 30px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
  border-bottom: #FFDAD5 solid 3px;
}
</style>