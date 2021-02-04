const { faLaptop } = require("@fortawesome/free-solid-svg-icons");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screems:{
      
      
    },

    extend: {
      height: {
        '80' : '80%',
'20':'20%',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'bgred': '#cc3e37',
        'bgback': '#ebe8de'
       })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
