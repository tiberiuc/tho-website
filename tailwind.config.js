/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#485696",
        yellowButton: "#ffdc0a",
        yellowPricing: "#FFDC0B",
        blueModal: "#1C357C",
        yellowSection: "#fff2a4",
        greyHairline: "rgb(151,151,151)",
        greyBg: "#f5f5f5",
        blue: "#D4D6FF",
      },
      fontFamily: {
        openSans: ["OpenSans", ...defaultTheme.fontFamily.sans],
      },
      maxHeight: {
        104: "26rem",
        112: "28rem",
        128: "32rem",
        180: "45rem",
      },
      margin: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        34: "8.5rem",
        100: "40rem",
      },
      width: {
        30: "7.5rem",
        85: "22rem",
        185: "45.125rem",
      },
      height: {
        85: "21.25rem",
        86: "22rem",
        98: "24.5rem",
        104: "26rem",
        113: "28.25rem",
        120: "31rem",
        168: "45rem",
        204: "55rem",
      },
      maxWidth: {
        "2.5xl": "704px",
        "3.5xl": "870px",
      },
      padding: {
        17: "4.25rem",
      },
      gap: {
        22: "5.5rem",
      },
      textDecorationThickness: {
        3: "3px",
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "2080px",
        // => @media (min-width: 2080px) { ... }
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
