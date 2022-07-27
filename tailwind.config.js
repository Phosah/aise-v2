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
            9: "#EFEFEF",
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
            6: "#42ADE2",
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
            4: "#9847B5",
          },
          red: {
            1: "#E43A15",
            2: "#E65245",
            3: "#BF0C0C",
            4: "#FF0707",
          },
          yellow: {
            1: "#DD821F",
          },
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem",
      },
      backgroundImage: {
        one: "url('../src/assets/other-works/1.png')",
        two: "url('../src/assets/other-works/2.png')",
        three: "url('../src/assets/other-works/3.png')",
        four: "url('../src/assets/other-works/4.png')",
        five: "url('../src/assets/other-works/5.png')",
        analysis: "url('../src/assets/powrfinance/competitive-analysis.png')",
        "analysis-mobile":
          "url('../src/assets/other-works/competitive-analysis-mobile.png')",
        "persona-1-mobile":
          "url('../src/assets/other-works/user-persona-2.png')",
        business: "url('../src/assets/powrfinance/business-opportunity.png')",
        "business-mobile":
          "url('../src/assets/other-works/business-opportunity-mobile.png')",
        solutions: "url('../src/assets/powrfinance/solutions.png')",
        "solutions-mobile":
          "url('../src/assets/other-works/the-solutions-mobile.png')",
      },
    },
  },
  plugins: [],
};
