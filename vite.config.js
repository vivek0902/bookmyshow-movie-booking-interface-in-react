import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "bookmyshow-movie-booking-interface-in-react",
  plugins: [react()],
});
