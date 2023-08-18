import axios, { AxiosInstance } from "axios";

const instance:AxiosInstance = axios.create({
  // baseURL: process.env.BASE_URL,
  baseURL: "https://api.openweathermap.org/data/2.5/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;