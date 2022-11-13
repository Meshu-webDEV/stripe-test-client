/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'BRAND-COLOR-transparent': '#B8BAD6',
        'BRAND-COLOR-400': '#3A42CC',
      },
      fontFamily: {
        poppins: ['Poppins'],
        montserrat: ['Montserrat'],
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
