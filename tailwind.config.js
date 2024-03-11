/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    'blue': '#1fb6ff',
    'pink': {
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#fef2f3',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}