<script setup>
import {
  BButton,
  BAlert,
  BSpinner,
  BRow,
  BCol,
} from "bootstrap-vue-next";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useBookingStore } from "@/stores/bookingStore";

const router = useRouter();
const bookingStore = useBookingStore();

const {
  bookingSummary,
  isSubmitting,
  errorMessage,
} = storeToRefs(bookingStore);

const { backToStart, submit } = bookingStore;

function onConfirm() {
  submit();
}

function editRoomAndPeriod() {
  router.back();
}
</script>

<template>
  <div>
    <h2 class="h5 mb-3">Buchungsdaten überprüfen</h2>

    <BAlert
        v-if="errorMessage"
        variant="danger"
        show
        class="mb-3"
    >
      {{ errorMessage }}
    </BAlert>

    <BRow class="mb-3">
      <BCol md="6">
        <h3 class="h6 text-muted">Persönliche Daten</h3>
        <p class="mb-1">
          <strong>Name:</strong>
          {{ bookingSummary.firstname }} {{ bookingSummary.lastname }}
        </p>
        <p class="mb-1">
          <strong>E-Mail:</strong>
          {{ bookingSummary.email }}
        </p>
        <p class="mb-0">
          <strong>Frühstück:</strong>
          {{ bookingSummary.breakfast ? "Ja" : "Nein" }}
        </p>
      </BCol>

      <BCol md="6">
        <h3 class="h6 text-muted">Buchung</h3>
        <p class="mb-1">
          <strong>Zimmer-ID:</strong>
          {{ bookingSummary.roomId }}
        </p>
        <p class="mb-0">
          <strong>Zeitraum:</strong>
          {{ bookingSummary.arrivalDate }} – {{ bookingSummary.departureDate }}
        </p>
      </BCol>
    </BRow>

    <div class="d-flex flex-column flex-md-row gap-2 justify-content-between">

      <BButton
          type="button"
          variant="outline-secondary"
          @click="backToStart"
          :disabled="isSubmitting"
      >
        Personendaten bearbeiten
      </BButton>


      <BButton
          type="button"
          variant="outline-primary"
          @click="editRoomAndPeriod"
          :disabled="isSubmitting"
      >
        Zimmer & Zeitraum ändern
      </BButton>


      <BButton
          type="button"
          variant="primary"
          @click="onConfirm"
          :disabled="isSubmitting"
      >
        <BSpinner
            v-if="isSubmitting"
            small
            label="Buchen..."
            class="me-2"
        />
        Buchung abschließen
      </BButton>
    </div>
  </div>
</template>
