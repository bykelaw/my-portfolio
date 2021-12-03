module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF6464",
        secondary: "#00A8CC",
        dark: "#21243D",
        light: "#8695A4",
        "light-transparent": "#8695a480",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
