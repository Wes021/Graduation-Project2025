import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from 'path';

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
        proxy: {
            '/': {
                target: 'http://127.0.0.1:8000', // Laravel backend
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
