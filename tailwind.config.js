/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      orbitron: ['Orbitron', 'sans-serif'], // Replace 'CustomFont' with the name of your font
    },
    extend: {
      spacing: {
        '6px': '6px',
        '7px': '7px',
      }
    },
  },
  plugins: [],
}