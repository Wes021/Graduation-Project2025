import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import laravel from 'laravel-vite-plugin';
export default defineConfig({
  plugins: [
    react(),
    laravel({
        input: ['resources/css/app.css', 'resources/frontend/src/main.tsx'], // Include CSS and React entry
        refresh: true, // Enable hot reload
    }),
],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/frontend/src'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  build: {
    outDir: 'public/build', // Ensure Vite output is public/build
    rollupOptions: {
      input: 'resources/frontend/index.html', // Ensure it points to your main entry
    },
  },
});
