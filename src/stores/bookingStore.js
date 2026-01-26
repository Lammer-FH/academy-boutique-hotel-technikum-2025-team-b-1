import {defineStore} from "pinia";
import {computed, ref} from "vue";
import api from "@/services/api";
import {useUserStore} from "@/stores/userStore";

export const STEPS = {
    start: 'start',
    review: 'review',
    summary: 'summary',
}

export const useBookingStore = defineStore("booking", () => {
        const roomId = ref(null);
        const arrivalDate = ref("");
        const departureDate = ref("");
        const firstname = ref("");
        const lastname = ref("");
        const email = ref("");
        const emailConfirm = ref("");
        const breakfast = ref(false);
        const step = ref(STEPS.start);
        const isSubmitting = ref(false);
        const errorMessage = ref(null);
        const validationErrors = ref({});
        const bookingId = ref(null);

        function start(newRoomId, newArrivalDate, newDepartureDate) {
            roomId.value = Number(newRoomId) || null;
            arrivalDate.value = newArrivalDate || "";
            departureDate.value = newDepartureDate || "";
            step.value = STEPS.start;
            errorMessage.value = null;
            bookingId.value = null;
            prefillFromUser();
        }

    function prefillFromUser() {
        const userStore = useUserStore();
        if (userStore.isLoggedIn && userStore.user) {
            if (!firstname.value) firstname.value = userStore.user.firstname || "";
            if (!lastname.value) lastname.value = userStore.user.lastname || "";
            if (!email.value) email.value = userStore.user.email || "";
            if (!emailConfirm.value) emailConfirm.value = userStore.user.email || "";
        }
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

        function reset() {
            roomId.value = null;
            arrivalDate.value = "";
            departureDate.value = "";
            firstname.value = "";
            lastname.value = "";
            email.value = "";
            emailConfirm.value = "";
            breakfast.value = false;
            step.value = STEPS.start;
            isSubmitting.value = false;
            errorMessage.value = null;
            validationErrors.value = {};
            bookingId.value = null;
        }

        function review() {
            errorMessage.value = null;
            if (validate()) {
                step.value = STEPS.review;
            }
        }

        function backToStart() {
            step.value = STEPS.start;
        }

        async function submit() {
            if (!validate()) {
                step.value = STEPS.start;
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

                const response = await api.post(
                    `/room/${roomId.value}/from/${arrivalDate.value}/to/${departureDate.value}`,
                    payload
                );

                bookingId.value = response.data?.id ?? null;
                step.value = STEPS.summary;
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
            start,
            reset,
            review,
            backToStart,
            submit,
            prefillFromUser,
        };
    }, {
        persist: {
            key: "booking",
            storage: sessionStorage,
            paths: [
                "roomId",
                "arrivalDate",
                "departureDate",
                "firstname",
                "lastname",
                "email",
                "emailConfirm",
                "breakfast",
                "step",
                "bookingId",
            ],
        },
    }
);

