import {defineStore} from "pinia";
import {computed, ref} from "vue";
import api from "@/services/api";

export const useUserStore = defineStore("userStore", () => {
    const token = ref(null);
    const user = ref(null);
    const isLoading = ref(false);
    const error = ref(null);

    const isLoggedIn = computed(() => Boolean(token.value) && Boolean(user.value));

    async function login(email, password) {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await api.post("/login", {
                clientId: email,
                secret: password,
            });

            const jwt = response.data;

            if (!jwt || typeof jwt !== "string") {
                throw new Error("Invalid token received");
            }

            token.value = jwt;
            localStorage.setItem("auth_token", jwt);
            await fetchUser();

            return true;
        } catch (err) {
            if (err.response?.status === 401 || err.response?.status === 403 || err.response?.status === 422) {
                error.value = "E-Mail oder Passwort ist falsch.";
            } else if (err.response?.status === 400) {
                error.value = "Bitte geben Sie gültige Anmeldedaten ein.";
            } else if (!err.response) {
                error.value = "Verbindungsfehler. Bitte versuchen Sie es später erneut.";
            } else {
                error.value = "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
            }
            return false;
        } finally {
            isLoading.value = false;
        }
    }

    async function fetchUser() {
        if (!token.value) return;
        isLoading.value = true;
        try {
            const response = await api.get("/user/");
            user.value = response.data;
        } catch (err) {
            console.error("Failed to fetch user profile:", err);
            if (err.response?.status === 401) {
                logout();
            }
        } finally {
            isLoading.value = false;
        }
    }

    function logout() {
        token.value = null;
        user.value = null;
        error.value = null;
        localStorage.removeItem("auth_token");
    }

    function restoreSession() {
        const storedToken = localStorage.getItem("auth_token");
        if (storedToken) {
            token.value = storedToken;
            fetchUser();
        }
    }

    function clearError() {
        error.value = null;
    }

    return {
        token,
        user,
        isLoading,
        error,
        isLoggedIn,
        login,
        logout,
        fetchUser,
        restoreSession,
        clearError,
    };
});
