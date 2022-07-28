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
        'bluePrimary': '#485696',
        'yellowButton': '#ffdc0a',
        'yellowSection': '#fff2a4',
        'greyHairline': 'rgb(151,151,151)',
        'greyBg': '#f5f5f5',
        'blue': '#D4D6FF',
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
        '30': '7.5rem',
        '85': '22rem',
        '185': '45.125rem',
      },
      height: {
        '85': '22rem',
        '98': '24.5rem',
        '104': '26rem',
        '113': '28.25rem',
      },
      maxWidth: {
        '2.5xl': '704px',
        '3.5xl': '870px',
      },
      padding: {
        '17': '4.25rem',
      },
      gap: {
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}
