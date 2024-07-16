/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-image': "url('/img/banner/basketball.webp')",
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], // Fuente por defecto para todo el texto
      }
    }
  },
  plugins: [],
}

