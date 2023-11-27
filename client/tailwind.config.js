/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '6px': '6px',
        '7px': '7px',
      },
      top: {
        '-1rem': '-1rem'
      }
    },
  },
  plugins: [],
}