import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    pluginReact({
      jsxRuntime: "automatic",
    }),
  ],
});
