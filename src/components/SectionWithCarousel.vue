<template>
  <div class="container-fluid text-center section-with-carousel">
    <h2>{{ sectionTitle }}</h2>
    <br>
    <BootstrapCarousel :carousel-id="carouselId" :images="images" />
    <br>
    <h2>{{ sectionSubtitle }}</h2>
    <p>{{ sectionText }}</p>
    <br>
    <a class="btn ms-lg-3" :id="buttonId" :href="buttonLink">{{ buttonText }}</a>
  </div>
</template>

<script setup>
import BootstrapCarousel from "@/components/Carousel.vue";

defineProps({
  sectionTitle: { type: String, required: true },
  sectionSubtitle: { type: String, required: true },
  sectionText: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonLink: { type: String, default: "#" },
  buttonId: { type: String, required: true },
  images: { type: Array, required: true },
  carouselId: { type: String, required: true },
});
</script>

<style scoped>
.section-with-carousel {
  padding: 30px;
  max-width: 1200px;
  margin-bottom: 50px;
  text-align: center;
  transition: background-color 0.4s ease, transform 0.3s ease;
}

.section-with-carousel:hover {
  background-color: #F9E6E4;
  border-radius: 30px;
  transform: scale(1.02);
}

.section-with-carousel .btn {
  background-color: #FEF1C8;
  color: #000;
  border: none;
}

.section-with-carousel .btn:hover {
  background-color: #FDE8A9;
}
</style>