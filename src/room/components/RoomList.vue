<template>
  <div>
    <b-row class="g-3">
      <!-- Zimmerkarten anzeigen -->
      <b-col
          v-for="room in paginatedRooms"
          :key="room.id"
          cols="12"
          md="6"
          lg="4"
      >
        <RoomCard :room="room" />
      </b-col>
    </b-row>

    <!-- Pagination -->
    <b-pagination
        v-model="currentPage"
        :total-rows="rooms.length"
        :per-page="itemsPerPage"
        align="center"
        class="my-3"
        prev-text="«"
        next-text="»"
    />
  </div>
</template>

<script>
import axios from 'axios';
import RoomCard from './RoomCard.vue';
import { BRow, BCol, BPagination } from 'bootstrap-vue-next';

export default {
  name: 'RoomList',
  components: {
    RoomCard,
    BRow,
    BCol,
    BPagination,
  },
  data() {
    return {
      rooms: [], // API-Daten
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    paginatedRooms() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.rooms.slice(start, end);
    },
  },
  async created() {
    try {
      const response = await axios.get('https: boutique hotel.helmuth lammer.at/api/v1/rooms'); // API-URL anpassen
      this.rooms = response.data; // Annahme: response.data ist ein Array von Zimmern
    } catch (error) {
      console.error('Fehler beim Laden der Zimmer:', error);
    }
  },
};
</script>

<style scoped>
/* Optional: Abstände, Gaps, etc. */
</style>
