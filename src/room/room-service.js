import axios from "axios";

const api = axios.create({
  baseURL: "https://boutique-hotel.helmuth-lammer.at/api/v1/rooms",
  timeout: 10000,
});

export const getRoomList = async (params = {}) => {
  const res = await api.get("/", { params });
  return res.data;
};
