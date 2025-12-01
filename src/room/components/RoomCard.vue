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
          Zimmer {{ room.number || "–" }} || {{ room.beds }} Betten
        </small>
      </b-col>
      <b-col cols="auto">
        <span class="text fw-bold" id="room-price">
          {{ room.pricePerNight }} € / Nacht
        </span>
      </b-col>
    </b-row>

    <RoomExtras :extras="room.extras" />
    <RouterLink :to="{ name: 'room', params: { id: room.id } }" class="button details-button" >
      Details
    </RouterLink>
  </b-card>
</template>

<script setup>
import {BCard, BRow, BCol, BButton} from "bootstrap-vue-next";
import RoomExtras from "./RoomExtras.vue";
//import {RoomAvailabilityCard} from "@/room/components/RoomAvailabilityCard.vue";

const props = defineProps({
  room: {
    type: Object,
    required: true,
  },
});

const links = [
  {text: 'Details', to: 'RoomDetails'}
    ]

</script>

<style>
.room-card img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.room-card {
  background-color: #FFDAD5;
}
.details-button{
  display: block;
  text-align: center;
  margin: 0 auto;
  color: #5a3d2e;
}

</style>
