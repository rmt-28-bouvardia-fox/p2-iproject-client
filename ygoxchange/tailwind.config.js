/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      exo: ["Exo 2", "sans-serif"],
      noto: ["Noto Sans", "sans-serif"],
    },
    extend: {
      colors: {
        redTheme: "#FD131D",
        blueTheme: "#2F467A",
        darkBlueTheme: "#012068",
        goldTheme: "#D4BA52",
        greyTheme: "#CCCCCC",
        darkGreyTheme: "#1D1D1D",
      },
    },
  },
  plugins: [],
};
