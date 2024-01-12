/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'White':'hsl(0, 0%, 100%)',
        'Light-pink': 'hsl(275, 100%, 97%)',
        'Grayish-purple': 'hsl(292, 16%, 49%)',
        'Dark-purple': 'hsl(292, 42%, 14%)',
      },
      backgroundImage:{
        'desktopBack':'url(../assets/images/background-pattern-desktop.svg)',
        'iconPlus' : 'url(../assets/images/icon-plus.svg)',
        'iconMinus' : 'url(../assets/images/icon-minus.svg)',
      }
    },
  },
  plugins: [],
}