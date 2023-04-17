/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#243F4D",
        secondary: "#41728B",
        tertiary: "#1A2E37",
        fourth: "#EF3400",
        fourthLight: "#FF7F5C",
        fourthDark: "#CC2C00",
        fifth: "#F0A800",
        fifthLight: "#FFC233",
        fifthDark: "#CC8F00",
        sixth: "#799871",
        sixthLight: "#A6BAA0",
        sixthDark: "#5C7656",
        "black-100": "#13222A",
        "black-200": "#060B0E",
        "white-100": "#eae8e4",
        "white-200": "rgba(255, 255, 255, 0.87)",
      },
      animation: {
        "spin-slow": "spin 7.5s linear infinite",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        about: "7px 5px 0px 1px #000",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0, 0, 0, 0.0) 0px, rgba(0, 0, 0, 0.0) 92px, #000 99px)",
        lightModeBg: "linear-gradient(to bottom, #FFF, #EBEBEB)",
        darkModeBg: "linear-gradient(to bottom, #243F4D, #1A2E37)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "930px" },
      xmd: { max: "816px" },
      sm: { max: "703px" },
      xs: { max: "569px" },
    },
  },
  plugins: [],
};
