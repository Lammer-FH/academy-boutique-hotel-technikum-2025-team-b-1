<script setup>
import { computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { BRow, BCol, BSpinner, BPagination } from "bootstrap-vue-next";
import { useRoomStore } from "@/stores/roomStore";
import RoomCard from "./RoomCard.vue";
import BaseList from "@/base/BaseList.vue";
import RoomAvailabilityFilter from "./RoomAvailabilityFilter.vue";

const roomStore = useRoomStore();

const {
  paginatedRooms,
  totalRooms,
  currentPage,
  itemsPerPage,
  isLoading,
  isCheckingAvailability,
  availabilityError,
  error: errorMessage,
} = storeToRefs(roomStore);

const { loadRooms } = roomStore;

const combinedError = computed(
  () => availabilityError.value || errorMessage.value
);
const isBusy = computed(
  () => isLoading.value || isCheckingAvailability.value
);

onMounted(() => {
  loadRooms();
});
</script>

<template>
  <BaseList>
    <template #filters>
      <RoomAvailabilityFilter />
    </template>
    <section>
      <div v-if="combinedError" class="alert alert-danger" role="alert">
        {{ combinedError }}
      </div>

      <div v-else-if="isBusy" class="d-flex justify-content-center py-4">
        <BSpinner label="Lade Zimmer" />
      </div>

      <BRow v-else-if="paginatedRooms.length" class="g-4">
        <BCol
          v-for="room in paginatedRooms"
          :key="room.id"
          cols="12"
          md="6"
          lg="4"
        >
          <RoomCard :room="room" />
        </BCol>
      </BRow>

      <p v-else class="text-center text-muted py-4 mb-0">
        Derzeit sind keine Zimmer verfügbar.
      </p>
    </section>

    <template #pagination>
      <BPagination
        v-if="totalRooms > itemsPerPage"
        v-model="currentPage"
        :total-rows="totalRooms"
        :per-page="itemsPerPage"
        align="center"
      />
    </template>
  </BaseList>
</template>
