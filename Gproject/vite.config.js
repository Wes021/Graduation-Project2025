import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin'; // Import the Laravel Vite plugin
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    laravel({
      input: [
        'resources/frontend/src/main.tsx', // Path to your main React entry point
        'resources/css/app.css', // Optional if you have CSS files
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/frontend'),
    },
  },
  server: {
    proxy: {
      '/': 'http://localhost', // Proxy requests to Laravel server
    },
  },
});
