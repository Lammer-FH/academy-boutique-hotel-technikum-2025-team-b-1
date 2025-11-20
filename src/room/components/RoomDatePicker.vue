<template>
  <div>
    <label for="arrival-datepicker-datepicker">Wähle ein Anreisedatum</label>
    <b-form-datepicker id="arrival-datepicker" v-model="valueArrival" class="mb-2"></b-form-datepicker>
  </div>
  <div>
    <label for="depature-datepicker">Wähle ein Abreisedatum</label>
    <b-form-datepicker id="depature-datepicker-datepicker" v-model="valueDepature" class="mb-2"></b-form-datepicker>
  </div>

  <b-button id="verfügbarkeitPrüfenButton" variant="primary" class="mt-3" @click="checkDates">Verfügbarkeit prüfen</b-button>
</template>

<script>
import {BButton} from "bootstrap-vue-3";

export default {
  components: {BButton},
  data() {
    return {
      valueArrival: '',
      valueDepature: '',
      errorMessage: '',
    }
  },
  methods: {
    checkDates(){
      this.errorMessage = "";

      if(!this.valueArrival || !this.valueDepature){
        this.errorMessage = "Bitte wählen Sie ein Anreisedatum/Abreisedatum.";
        return;
      }
      if (this.valueDepature < this.valueArrival){
        this.errorMessage = "Das Abreisedatum muss NACH dem Anreisedatum liegen";
      }
    }
  }
}
</script>

<style scoped>
#verfügbarkeitPrüfenButton{
  background-color: white;
  color: #FFDAD5;
}
</style>