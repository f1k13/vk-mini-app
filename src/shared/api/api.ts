import axios from "axios";
import { apiKey } from "../../entities/weather/lib/api-key";

export const weatherApi = axios.create({
  baseURL: "https://weatherapi-com.p.rapidapi.com/current.json",
  headers: {
    "X-RapidAPI-Key": `${apiKey}`,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
});
export const api = axios.create({
  baseURL: `http://localhost:3000/`,
  headers: { "Content-Type": "application/json" },
});
export const apiFormData = axios.create({
  baseURL: `http://localhost:3000`,
  headers: { "Content-Type": "multipart/form-data" },
});
export const setUserIdToHeaders = (userId: number) => {
  const newHeaders = {
    ...api.defaults.headers.common,
    "X-User-Id": userId,
  };
  api.defaults.headers.common = { ...newHeaders };
  apiFormData.defaults.headers.common = { ...newHeaders };
};
