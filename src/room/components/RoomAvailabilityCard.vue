<script setup>
import {useRoomStore} from "@/stores/roomStore";

const props = defineProps({
  roomId: {
    type: Number,
    required: true
  }
})
const store = useRoomStore();

const arrival = ref(null);
const departure = ref(null);
const availability = ref(null);
const error = ref(null);

const check = async () => {
  error.value = null
  availability.value = null

  if (!arrival.value || !departure.value) {
    error.value = "Bitte wähle ein Anreise/Abreisedatum aus";
    return;
  }

  if(departure.value < arrival.value) {
    error.value = "Das Abreisedatum muss nach dem Anreisedatum liegen";
    return;
  }

  try {
    availability.value = store.checkAvailability(props.roomId, arrival.value, departure.value);
  } catch (error) {
    error.value = "Serverfehler - bitte versuchen Sie es später erneut."
  }
}


import {BButton, BCard} from "bootstrap-vue-next";
import {ref} from "vue";
</script>

<template>
  <BCard
      title="Verfügbarkeit prüfen"
      border-variant="info"
      header="Buchungszeitraum"
      class="p-3"
  >
    <BCardText>
     Bitte wähle einen gewünschten Zeitraum aus
    </BCardText>
    <label>Anreise</label>
    <BFormDatepicker v-model="arrival" class="mb-2" />

    <label>Abreise</label>
    <BFormDatepicker v-model="departure" class="mb-2" />

    <BButton variant="primary" @click="check">
      Verfügbarkeit prüfen
    </BButton>

    <div class ="mt-3">
      <div v-if="availability === true" class="alert alert-success">
        Zimmer ist verfügbar
      </div>

      <div v-if="availability === false" class="alert alert-danger">
        Zimmer ist leider zum gewünschten Zeitraum nicht verfügbar
      </div>

      <div v-if="error" class="alert alert-warning">
        {{ error }}
      </div>
    </div>
  </BCard>
</template>

<style scoped>

</style>