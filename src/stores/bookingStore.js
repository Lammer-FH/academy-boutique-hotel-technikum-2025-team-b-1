import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

const baseURL = "https://boutique-hotel.helmuth-lammer.at/api/v1";

export const useBookingStore = defineStore("booking", () => {

    const roomId = ref(null);
    const arrivalDate = ref("");
    const departureDate = ref("");


    const firstname = ref("");
    const lastname = ref("");
    const email = ref("");
    const emailConfirm = ref("");
    const breakfast = ref(false);


    const step = ref("form");
    const isSubmitting = ref(false);
    const errorMessage = ref(null);
    const validationErrors = ref({});


    const bookingId = ref(null);

    function startBooking(initRoomId, fromDate, toDate) {
        roomId.value = Number(initRoomId) || null;
        arrivalDate.value = fromDate || "";
        departureDate.value = toDate || "";
        step.value = "form";
        errorMessage.value = null;
        bookingId.value = null;
    }

    function resetBooking() {
        roomId.value = null;
        arrivalDate.value = "";
        departureDate.value = "";
        firstname.value = "";
        lastname.value = "";
        email.value = "";
        emailConfirm.value = "";
        breakfast.value = false;
        step.value = "form";
        isSubmitting.value = false;
        errorMessage.value = null;
        validationErrors.value = {};
        bookingId.value = null;
    }

    function validate() {
        const errors = {};

        if (!firstname.value.trim()) {
            errors.firstname = "Vorname ist erforderlich.";
        }
        if (!lastname.value.trim()) {
            errors.lastname = "Nachname ist erforderlich.";
        }
        if (!email.value.trim()) {
            errors.email = "E-Mail-Adresse ist erforderlich.";
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
            errors.email = "Bitte eine gültige E-Mail-Adresse eingeben.";
        }

        if (!emailConfirm.value.trim()) {
            errors.emailConfirm = "Bitte bestätigen Sie Ihre E-Mail-Adresse.";
        } else if (emailConfirm.value !== email.value) {
            errors.emailConfirm = "E-Mail und Bestätigung stimmen nicht überein.";
        }

        if (!arrivalDate.value || !departureDate.value) {
            errors.date = "Bitte Anreise- und Abreisedatum angeben.";
        } else if (departureDate.value < arrivalDate.value) {
            errors.date = "Abreisedatum muss nach dem Anreisedatum liegen.";
        }

        if (!roomId.value) {
            errors.roomId = "Kein Zimmer ausgewählt.";
        }

        validationErrors.value = errors;
        return Object.keys(errors).length === 0;
    }

    function goToReview() {
        errorMessage.value = null;
        if (validate()) {
            step.value = "review";
        }
    }

    function backToForm() {
        step.value = "form";
    }

    async function submitBooking() {
        if (!validate()) {
            step.value = "form";
            return;
        }

        isSubmitting.value = true;
        errorMessage.value = null;

        try {

            const payload = {
                firstname: firstname.value,
                lastname: lastname.value,
                email: email.value,
                birthdate: "1990-01-01", //vorerst dummy-datum
            };

            const response = await axios.post(
                `${baseURL}/room/${roomId.value}/from/${arrivalDate.value}/to/${departureDate.value}`,
                payload
            );

            bookingId.value = response.data?.id ?? null;
            step.value = "success";
        } catch (err) {
            if (err.response && err.response.status === 409) {

                errorMessage.value =
                    "Das Zimmer ist im gewählten Zeitraum nicht mehr verfügbar. Bitte wählen Sie einen anderen Zeitraum.";
            } else if (err.response && err.response.status === 400) {
                errorMessage.value =
                    "Die eingegebenen Daten sind ungültig. Bitte überprüfen Sie Ihre Eingaben.";
            } else {
                errorMessage.value =
                    "Es ist ein Fehler bei der Buchung aufgetreten. Bitte versuchen Sie es später erneut.";
            }
        } finally {
            isSubmitting.value = false;
        }
    }

    const hasValidationErrors = computed(
        () => Object.keys(validationErrors.value).length > 0
    );

    const bookingSummary = computed(() => ({
        roomId: roomId.value,
        arrivalDate: arrivalDate.value,
        departureDate: departureDate.value,
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        breakfast: breakfast.value,
        bookingId: bookingId.value,
    }));

    return {
        // state
        roomId,
        arrivalDate,
        departureDate,
        firstname,
        lastname,
        email,
        emailConfirm,
        breakfast,
        step,
        isSubmitting,
        errorMessage,
        validationErrors,
        bookingId,


        hasValidationErrors,
        bookingSummary,

        // actions
        startBooking,
        resetBooking,
        goToReview,
        backToForm,
        submitBooking,
    };
});
