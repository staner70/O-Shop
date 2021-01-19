module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '90' : '90%',
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
