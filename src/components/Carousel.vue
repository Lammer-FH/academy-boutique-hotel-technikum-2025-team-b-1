<template>
  <div :id="carouselId" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
          v-for="(img, index) in images"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
      >
        <img :src="img" class="d-block w-100" :alt="'Slide ' + index" />
      </div>
    </div>

    <button class="carousel-control-prev" type="button" :data-bs-target="'#' + carouselId" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="'#' + carouselId" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  carouselId: { type: String, required: true },
  images: { type: Array, required: true }
});
</script>

<style scoped>
img {
  height: 400px;
  object-fit: cover;
}
</style>