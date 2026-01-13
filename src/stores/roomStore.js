import {defineStore} from "pinia";
import {ref, computed} from "vue";
import api from "@/services/api";

const EXTRA_MAP = {
    bathroom: {label: "Eigenes Bad", type: "bathroom"},
    minibar: {label: "Minibar", type: "minibar"},
    television: {label: "Fernseher", type: "television"},
    livingroom: {label: "Wohnbereich", type: "livingroom"},
    aircondition: {label: "Klimaanlage", type: "aircondition"},
    wifi: {label: "WLAN", type: "wifi"},
    breakfast: {label: "Frühstück", type: "breakfast"},
    "handicapped accessible": {
        label: "Barrierefrei",
        type: "handicapped accessible",
    },
};

const normalizeExtras = (extras = [], roomId = "room") => {
  const seen = new Set();
  const normalizedExtras = [];

  for (const rawEntry of extras) {
    const [rawKey, value] = Object.entries(rawEntry || {})[0] || [];
    if (!value) continue;

    const normalizedKey = (rawKey || "").trim().toLowerCase();
    if (!EXTRA_MAP[normalizedKey] || seen.has(normalizedKey)) continue;

    const { label, type } = EXTRA_MAP[normalizedKey];
    normalizedExtras.push({
      id: `extra-${roomId}-${normalizedKey}`,
      label,
      type,
    });
    seen.add(normalizedKey);
  }

  return normalizedExtras;
};

const normalizeRoom = (room) => ({
    ...room,
    name: room.roomsName,
    number: room.roomsNumber || room.roomNumber,
    extras: normalizeExtras(room.extras, room.id),
    image: { src: `/Room-Images/Boutique-Hotel-Rooms-${room.id}.jpg` },
});

async function getAvailability(roomId, arrivalDate, departureDate) {
  try {
    const response = await api.get(
      `/room/${roomId}/from/${arrivalDate}/to/${departureDate}`
    );
    return response.data.available;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return false;
    }
    throw new Error(`Server error: ${err.message}`);
  }
}

export const useRoomStore = defineStore("roomStore", () => {
  const rooms = ref([]);
  const currentRoom = ref(null);
  const isLoading = ref(false);
  const error = ref(null);
  const availabilityFilter = ref({
    arrivalDate: null,
    departureDate: null,
  });
  const availableRoomIds = ref(null);
  const isAvailable = ref(null);
  const isCheckingAvailability = ref(false);
  const availabilityError = ref(null);
  const currentPage = ref(1);
  const itemsPerPage = ref(5);

  const filteredRooms = computed(() => {
    if (
      !availabilityFilter.value.arrivalDate ||
      !availabilityFilter.value.departureDate ||
      !availableRoomIds.value
    ) {
      return rooms.value;
    }
    return rooms.value.filter((room) => availableRoomIds.value.has(room.id));
  });
  const totalRooms = computed(() => filteredRooms.value.length);
  const paginatedRooms = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredRooms.value.slice(start, end);
  });

  async function loadRooms() {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await api.get("/rooms");
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
      const res = await api.get(`/rooms/${roomId}`);
      currentRoom.value = normalizeRoom(res.data);
    } catch (err) {
      error.value = err.message || "Failed to load room";
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  }

  async function checkAvailability(roomId) {
    availabilityError.value = null;
    isAvailable.value = null;

    if (!availabilityFilter.value.arrivalDate || !availabilityFilter.value.departureDate) {
      availabilityError.value =
        "Bitte wähle ein Anreise- und Abreisedatum aus.";
      return;
    }

    if (availabilityFilter.value.departureDate < availabilityFilter.value.arrivalDate) {
      availabilityError.value =
        "Das Abreisedatum muss nach dem Anreisedatum liegen.";
      return;
    }

    isCheckingAvailability.value = true;
    try {
      const result = await getAvailability(roomId, availabilityFilter.value.arrivalDate, availabilityFilter.value.departureDate);
      isAvailable.value = result;
    } catch (err) {
      availabilityError.value =
        err.message || "Serverfehler - bitte versuchen Sie es später erneut.";
    } finally {
      isCheckingAvailability.value = false;
    }
  }

  async function applyAvailabilityFilter(arrivalDate, departureDate) {
    availabilityError.value = null;
    availabilityFilter.value = { arrivalDate, departureDate };
    availableRoomIds.value = null;

    if (!arrivalDate || !departureDate) {
      currentPage.value = 1;
      return;
    }

    if (departureDate < arrivalDate) {
      availabilityError.value =
        "Das Abreisedatum muss nach dem Anreisedatum liegen.";
      return;
    }

    isCheckingAvailability.value = true;
    try {
      const results = await Promise.all(
        rooms.value.map(async (room) => {
          const available = await getAvailability(
            room.id,
            arrivalDate,
            departureDate
          );
          return { roomId: room.id, available };
        })
      );

      availableRoomIds.value = new Set(
        results
          .filter((result) => result.available)
          .map((result) => result.roomId)
      );
      currentPage.value = 1;
    } catch (err) {
      availabilityError.value =
        err.message || "Die Verfügbarkeitsprüfung ist fehlgeschlagen.";
    } finally {
      isCheckingAvailability.value = false;
    }
  }

  function clearAvailabilityFilter() {
    availabilityFilter.value = { arrivalDate: null, departureDate: null };
    availableRoomIds.value = null;
    availabilityError.value = null;
    currentPage.value = 1;
  }

  return {
    rooms,
    currentRoom,
    isLoading,
    error,
    availabilityFilter,
    availableRoomIds,
    isCheckingAvailability,
    isAvailable,
    availabilityError,
    currentPage,
    itemsPerPage,
    totalRooms,
    filteredRooms,
    paginatedRooms,
    loadRooms,
    loadRoom,
    checkAvailability,
    applyAvailabilityFilter,
    clearAvailabilityFilter,
  };
});
