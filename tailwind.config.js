module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: {
            1: "#E5E5E5",
            2: "#3A3A3A",
            3: "#B1ABAB",
            4: "#252525",
          },
          black: {
            1: "#0E0F14",
            2: "#181818",
            3: "#121212",
          },
          blue: {
            1: "#14151F",
          },
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
