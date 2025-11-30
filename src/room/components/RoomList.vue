<template>
  <BaseList>
    <template #filters>
      <RoomAvailabilityFilter />
    </template>
    <section>
      <!-- Error State -->
      <div v-if="combinedError" class="alert alert-danger" role="alert">
        {{ combinedError }}
      </div>

      <!-- Loading State -->
      <div v-else-if="isBusy" class="d-flex justify-content-center py-4">
        <b-spinner label="Lade Zimmer" />
      </div>

      <!-- List of Rooms -->
      <b-row v-else-if="paginatedRooms.length" class="g-4">
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

      <!-- Empty State -->
      <p v-else class="text-center text-muted py-4 mb-0">
        Derzeit sind keine Zimmer verfügbar.
      </p>
    </section>

    <!-- Pagination -->
    <template #pagination>
      <b-pagination
        v-if="totalRooms > itemsPerPage"
        v-model="currentPage"
        :total-rows="totalRooms"
        :per-page="itemsPerPage"
        align="center"
      />
    </template>
  </BaseList>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { BRow, BCol, BSpinner, BPagination } from "bootstrap-vue-next";
import { useRoomStore } from "@/stores/roomStore"; // Adjust path as needed
import RoomCard from "./RoomCard.vue";
import BaseList from "../../base/BaseList.vue";
import RoomAvailabilityFilter from "./RoomAvailabilityFilter.vue";

// 1. Initialize the store
const roomStore = useRoomStore();

// 2. Extract State and Getters
// We MUST use storeToRefs to maintain reactivity.
// If we just did `const { isLoading } = roomStore`, the connection would break.
const {
  paginatedRooms,
  totalRooms,
  currentPage,
  itemsPerPage,
  isLoading,
  isCheckingAvailability,
  availabilityError,
  error: errorMessage, // Renaming 'error' to 'errorMessage' to match your template
} = storeToRefs(roomStore);

// 3. Extract Actions
// Actions are functions, so they don't need storeToRefs.
const { loadRooms } = roomStore;

const combinedError = computed(
  () => availabilityError.value || errorMessage.value
);
const isBusy = computed(
  () => isLoading.value || isCheckingAvailability.value
);

// 4. Fetch data on mount
onMounted(() => {
  loadRooms();
});
</script>
