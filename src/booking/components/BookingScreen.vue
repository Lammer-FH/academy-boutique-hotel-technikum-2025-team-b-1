<script setup>
import {computed, onMounted} from "vue";
import {useRoute} from "vue-router";
import {storeToRefs} from "pinia";
import {BCard, BCardBody, BCardHeader, BCol, BRow, BSpinner,} from "bootstrap-vue-next";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {useRoomStore} from "@/stores/roomStore";
import {STEPS, useBookingStore} from "@/stores/bookingStore";
import BookingForm from "./BookingForm.vue";
import BookingReviewScreen from "./BookingReviewScreen.vue";
import BookingSuccessScreen from "./BookingSuccessScreen.vue";

const route = useRoute();
const roomStore = useRoomStore();
const bookingStore = useBookingStore();

const {currentRoom, isLoading, errorMessage: roomError} =
    storeToRefs(roomStore);

const {step, arrivalDate, departureDate} = storeToRefs(bookingStore);

onMounted(() => {
  const roomId = route.params.id;
  const from = route.query.from || route.query.arrival || "";
  const to = route.query.to || route.query.departure || "";

  if (!currentRoom.value || currentRoom.value.id !== Number(roomId)) {
    roomStore.loadRoom(roomId);
  }

  bookingStore.start(roomId, from, to);
});

const formattedPeriod = computed(() => {
  if (!arrivalDate.value || !departureDate.value) return "Kein Zeitraum ausgewählt";
  return `${arrivalDate.value} – ${departureDate.value}`;
});

const pageTitle = computed(() => {
  return step.value === STEPS.summary ? "Reservierungsbestätigung" : "Zimmer buchen";
});

</script>

<template>
  <DefaultLayout>
    <BRow class="gy-4">
      <BCol lg="8">
        <BCard>
          <BCardHeader>
            <h1 class="h4 mb-0">{{ pageTitle }}</h1>
          </BCardHeader>

          <BCardBody>
            <BookingForm v-if="step === STEPS.start"/>
            <BookingReviewScreen v-else-if="step === STEPS.review"/>
            <BookingSuccessScreen v-else-if="step === STEPS.summary"/>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="4">
        <BCard>
          <BCardHeader>
            <h2 class="h6 mb-0">Ihre Auswahl</h2>
          </BCardHeader>
          <BCardBody>
            <div v-if="roomError" class="alert alert-danger">
              {{ roomError }}
            </div>

            <div v-else-if="isLoading" class="text-center py-3">
              <BSpinner small label="Lade Zimmer..."/>
            </div>

            <div v-else-if="currentRoom">
              <p class="mb-1 text-muted small">
                Zimmer-Nr. {{ currentRoom.id }}
              </p>
              <p class="fw-bold mb-1">
                {{ currentRoom.name }}
              </p>
              <p class="mb-2">
                {{ currentRoom.description }}
              </p>

              <hr/>

              <p class="mb-1 text-muted small">Reisezeitraum</p>
              <p class="fw-semibold mb-0">
                {{ formattedPeriod }}
              </p>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </DefaultLayout>
</template>
