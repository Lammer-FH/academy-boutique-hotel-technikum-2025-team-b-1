<script setup>
import {BCard, BCol, BRow} from "bootstrap-vue-next";
import RoomExtras from "./RoomExtras.vue";

defineProps({
  room: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <BCard
      :title="room.name"
      :img-src="room.image?.src || 'https://picsum.photos/800/800/?blur'"
      :img-alt="room.image?.alt"
      img-top
      class="room-card shadow-sm"
  >
    <BRow class="mb-4">
      <BCol>
        <small class="text-muted d-block">
          Zimmer {{ room.number || "–" }} || {{ room.beds }} Betten
        </small>
      </BCol>
      <BCol cols="auto">
        <span class="text fw-bold" id="room-price">
          {{ room.pricePerNight }} € / Nacht
        </span>
      </BCol>
    </BRow>

    <RoomExtras :extras="room.extras"/>
    <RouterLink :to="{ name: 'room', params: { id: room.id } }" class="button details-button">
      Details
    </RouterLink>
  </BCard>
</template>

<style scoped>
.room-card :deep(img) {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.details-button {
  display: block;
  text-align: center;
  margin: 0 auto;
  color: #5a3d2e;
}
</style>
