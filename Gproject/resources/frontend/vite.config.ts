import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
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
