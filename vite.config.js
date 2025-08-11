import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "public",
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: path.resolve(__dirname, "public/index.html"),
    },
  },
  server: {
    open: true,
  },
});
