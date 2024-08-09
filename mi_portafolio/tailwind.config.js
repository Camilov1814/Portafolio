/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg',
      },
      colors:{
        primary: '#405D72',
        secondary: '#758694',
        background: {
          main: '#FFF8F3',
          secondary: '#F7E7DC',
        },
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Open Sans', 'sans-serif'],
        'accent': ['Poppins', 'sans-serif'],
      },
  },
  variants: {
    extend: {
      backfaceVisibility: ['hover', 'focus'],
    },
  },
  plugins:[
    require('tailwind-scrollbar-hide', 'tailwindcss-debug-screens ' ,'@tailwindcss/aspect-ratio'),
  ],
}
}
