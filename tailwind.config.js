/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chillBg: '#181A1C',
        chillCard: '#22282A',
        chillBlue: '#3254FF',
      },
    },
  },
  plugins: [],
}