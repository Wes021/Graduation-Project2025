import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/views/**/*.blade.php', // All Blade files, including subdirectories
    './resources/frontend/src/**/*.{js,jsx,ts,tsx}', // React components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // Uncomment if you need plugins
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
