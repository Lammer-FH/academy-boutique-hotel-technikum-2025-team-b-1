<script setup>
import { ref, computed } from "vue";
import {
  BAlert,
  BButton,
  BCard,
  BCardText,
  BSpinner,
} from "bootstrap-vue-next";
import { useRoomStore } from "@/stores/roomStore";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  roomId: {
    type: Number,
    required: true,
  },
});

const store = useRoomStore();
const arrival = ref(store.availabilityFilter.arrivalDate);
const departure = ref(store.availabilityFilter.departureDate);

function goToBooking() {
  if (!arrival.value || !departure.value) return;
  router.push({
    name: "booking",
    params: { id: props.roomId },
    query: {
      from: arrival.value,
      to: departure.value,
    },
  });
}
</script>

<template>
  <BCard
    title="Verfügbarkeit prüfen"
    border-variant="info"
    header="Buchungszeitraum"
    class="p-3"
  >
    <BCardText> Bitte wähle einen gewünschten Zeitraum aus. </BCardText>
    <label class="form-label small text-muted mb-1">Anreise</label>
    <input
      type="date"
      class="form-control mb-2"
      v-model="arrival"
      :disabled="store.isCheckingAvailability"
    />

    <label class="form-label small text-muted mb-1">Abreise</label>
    <input
      type="date"
      class="form-control mb-3"
      v-model="departure"
      :disabled="store.isCheckingAvailability"
    />

    <BButton
      variant="primary"
      class="w-100"
      :disabled="store.isCheckingAvailability"
      @click="store.checkAvailability(roomId, arrival, departure)"
    >
      <span class="d-inline-flex align-items-center gap-2">
        <span>Verfügbarkeit prüfen</span>
        <BSpinner v-if="store.isCheckingAvailability" small />
      </span>
    </BButton>

    <div class="mt-3">
      <BAlert v-if="store.isAvailable" variant="success" show class="mb-3">
        Zimmer ist zum gewünschten Zeitraum verfügbar.
      </BAlert>

      <BButton
        v-if="store.isAvailable"
        class="w-100"
        variant="primary"
        @click="goToBooking"
      >
        Jetzt buchen
      </BButton>

      <BAlert v-else-if="store.isAvailable === false" variant="danger" show>
        Zimmer ist leider zum gewünschten Zeitraum nicht verfügbar
      </BAlert>

      <BAlert v-else-if="store.availabilityError" variant="warning" show>
        {{ store.availabilityError }}
      </BAlert>
    </div>
  </BCard>
</template>
