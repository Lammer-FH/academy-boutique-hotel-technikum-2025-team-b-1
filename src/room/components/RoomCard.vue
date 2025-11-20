const rooms = [
{
id": 1,
"roomNumber":  11,
"roomName": "Junior Suite",
"beds": 3,
"pricePerNight": 120,
"extras": {
"bathRoom": true,
"minibar": true,
"television": true,
"aircondition": true
}

rooms

<template>
  <b-card class="mb-4 shadow-sm room-card">
    <!-- Zimmerbild -->
    <b-card-img :src="roomImage" :alt="room.roomName" top />

    <b-card-body>
      <!-- Zimmernummer & Preis -->
      <b-row class="mb-2 align-items-center">
        <b-col>
          <b-card-title class="mb-0">{{ room.roomName }}</b-card-title>
          <small class="text-muted">Zimmer {{ room.roomNumber }} – {{ room.beds }} Betten</small>
        </b-col>
        <b-col cols="auto">
          <span class="text-primary fw-bold">{{ room.pricePerNight }} € / Nacht</span>
        </b-col>
      </b-row>

      <!-- Extras -->
      <RoomExtras :extras="room.extras" />
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardBody, BCardImg, BCardTitle, BRow, BCol } from 'bootstrap-vue-next';
import RoomExtras from './RoomExtras.vue';

export default {
  name: 'RoomCard',
  components: {
    BCard,
    BCardBody,
    BCardImg,
    BCardTitle,
    BRow,
    BCol,
    RoomExtras,
  },
  props: {
    room: {
      type: Object,
      required: true,
      // Beispielstruktur siehe API
      // {
      //   id: 1,
      //   roomNumber: 11,
      //   roomName: "Junior Suite",
      //   beds: 3,
      //   pricePerNight: 120,
      //   extras: { bathRoom: true, minibar: true, television: true, aircondition: true }
      // }
    },
  },
  computed: {
    roomImage() {
      return `/images/rooms/${this.room.id}.jpg`;
    },
  },
};
</script>

<style scoped>
.room-card img {
  width: 100%;
  height: 200px;
  object-fit: cover; /* Einheitliche Bildhöhe */
}
</style>
