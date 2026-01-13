<script setup>
import {BCarousel,BCarouselSlide} from 'bootstrap-vue-next'

defineProps({
  carouselId: { type: String, required: true },
  images: { type: Array, required: true }
});
</script>

<template>
  <BCarousel
      :id="carouselId"
      controls
      indicators
      background="#000"
      class="carousel mb-4"
  >
    <BCarouselSlide
        v-for="(img, index) in images"
        :key="index"
        :img-src="img"
    />
  </BCarousel>
</template>

<style scoped>
.carousel :deep(img) {
  height: 400px;
  object-fit: cover;
}
</style>
