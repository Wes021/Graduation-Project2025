/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/views/**/*.blade.php', // All Blade files, including subdirectories
    './resources/frontend/src/**/*.{js,jsx,ts,tsx}', // React components
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        arabic: ['Noto Kufi Arabic', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};