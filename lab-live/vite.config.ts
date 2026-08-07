import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Builds the live notification island for the case-study page: one IIFE
// bundle (React included) plus one stylesheet, dropped into ../assets so
// the static site can load them with plain tags.
export default defineConfig(({command}) => ({
  plugins: [react(), tailwindcss()],
  define: {'process.env.NODE_ENV': JSON.stringify('production')},
  // public/ only serves the dev harness's video — don't copy it into ../assets
  publicDir: command === 'serve' ? 'public' : false,
  build: {
    outDir: '../assets/lab-live',
    emptyOutDir: true,
    lib: {
      entry: 'src/main.tsx',
      name: 'LabLive',
      formats: ['iife'],
      fileName: () => 'lab-live.js',
      cssFileName: 'lab-live',
    },
    cssCodeSplit: false,
  },
}));
