const mix = require('laravel-mix');
mix.js('resources/frontend/src/main.tsx', 'public/js')
   .react()
   .setPublicPath('public');