/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Yellow': 'hsl(47, 88%, 63%)',
        'White': 'hsl(0, 0%, 100%)',
        'Grey': 'hsl(0, 0%, 50%)',
        'Black': 'hsl(0, 0%, 7%)',
      },
      boxShadow:{
        'custom' : '10px 10px 0px black',
      },
      fontFamily:{
        'figtree':['Figtree', 'sans-serif']
      }
    },
  },
  plugins: [],
}