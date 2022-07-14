/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        'blueHeader': '#485696',
        'yellowButton': '#ffdc0a',
      }
    },
  },
  plugins: [],
}
