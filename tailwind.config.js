module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: {
            1: "#E5E5E5",
            2: "#3A3A3A",
          },
          black: {
            1: "#0E0F14",
            2: "#181818",
          },
        },
      },
    },
  },
  plugins: [],
};
