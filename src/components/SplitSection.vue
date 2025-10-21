<script setup>
const props = defineProps({
  title: { type: String, required: true },
  textMuted: { type: String, default: "" },
  img: { type: String, required: true },
  reverse: { type: Boolean, default: false },//Anmerkung: bild rechts = true, links = false
  bg: { type: String, default: "transparent" },
});
</script>

<template>
  <section class="py-5" :style="{ backgroundColor: bg }">
    <div class="container">
      <div class="row align-items-center g-4" :class="{ 'flex-lg-row-reverse': reverse }">
        <div class="col-12 col-lg-6">
          <img class="img-fluid rounded-4 shadow" :src="img" :alt="title" />
        </div>
        <div class="col-12 col-lg-6">
          <h2 class="h3 mb-2">{{ title }}</h2>
          <p v-if="textMuted" class="text-muted">{{ textMuted }}</p>
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
img.rounded-4 { border-radius: 1rem !important; }
</style>
