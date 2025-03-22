// https://vitejs.dev/config/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import visualizer from "vite-plugin-visualizer";

export default defineConfig({
  base: "/Portfolio", // Change this if deploying under a subdirectory
  plugins: [react(), visualizer()], // Add necessary plugins
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            if (id.includes("lodash")) return "lodash-vendor";
            return "vendor"; // General vendor chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit
  },
});


