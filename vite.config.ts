import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/portfolio/", // ✅ Set the base path for GitHub Pages
  server: {
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && false, 
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
