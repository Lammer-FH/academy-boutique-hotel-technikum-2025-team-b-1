<script setup>
import {
  BForm,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BButton,
  BAlert, BModal,
} from "bootstrap-vue-next";
import {storeToRefs} from "pinia";
import {useBookingStore} from "@/stores/bookingStore";
import {useRegistrationStore} from "../../stores/registrationStore";
import {ref, watch} from "vue";
import RegistrationForm from "../../registration/components/RegistrationForm.vue";

const bookingStore = useBookingStore();
const registrationStore = useRegistrationStore();

const showRegister = ref(false);
const {successValue} = storeToRefs(registrationStore);
const showSuccessModal = ref(false);

watch(successValue, (val) => {
  if (val === true) {
    showSuccessModal.value = true;
  }
});

const {
  firstname,
  lastname,
  email,
  emailConfirm,
  breakfast,
  validationErrors,
  errorMessage,
} = storeToRefs(bookingStore);

const {review} = bookingStore;

function openRegister() {
  registrationStore.$patch({
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    emailConfirm: emailConfirm.value,
  })
  showRegister.value = true;
}


function onSubmit() {
  review();
}
</script>

<template>
  <div>
    <h2 class="h5 mb-3">Ihre Daten</h2>

    <BAlert v-if="errorMessage" variant="danger" show class="mb-3">
      {{ errorMessage }}
    </BAlert>

    <BForm @submit.prevent="onSubmit" novalidate>
      <BFormGroup
          label="Vorname"
          label-for="booking-firstname"
          :state="!validationErrors.firstname"
          class="mb-3"
      >
        <BFormInput
            id="booking-firstname"
            v-model="firstname"
            :state="!validationErrors.firstname"
            required
        />
        <small v-if="validationErrors.firstname" class="text-danger">
          {{ validationErrors.firstname }}
        </small>
      </BFormGroup>

      <BFormGroup
          label="Nachname"
          label-for="booking-lastname"
          :state="!validationErrors.lastname"
          class="mb-3"
      >
        <BFormInput
            id="booking-lastname"
            v-model="lastname"
            :state="!validationErrors.lastname"
            required
        />
        <small v-if="validationErrors.lastname" class="text-danger">
          {{ validationErrors.lastname }}
        </small>
      </BFormGroup>

      <BFormGroup
          label="E-Mail-Adresse"
          label-for="booking-email"
          :state="!validationErrors.email"
          class="mb-3"
      >
        <BFormInput
            id="booking-email"
            type="email"
            v-model="email"
            :state="!validationErrors.email"
            required
        />
        <small v-if="validationErrors.email" class="text-danger">
          {{ validationErrors.email }}
        </small>
      </BFormGroup>

      <BFormGroup
          label="E-Mail-Adresse bestätigen"
          label-for="booking-email-confirm"
          :state="!validationErrors.emailConfirm"
          class="mb-3"
      >
        <BFormInput
            id="booking-email-confirm"
            type="email"
            v-model="emailConfirm"
            :state="!validationErrors.emailConfirm"
            required
        />
        <small v-if="validationErrors.emailConfirm" class="text-danger">
          {{ validationErrors.emailConfirm }}
        </small>
      </BFormGroup>

      <BFormGroup class="mb-3">
        <BFormCheckbox id="booking-breakfast" v-model="breakfast">
          Frühstück hinzubuchen
        </BFormCheckbox>
      </BFormGroup>

      <div v-if="validationErrors.date" class="text-danger mb-2">
        {{ validationErrors.date }}
      </div>
      <div v-if="validationErrors.roomId" class="text-danger mb-2">
        {{ validationErrors.roomId }}
      </div>

      <div class="d-flex justify-content-between">
        <BModal v-model="showRegister" title="Registrierung" no-footer no-close-on-backdrop
                no-close-on-esc>
          <RegistrationForm @success="showRegister = false; showSuccessModal = true"></RegistrationForm>
        </BModal>
        <BButton type="button" id="registerButton" @click="openRegister">Registrieren</BButton>
        <BButton type="submit" variant="primary">
          Weiter zur Übersicht
        </BButton>
      </div>
    </BForm>
    <BModal v-model="showSuccessModal"
            title="Registrierung erfolgreich"
            hide-footer
            @hidden="registrationStore.reset()">
      <p class="mb-0">Sie wurden erfolgreich registriert ✅</p>
    </BModal>
  </div>
</template>

<style>
#registerButton {
  background-color: #FFDAD5;
  color: black;
}

</style>