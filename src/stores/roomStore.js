import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

const baseURL = "https://boutique-hotel.helmuth-lammer.at/api/v1";

// ... (Keep your existing EXTRA_MAP and helper functions here) ...
const EXTRA_MAP = {
    bathroom: { label: "Eigenes Bad", type: "bathroom" },
    minibar: { label: "Minibar", type: "minibar" },
    television: { label: "Fernseher", type: "television" },
    livingroom: { label: "Wohnbereich", type: "livingroom" },
    aircondition: { label: "Klimaanlage", type: "aircondition" },
    wifi: { label: "WLAN", type: "wifi" },
    breakfast: { label: "Frühstück", type: "breakfast" },
    "handicapped accessible": { label: "Barrierefrei", type: "handicapped accessible" },
};

const normalizeExtras = (extras = [], roomId = "room") => {
    const seen = new Set();
    return extras.reduce((acc, rawEntry) => {
        const [rawKey, value] = Object.entries(rawEntry || {})[0] || [];
        if (!value) return acc;
        const normalizedKey = (rawKey || "").trim().toLowerCase();
        if (!EXTRA_MAP[normalizedKey] || seen.has(normalizedKey)) return acc;
        seen.add(normalizedKey);
        const mapEntry = EXTRA_MAP[normalizedKey];
        acc.push({
            id: `extra-${roomId}-${normalizedKey}`,
            label: mapEntry.label,
            type: mapEntry.type,
        });
        return acc;
    }, []);
};

const normalizeRoom = (room) => ({
    ...room,
    name: room.roomsName,
    number: room.roomsNumber,
    extras: normalizeExtras(room.extras, room.id),
});

export const useRoomStore = defineStore("roomStore", () => {
    // --- State ---
    const rooms = ref([]); // Stores ALL rooms fetched from API
    const currentRoom = ref(null);
    const isLoading = ref(false);
    const error = ref(null);

    // Pagination State
    const currentPage = ref(1);
    const itemsPerPage = ref(5); // Set to 5 as requested

    // --- Getters (Computed) ---

    // Total count is based on the full list
    const totalRooms = computed(() => rooms.value.length);

    // This slices the full 'rooms' array based on the current page
    const paginatedRooms = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage.value;
        const end = start + itemsPerPage.value;
        return rooms.value.slice(start, end);
    });

    // --- Actions ---
    async function loadRooms() {
        isLoading.value = true;
        error.value = null;
        try {
            // Fetch ALL rooms
            const res = await axios.get(`${baseURL}/rooms`);
            rooms.value = res.data.map(normalizeRoom);
        } catch (err) {
            error.value = err.message || "Failed to load rooms";
            console.error(err);
        } finally {
            isLoading.value = false;
        }
    }

    async function loadRoom(roomId) {
        isLoading.value = true;
        error.value = null;
        try {
            const res = await axios.get(`${baseURL}/room/${roomId}`);
            currentRoom.value = normalizeRoom(res.data);
        } catch (err) {
            error.value = err.message || "Failed to load room";
            console.error(err);
        } finally {
            isLoading.value = false;
        }
    }

    async function checkAvailability(roomId, arrivalDate, departureDate) {
        try {
            const response = await axios.get(
                `${baseURL}/room/${roomId}/from/${arrivalDate}/to/${departureDate}`
            );
            return response.status === 200;
        } catch (err) {
            if (err.response && err.response.status === 404) {
                return false;
            }
            throw new Error(`Server error: ${err.message}`);
        }
    }

    return {
        rooms,
        currentRoom,
        isLoading,
        error,
        currentPage,
        itemsPerPage,
        totalRooms,
        paginatedRooms,
        loadRooms,
        loadRoom,
        checkAvailability,
    };
});
