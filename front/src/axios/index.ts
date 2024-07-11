import axios from "axios";

export const Axios = axios.create({
  baseURL: 'http://localhost:9999/',
  timeout: 5000,
});