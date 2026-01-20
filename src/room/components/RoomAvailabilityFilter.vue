<script setup>
import {computed, ref, watch} from "vue";
import {storeToRefs} from "pinia";
import {
  BAlert,
  BButton,
  BCard,
  BCol,
  BRow,
  BSpinner,
} from "bootstrap-vue-next";
import {useRoomStore} from "@/stores/roomStore";

const roomStore = useRoomStore();
const {availabilityFilter, availabilityError, isCheckingAvailability} =
    storeToRefs(roomStore);

const arrival = ref(availabilityFilter.value.arrivalDate);
const departure = ref(availabilityFilter.value.departureDate);
const localError = ref(null);

const validationError = computed(() => {
  if (!arrival.value || !departure.value) return null;
  if (departure.value < arrival.value) {
    return "Das Abreisedatum muss nach dem Anreisedatum liegen.";
  }
  return null;
});

const combinedError = computed(
    () => localError.value || availabilityError.value || validationError.value
);

const hasActiveFilter = computed(
    () => !!(arrival.value && departure.value) && !validationError.value
);

const applyFilter = async () => {
  localError.value = null;
  if (validationError.value) {
    localError.value = validationError.value;
    return;
  }

  try {
    await roomStore.applyAvailabilityFilter(arrival.value, departure.value);
  } catch (err) {
    localError.value = err.message || "Die Filterung ist fehlgeschlagen.";
  }
};

const clearFilter = () => {
  arrival.value = null;
  departure.value = null;
  localError.value = null;
  roomStore.clearAvailabilityFilter();
};

const today = computed(() => {
  return new Date().toISOString().split("T")[0];
});

watch(
    availabilityFilter,
    (next) => {
      arrival.value = next.arrivalDate;
      departure.value = next.departureDate;
    },
    {deep: true}
);
</script>

<template>
  <BCard class="shadow-sm" header="Verfügbarkeit filtern">
    <BRow class="g-3 align-items-end">
      <BCol md="4">
        <label for="filter-arrival" class="form-label small text-muted mb-1">Anreise</label>
        <input
            id="filter-arrival"
            type="date"
            v-model="arrival"
            :min="today"
            :disabled="isCheckingAvailability"
            class="form-control"
        />
      </BCol>

      <BCol md="4">
        <label for="filter-departure" class="form-label small text-muted mb-1">Abreise</label>
        <input
            id="filter-departure"
            type="date"
            v-model="departure"
            :min="today"
            :disabled="isCheckingAvailability"
            class="form-control"
        />
      </BCol>

      <BCol md="4" class="d-flex gap-2">
        <BButton
            variant="transparent"
            id="checkAvailabilityButton"
            class="custom-button"
            :disabled="
            isCheckingAvailability || !!validationError || !hasActiveFilter
          "
            @click="applyFilter"
        >
          <span class="d-inline-flex align-items-center gap-2">
            <span>Filter anwenden</span>
            <BSpinner v-if="isCheckingAvailability" small/>
          </span>
        </BButton>
        <BButton
            variant="outline-secondary"
            class="flex-fill"
            :disabled="isCheckingAvailability || (!arrival && !departure)"
            @click="clearFilter"
        >
          Zurücksetzen
        </BButton>
      </BCol>
    </BRow>

    <BAlert v-if="combinedError" variant="warning" class="mt-3 mb-0" show>
      {{ combinedError }}
    </BAlert>
    <BAlert
        v-else-if="hasActiveFilter && !isCheckingAvailability"
        variant="info"
        class="mt-3 mb-0"
        show
    >
      Es werden nur Zimmer angezeigt, die im gewählten Zeitraum verfügbar sind.
    </BAlert>
  </BCard>
</template>

<style scoped>
#checkAvailabilityButton {
  background-color: #FFDAD5;
  color: black;
}
</style>


