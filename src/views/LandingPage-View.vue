<template>
  <DefaultLayout>
    <header class="text-center mt-4">
      <h1>BOUTIQUE HOTEL</h1>
      <h1>Technikum</h1>
    </header>

    <Carousel
        carouselId="landingCarousel"
        :images="[
        require('@/assets/pictures/hotel-fotos/sherwood-exclusive-lara-antalya-photo-6.JPEG'),
        require('@/assets/pictures/hotel-fotos/Brach_Reception_7_GuillaumedeLaubier-scaled.jpg'),
        require('@/assets/pictures/hotel-fotos/franv_lume-boutique-hotel_gym-scaled.jpg')
      ]"
    />

    <section class="text-center my-5">
      <h2>Willkommen im Boutique Hotel Technikum</h2>
      <p>Erleben Sie Stil, Komfort und Wohlfühlatmosphäre...</p>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Carousel from '@/components/Carousel.vue';
</script>