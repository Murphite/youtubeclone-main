import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5113,
    historyApiFallback: true, // You can change the port if needed
  },
});
