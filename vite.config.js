// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://car-data.p.rapidapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'X-RapidAPI-Key': 'b622df426fmsha6933a7669ba1bfp1b7cb6jsnbc928321d3b1',
          'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
        },
      },
    },
  },
});
