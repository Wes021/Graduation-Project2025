import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/frontend'),
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'resources/frontend/index.html'), // Point to the correct index.html
    },
  },
});
