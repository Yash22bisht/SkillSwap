/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        md: "2px 2px 4px rgba(255, 255, 255, .95)", // Customize shadow size and color
      },
      fontFamily: {
        Luckiest: ['Luckiest Guy', 'cursive'],
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow") ,
    require('tailwind-scrollbar-hide')
  ],
  
}

