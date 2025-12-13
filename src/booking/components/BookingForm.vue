<script setup>
import {
  BForm,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BButton,
  BAlert,
} from "bootstrap-vue-next";
import { storeToRefs } from "pinia";
import { useBookingStore } from "@/stores/bookingStore";

const bookingStore = useBookingStore();

const {
  firstname,
  lastname,
  email,
  emailConfirm,
  breakfast,
  validationErrors,
  errorMessage,
} = storeToRefs(bookingStore);

const { review } = bookingStore;

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

      <div class="d-flex justify-content-end">
        <BButton type="submit" variant="primary">
          Weiter zur Übersicht
        </BButton>
      </div>
    </BForm>
  </div>
</template>
