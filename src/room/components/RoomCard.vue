<template>
  <b-card
    :title="room.name"
    :img-src="room.image?.src || 'https://picsum.photos/800/800/?blur'"
    :img-alt="room.image?.alt"
    img-top
    class="room-card shadow-sm"
  >
    <b-row class="mb-4">
      <b-col>
        <small class="text-muted d-block">
          Zimmer {{ room.number || "–" }} – {{ room.beds }} Betten
        </small>
      </b-col>
      <b-col cols="auto">
        <span class="text fw-bold" id="room-price">
          {{ room.pricePerNight }} € / Nacht
        </span>
      </b-col>
    </b-row>

    <RoomExtras :extras="room.extras" />
  </b-card>
</template>

<script setup>
import { BCard, BRow, BCol } from "bootstrap-vue-next";
import RoomExtras from "./RoomExtras.vue";

const props = defineProps({
  room: {
    type: Object,
    required: true,
  },
});
</script>

<style>
.room-card img {
  aspect-ratio: 16 / 9;
  object-fit: cover;


}
</style>
