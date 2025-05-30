import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  base: "/portfolio-outer-wilds-clean/",

  plugins: [vue()],
  server: {
    fs: {
      strict: false,
      allow: ["..", "/*"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["three"],
  },
});
