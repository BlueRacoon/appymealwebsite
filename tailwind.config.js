const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      container: "1520px",
      contentContainer: "1280px",
      smallContainer: "60vw",
      fullViewPort: "87vw",
      fullViewPort100: "92vw",
      
    },

    extend: {
     
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "800px",
        lg: "960px",
        lgl: "1124px",
        xl: "1280px",
        "2xl": "1400px",
      },
      width: {
        'custom-100': '100px',
        'custom-200': '200px',
        'custom-300': '300px',
        'custom-400': '400px',
        'custom-450': '450px',
        'custom-500': '500px',
        'custom-600': '600px',
        'custom-700': '700px',
        'custom-800': '800px',
        'custom-900': '900px',
        'custom-1000': '1000px',
        'custom-1100': '1100px',
        'custom-1000': '1000px',
        'custom-1120': '1176px',
        'custom-1280': '1280px',
        
      },
      zIndex:{
        '-1': '-1',
        '-10': '-10',
        '-20': '-20'

      },
      margin: {
        'large': '100px', // custom margin value
        'extra-large': '450px', // another custom margin value
      },
      colors: {
        blue: "#0071dc",
        lightBlue: "#e6f1fc",
        yellow: "#ffc220",
        hoverBg: "#004f9a",
        lightText: "#46474a",
        primary: "#BF1F2E",
        secondary: "#CC4C58",
        muted: "#D97982",
        preparing: "yellow",
        dark: "#240115",
        lightdark: "#B6AAB1",
        smoke: "#F1EDEE",
      },
      boxShadow: {
        bannerShadow: "0px 1px 2px 1px #00000026",
      },
      fontFamily: {
        sans: ["var(--font-open_sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
