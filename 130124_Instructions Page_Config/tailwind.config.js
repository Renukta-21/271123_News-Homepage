/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        'negro-opaco' : 'rgba(0, 0, 0, 0.7)',
      },
      backgroundImage:{
        '01' : 'url(assets/img-ruta/IIS01.png)',
        'iconOpen':'url(assets/img/icon-hamburger.svg)',
      }
    },
  },
  plugins: [],
}