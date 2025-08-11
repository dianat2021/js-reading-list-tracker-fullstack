import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "public", // Set public as the root
  publicDir: "public", // Ensures assets are served correctly
  build: {
    outDir: "dist", // Output compiled files here
    rollupOptions: {
      input: path.resolve(__dirname, "public/index.html"), // Define entry point
    },
  },
  server: {
    open: true, // Auto open browser on start
  },
});
