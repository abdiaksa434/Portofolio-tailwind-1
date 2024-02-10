/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
    },
    extend: {
      fontFamily:{
        'inter': ['Inter'],
        'montserrat': ['Montserrat'],

      },
      fontSize:{
        xxs: '12px',
      }
      ,
      colors:{
        'primary': '#2dd4bf',
        'secondary': '#0f172a',
      },
    },
  },
  plugins: [],
}

