import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server:{
    host: "0.0.0.0",
    fs: {
      strict: false, // Allow serving files outside of the project root
      
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // <-- add alias here
    },
  },
});
