<template>
  <BaseList>
    <section>
      <div v-if="errorMessage" class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>

      <div v-else-if="isLoading" class="d-flex justify-content-center py-4">
        <b-spinner label="Lade Zimmer" />
      </div>

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

      <p v-else class="text-center text-muted py-4 mb-0">
        Derzeit sind keine Zimmer verfügbar.
      </p>
    </section>

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
import { computed, onMounted, ref } from "vue";
import { BRow, BCol, BSpinner, BPagination } from "bootstrap-vue-next";
import RoomCard from "./RoomCard.vue";
import BaseList from "../../base/BaseList.vue";
import { getRoomList } from "../room-service";

const itemsPerPage = 5;

const rooms = ref([]);
const currentPage = ref(1);
const isLoading = ref(false);
const errorMessage = ref("");

const EXTRA_MAP = {
  bathroom: { label: "Eigenes Bad", type: "bathroom" },
  minibar: { label: "Minibar", type: "minibar" },
  television: { label: "Fernseher", type: "television" },
  livingroom: { label: "Wohnbereich", type: "livingroom" },
  aircondition: { label: "Klimaanlage", type: "aircondition" },
  wifi: { label: "WLAN", type: "wifi" },
  breakfast: { label: "Frühstück", type: "breakfast" },
  "handicapped accessible": {
    label: "Barrierefrei",
    type: "handicapped accessible",
  },
};

const normalizeExtras = (extras = [], roomId = "room") => {
  const seen = new Set();

  return extras.reduce((acc, rawEntry) => {
    const [rawKey, value] = Object.entries(rawEntry || {})[0] || [];
    if (!value) return acc;

    const normalizedKey = (rawKey || "").trim().toLowerCase();
    if (!EXTRA_MAP[normalizedKey] || seen.has(normalizedKey)) return acc;

    seen.add(normalizedKey);
    const mapEntry = EXTRA_MAP[normalizedKey];
    acc.push({
      id: `extra-${roomId}-${normalizedKey}`,
      label: mapEntry.label,
      type: mapEntry.type,
    });
    return acc;
  }, []);
};

const normalizeRoom = (room) => ({
  ...room,
  name: room.roomsName,
  number: room.roomsNumber,
  extras: normalizeExtras(room.extras, room.id),
});

const totalRooms = computed(() => rooms.value.length);

const paginatedRooms = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return rooms.value.slice(start, start + itemsPerPage);
});

const fetchRooms = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    const response = await getRoomList();
    rooms.value = Array.isArray(response) ? response.map(normalizeRoom) : [];
  } catch (error) {
    errorMessage.value =
      "Zimmer konnten nicht geladen werden. Bitte versuchen Sie es später erneut.";
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchRooms);
</script>
