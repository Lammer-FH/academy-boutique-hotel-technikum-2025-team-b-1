<script setup>
import {computed} from "vue";
import {BAlert, BButton, BCard, BCardText, BSpinner,} from "bootstrap-vue-next";
import {useRoomStore} from "@/stores/roomStore";
import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";

const router = useRouter();

const props = defineProps({
  roomId: {
    type: Number,
    required: true,
  },
});

const store = useRoomStore();
const {availabilityFilter, availabilityError} = storeToRefs(store);

const validationError = computed(() => {
  if (!availabilityFilter.value.arrivalDate || !availabilityFilter.value.departureDate) return null;
  if (availabilityFilter.value.departureDate < availabilityFilter.value.arrivalDate) {
    return "Das Abreisedatum muss nach dem Anreisedatum liegen.";
  }
  return null;
});

const combinedError = computed(
    () => validationError.value || availabilityError.value
);

const today = computed(() => {
  return new Date().toISOString().split("T")[0];
});

function goToBooking() {
  if (!availabilityFilter.value.arrivalDate || !availabilityFilter.value.departureDate) return;
  router.push({
    name: "booking",
    params: {id: props.roomId},
    query: {
      from: availabilityFilter.value.arrivalDate,
      to: availabilityFilter.value.departureDate,
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
    <BCardText> Bitte wähle einen gewünschten Zeitraum aus.</BCardText>
    <label for="arrival-date" class="form-label small text-muted mb-1">Anreise</label>
    <input
        id="arrival-date"
        type="date"
        class="form-control mb-2"
        :min="today"
        v-model="availabilityFilter.arrivalDate"
        :disabled="store.isCheckingAvailability"
    />

    <label for="departure-date" class="form-label small text-muted mb-1">Abreise</label>
    <input
        id="departure-date"
        type="date"
        class="form-control mb-3"
        :min="today"
        v-model="availabilityFilter.departureDate"
        :disabled="store.isCheckingAvailability"
    />

    <BButton
        variant="primary"
        class="w-100"
        :disabled="store.isCheckingAvailability"
        @click="store.checkAvailability(roomId, availabilityFilter.arrivalDate, availabilityFilter.departureDate)"
    >
      <span class="d-inline-flex align-items-center gap-2">
        <span>Verfügbarkeit prüfen</span>
        <BSpinner v-if="store.isCheckingAvailability" small/>
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

      <template v-else>
        <BAlert v-if="store.isAvailable === false" variant="danger" show>
          Zimmer ist leider zum gewünschten Zeitraum nicht verfügbar
        </BAlert>

        <BAlert v-if="combinedError" variant="warning" show>
          {{ combinedError }}
        </BAlert>
      </template>
    </div>
  </BCard>
</template>
