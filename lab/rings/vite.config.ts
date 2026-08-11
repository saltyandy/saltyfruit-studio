import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/* Builds straight into the portfolio's asset tree with stable filenames —
   getvocal.html links rings.css / rings.js directly, no hash churn. The
   emitted index.html doubles as a standalone shareable cut of the section. */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    outDir: "../../assets/getvocal/rings",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "rings.js",
        chunkFileNames: "rings-[name].js",
        assetFileNames: (info) =>
          info.names?.[0]?.endsWith(".woff2")
            ? "[name][extname]"
            : "rings[extname]",
      },
    },
  },
});
