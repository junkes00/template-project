import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("VITE_API_URL is not defined in your environment variables.");
}

console.log("API URL =>", import.meta.env.VITE_API_URL);

export const api = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    "Content-Type": "application/json",
  },
});
