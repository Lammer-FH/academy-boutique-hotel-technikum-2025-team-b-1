<template>
  <BCarousel
      :id="carouselId"
      controls
      indicators
      background="#000"
      class="mb-4"
  >
    <BCarouselSlide
        v-for="(img, index) in images"
        :key="index"
        :img-src="img"
    />
  </BCarousel>
</template>

<script setup>
import {BCarousel,BCarouselSlide} from 'bootstrap-vue-next'
defineProps({
  carouselId: { type: String, required: true },
  images: { type: Array, required: true }
});
</script>


