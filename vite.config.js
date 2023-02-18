import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          lodash: ['lodash']
        }
      }
    },
    chunkSizeWarningLimit: 1000 * 1000
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/scss/fondations/_mixins.scss";
          @import "@/scss/fondations/_functions.scss";
          @import "@/scss/fondations/_variables.scss";
        `,
      },
    },
  },
});