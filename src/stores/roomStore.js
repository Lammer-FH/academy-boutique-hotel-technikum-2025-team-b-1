import {PARAM_PARSER_BOOL as axios} from "vue-router/dist/experimental/index.mjs";
import {defineStore} from "pinia";

export const useRoomStore = defineStore("roomStore", {
    actions: {
        async checkAvailability(roomId, arrivalDate, depatureDate) {
            try {
                const response = await axios.get(`https://boutique-hotel.helmuth-lammer.at/api/v1/room/${roomId}/from/${arrivalDate}/to/${depatureDate}`);

                if (response.status === 200) {
                    return true;
                }
                return false;
            } catch (err) {
                if (err.response) {
                    if (err.response.status === 404) {
                        return false;
                    }
                    throw new Error("Serverfehler: " + err)
                }
            }
        }
    }
})