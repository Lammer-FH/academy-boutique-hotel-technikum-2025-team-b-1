<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { BButton, BAlert } from "bootstrap-vue-next";
import { useBookingStore } from "@/stores/bookingStore";

const bookingStore = useBookingStore();
const { bookingSummary } = storeToRefs(bookingStore);

const { resetBooking } = bookingStore;

function goBackToRooms() {
  resetBooking();
}
</script>

<template>
  <div>
    <BAlert variant="success" show class="mb-3">
      <h2 class="h5 mb-1">Buchung erfolgreich!</h2>
      <p class="mb-0">
        Vielen Dank, {{ bookingSummary.firstname }} {{ bookingSummary.lastname }}.
        Ihre Buchung wurde erfolgreich gespeichert.
      </p>
    </BAlert>

    <div class="mb-3">
      <h3 class="h6 text-muted">Buchungsdetails</h3>
      <p class="mb-1">
        <strong>Buchungs-ID:</strong>
        {{ bookingSummary.bookingId || "wird Ihnen per E-Mail mitgeteilt" }}
      </p>
      <p class="mb-1">
        <strong>Zeitraum:</strong>
        {{ bookingSummary.arrivalDate }} – {{ bookingSummary.departureDate }}
      </p>
      <p class="mb-1">
        <strong>Zimmer-ID:</strong>
        {{ bookingSummary.roomId }}
      </p>
      <p class="mb-0">
        <strong>Frühstück:</strong>
        {{ bookingSummary.breakfast ? "Ja" : "Nein" }}
      </p>
    </div>

    <div class="d-flex gap-2">
      <RouterLink
          :to="{ name: 'rooms' }"
          custom
          v-slot="{ navigate }"
      >
        <BButton variant="primary" @click="() => { goBackToRooms(); navigate(); }">
          Zurück zur Zimmerübersicht
        </BButton>
      </RouterLink>

      <RouterLink
          :to="{ name: 'landingPage' }"
          custom
          v-slot="{ navigate }"
      >
        <BButton variant="outline-secondary" @click="navigate">
          Zur Startseite
        </BButton>
      </RouterLink>
    </div>
  </div>
</template>
