/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#33506d",
        "green-primary": "#8FD14F",
        "cream-primary" : "#E6A623"
      },
      fontFamily: {
        koulen: 'Koulen',
        merienda: 'Merienda',
        ruhi: 'Frank Ruhl Libre',
        nunito: 'Nunito Sans',
      }
    }
  },
  plugins: [
    daisyui
  ],
}

