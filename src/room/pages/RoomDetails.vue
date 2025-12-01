<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import {
  BBadge,
  BCol,
  BRow,
  BSpinner,
} from "bootstrap-vue-next";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import RoomExtras from "@/room/components/RoomExtras.vue";
import RoomAvailabilityCard from "@/room/components/RoomAvailabilityCard.vue";
import { useRoomStore } from "@/stores/roomStore";

const route = useRoute();
const roomStore = useRoomStore();
const { currentRoom, isLoading, error: errorMessage } =
  storeToRefs(roomStore);
const { loadRoom } = roomStore;

const roomId = computed(() => Number(route.params.id));

const fetchRoom = () => {
  if (roomId.value) {
    loadRoom(roomId.value);
  }
};

onMounted(fetchRoom);
watch(
  () => route.params.id,
  () => fetchRoom()
);

const heroImage = computed(
  () =>
    currentRoom.value?.image?.src || "https://picsum.photos/1200/800/?blur"
);
</script>

<template>
  <DefaultLayout>
    <header class="mb-4">
      <RouterLink :to="{ name: 'rooms' }" class="text-decoration-none small">
        ← Zurück zur Übersicht
      </RouterLink>
      <h1 class="mb-2">{{ currentRoom?.name || "Zimmer" }}</h1>
      <p class="text-muted mb-0" v-if="currentRoom">
        Zimmer {{ currentRoom.number || "–" }} || {{ currentRoom.beds }} Betten
      </p>
    </header>

    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>

    <div
      v-else-if="isLoading || !currentRoom"
      class="d-flex justify-content-center py-5"
    >
      <BSpinner label="Lade Zimmerdetails" />
    </div>

    <div v-else>
      <BRow class="g-4">
        <BCol lg="8">
          <div class="ratio ratio-16x9 mb-4 rounded overflow-hidden shadow-sm">
            <img
              :src="heroImage"
              :alt="currentRoom.image?.alt || currentRoom.name"
              class="w-100 h-100 object-fit-cover"
            />
          </div>

          <section class="mb-4">
            <div class="d-flex flex-wrap align-items-center gap-3 mb-3">
              <div>
                <p class="text-muted small mb-1">Preis pro Nacht</p>
                <p class="h4 mb-0">{{ currentRoom.pricePerNight }} €</p>
              </div>
              <div>
                <p class="text-muted small mb-1">Betten</p>
                <BBadge pill variant="secondary">{{ currentRoom.beds }}</BBadge>
              </div>
            </div>
            <RoomExtras :extras="currentRoom.extras" />
          </section>

          <section>
            <h2 class="h5 mb-3">Beschreibung</h2>
            <p class="text-muted" v-if="currentRoom.description">
              {{ currentRoom.description }}
            </p>
            <p class="text-muted" v-else>
              Entdecken Sie unser liebevoll eingerichtetes Zimmer mit allen
              Annehmlichkeiten für einen angenehmen Aufenthalt.
            </p>
          </section>
        </BCol>

        <BCol lg="4">
          <RoomAvailabilityCard :room-id="currentRoom.id" />
        </BCol>
      </BRow>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.object-fit-cover {
  object-fit: cover;
}
</style>
