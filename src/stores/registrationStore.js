import axios from "axios";
import {defineStore} from "pinia";
import {ref} from "vue";


const baseURL = "https://boutique-hotel.helmuth-lammer.at/api/v1"


export const useRegistrationStore = defineStore('registration', () => {
    const firstname = ref("");
    const lastname = ref("");
    const email = ref("")
    const emailConfirm = ref("");
    const username = ref("");
    const password = ref("");
    const validationErrors = ref({});
    const errorMessages = ref(null);
    const isSubmitting = ref(false);
    const successValue = ref(null);


    // This function validate if a value is available. If not an error message is generated and pushed into an
    // array of errors. In the end a boolean value will be returned depending on the length of the array.
    function validate() {
        const errors = {};

        if (!firstname.value.trim()) {
            errors.firstname = "Vorname ist erforderlich"
        }

        if (!lastname.value.trim()) {
            errors.lastname = "Nachname ist erforderlich"
        }

        if (!email.value.trim()) {
            errors.email = "E-mail ist erforderlich"
        }

        if (!emailConfirm.value.trim()) {
            errors.emailConfirm = "Bitte bestätigen Sie Ihre E-Mail-Adresse."
        } else if (emailConfirm.value !== email.value) {
            errors.emailConfirm = "Die E-Mail-Adresse stimmt nicht überein."
        }

        if (!username.value.trim()) {
            errors.username = "Username ist erforderlich"
        }

        if (!password.value.trim()) {
            errors.password = "Password ist erforderlich"
        }

        validationErrors.value = errors;
        return Object.keys(errors).length === 0;
    }

    // This function resets all values in the registration formular.
    function reset() {
        firstname.value = "";
        lastname.value = "";
        email.value = "";
        emailConfirm.value = "";
        username.value = "";
        password.value = "";
        validationErrors.value = {};
        errorMessages.value = null;
        isSubmitting.value = false;
        successValue.value = null;
    }

    // This function makes an API call. In the first place it calls the validate function to check the values,
    // when the return value is false the function returns. Afterward it sets the value isSubmitting to deactivate the
    // submitting button in the registration formular and to start the spinner action. When the API call was successful
    // the successValue is true and the return value is true. At a failure an error is thrown. Finally, the isSubmitting
    // value is set on false to activate the submitting button again and to stop the spinner action.
    async function register() {
        if (!validate()) {
            return false;
        }
        isSubmitting.value = true;
        errorMessages.value = null;
        successValue.value = null;

        try {
            const payload = {
                firstname: firstname.value,
                lastname: lastname.value,
                email: email.value,
                username: username.value,
                password: password.value,
            };
            await axios.post(`${baseURL}/register`, payload);
            successValue.value = true;
            return true;
        } catch (error) {
            successValue.value = false;
            errorMessages.value = "Es ist ein Fehler bei der Buchung aufgetreten.";
            console.log(error)
            return false;
        } finally {
            isSubmitting.value = false;
        }
    }

    return {
        firstname,
        lastname,
        email,
        emailConfirm,
        username,
        password,
        validationErrors,
        isSubmitting,
        errorMessages,
        successValue,
        validate,
        register,
        reset
    }

})

