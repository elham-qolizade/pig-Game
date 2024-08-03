/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
    },
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fff',
      'black': '#000',
      'gray':'#CCCCCC',
      'orange':'#f27121',
      'red':'#EB4D4D'
    },
  },
  plugins: [],
}

