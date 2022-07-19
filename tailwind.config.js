/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'blueHeader': '#485696',
        'yellowButton': '#ffdc0a',
        'yellowSection': '#fff2a4',
        'greyHairline': 'rgb(151,151,151)',
        'greyBg': '#f5f5f5'
      },
      fontFamily: {
        openSans: ["OpenSans", ...defaultTheme.fontFamily.sans],
      },
      maxHeight: {
        '128': '32rem',
      },
      margin: {
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '22': '5.5rem',
        '34': '8.5rem',
      },
      width: {
        '85': '22rem',
        '185': '45.125rem',
      },
      height: {
        '85': '22rem',
      },
      maxWidth: {
        '3.5xl': '870px',
      },
      padding: {
        '17': '4.25rem',
      }

    },
  },
  plugins: [],
}
