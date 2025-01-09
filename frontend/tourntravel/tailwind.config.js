/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'textTeal':'#0d9488'
      },
      backgroundColor:{
        'bgTeal':'#14b8a6'
      }
    },
  },
  plugins: [],
}