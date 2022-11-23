/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "darkest": "#010914",
        blue: "#054776",
        lightBlue: "#0981D7",
        green: "#496F5B",
        darkGreen: "#406350",
        lightGreen: "#77A68D",
        brown: "#C58F44",
        lightBrown: "#DDBE92",
        red: "#AE5132",
        lightRed: "#D68A71",
        accentText: "#F0F4F9",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-blue":
          "linear-gradient(81.66deg, #5E431D 7.21%, #6D4E22 45.05%, #8C642C 78.07%)",

        "gradient-reds":
          "linear-gradient(90deg, #B5432C 14.53%, #CF533A 69.36%, #D3614A 117.73%)",
      }),
      fontFamily: {
        covered: ["Covered By Your Grace", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1255px",
      xl: "1700px",
    },
  },
  plugins: [],
};