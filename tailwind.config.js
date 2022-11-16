/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "darkest": "#191919",
        blue: "#2D4263",
        blue2: "#46669B",
        lightBlue: "#B4C5E4",
        accentBlue: "#E1E8F4",
        green: "#517B62",
        lightGreen: "#77A68A",
        accentGreen: "#9CBFA9",
        red: "#B5432C",
        lightRed: "#CF533A",
        accentRed: "#E39B8C",
        accentText: "#F0F4F9",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-blues":
          "linear-gradient(81.66deg, #2D4263 7.21%, #46669B 45.05%, #B4C5E4 78.07%)",

        "gradient-reds":
          "linear-gradient(90deg, #B5432C 14.53%, #CF533A 69.36%, #D3614A 117.73%)",
      }),
      fontFamily: {
        cinzel: ["Cinzel", "sans-serif"],
        quicksand: ["Quicksand", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};