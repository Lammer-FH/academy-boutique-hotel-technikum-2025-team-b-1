<script setup>
import { ref, computed } from "vue";
import { BAlert, BButton, BCard, BCardText, BSpinner } from "bootstrap-vue-next";
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

const arrival = ref("");
const departure = ref("");
const availability = ref(null);
const error = ref(null);
const isChecking = ref(false);

const validationError = computed(() => {
  if (!arrival.value || !departure.value) return null;
  if (departure.value < arrival.value) {
    return "Das Abreisedatum muss nach dem Anreisedatum liegen.";
  }
  return null;
});

const hasChecked = computed(() => availability.value !== null && !error.value);

const check = async () => {
  error.value = null;
  availability.value = null;

  if (!arrival.value || !departure.value) {
    error.value = "Bitte wähle ein Anreise- und Abreisedatum aus.";
    return;
  }

  if (validationError.value) {
    error.value = validationError.value;
    return;
  }

  isChecking.value = true;
  try {
    const result = await store.checkAvailability(
      props.roomId,
      arrival.value,
      departure.value
    );
    availability.value = result;
  } catch (err) {
    error.value =
      err.message || "Serverfehler - bitte versuchen Sie es später erneut.";
  } finally {
    isChecking.value = false;
  }
};

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
      :disabled="isChecking"
    />

    <label class="form-label small text-muted mb-1">Abreise</label>
    <input
      type="date"
      class="form-control mb-3"
      v-model="departure"
      :disabled="isChecking"
    />

    <BButton variant="primary" class="w-100" :disabled="isChecking" @click="check">
      <span class="d-inline-flex align-items-center gap-2">
        <span>Verfügbarkeit prüfen</span>
        <BSpinner v-if="isChecking" small />
      </span>
    </BButton>

    <div class="mt-3">
      <BAlert
          v-if="availability === true"
          variant="success"
          show
          class="mb-3"
      >
        Zimmer ist zum gewünschten Zeitraum verfügbar.
      </BAlert>

      <BButton
          v-if="availability === true"
          class="w-100"
          variant="primary"
          @click="goToBooking"
      >
        Jetzt buchen
      </BButton>


      <BAlert v-else-if="availability === false" variant="danger" show>
        Zimmer ist leider zum gewünschten Zeitraum nicht verfügbar
      </BAlert>

      <BAlert v-else-if="error" variant="warning" show>
        {{ error }}
      </BAlert>

      <BAlert v-else-if="hasChecked" variant="info" show>
        Verfügbarkeit wurde geprüft.
      </BAlert>
    </div>
  </BCard>
</template>
