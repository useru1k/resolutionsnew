/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main : "#111111",
        primary: "rgb(107 33 168 / 0.8)"
      }
    },
  },
  plugins: [],
}

