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
            5: "#F5F6FA",
            7: "#1A1A1A",
            8: "#272727",
          },
          black: {
            1: "#0E0F14",
            2: "#181818",
            3: "#121212",
            4: "#0E0802",
          },
          blue: {
            1: "#14151F",
            2: "#0052D4",
            3: "#4364F7",
            4: "#6FB1FC",
            5: "#0A71CB",
          },
          orange: {
            1: "#DD821F",
            2: "#E65C00",
            3: "#F9D423",
            4: "#B87507",
          },
          green: {
            1: "#ADD100",
            2: "#7B920A",
            3: "#006F43",
            4: "#52920A",
          },
          pink: {
            1: "#EC008C",
            2: "#FC6767",
          },
          purple: {
            1: "#DA22FF",
            2: "#9733EE",
            3: "#7F19D8",
          },
          red: {
            1: "#E43A15",
            2: "#E65245",
            3: "#BF0C0C",
          },
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
  },
  plugins: [],
};
