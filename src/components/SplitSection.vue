<script setup>
import {BCol, BContainer, BImg, BRow} from 'bootstrap-vue-next'

const props = defineProps({
  title: {type: String, required: true},
  textMuted: {type: String, default: ""},
  img: {type: String, required: true},
  reverse: {type: Boolean, default: false},
  bg: {type: String, default: "transparent"},
})
</script>

<template>
  <section class="py-5" :style="{ backgroundColor: bg }">
    <BContainer>
      <BRow
          class="align-items-center g-4"
          :class="{ 'flex-lg-row-reverse': reverse }"
      >
        <BCol cols="12" lg="6">
          <BImg
              :src="img"
              :alt="title"
              fluid
              class="rounded-4 shadow"
          />
        </BCol>

        <BCol cols="12" lg="6">
          <h2 class="h3 mb-2">{{ title }}</h2>
          <p v-if="textMuted" class="text-muted">{{ textMuted }}</p>
          <slot/>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.rounded-4 {
  border-radius: 1rem !important;
}
</style>
