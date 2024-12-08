/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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