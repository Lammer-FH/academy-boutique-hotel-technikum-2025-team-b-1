import axios from 'axios';

const api = axios.create({
    baseURL: 'https://boutique-hotel.helmuth-lammer.at/api/v1/rooms',
    timeout: 10000,
});

export default {
    async getRooms(params = {}) {
        // params: { search, beds, extras, page, limit, sort }
        const res = await api.get('/', { params });
        return res.data; // Annahme: Array oder { data, total } je nach API
    },

    async getRoom(id) {
        const res = await api.get(`/${id}`);
        return res.data;
    },
};
