/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#5135FF",
        dark : "#1C1C1C",
        darkgray: "#CFCFCF",
        stone: "#666666",
        lightgreen: "#91f1c3",
        purple: "#52247f",
        orange: "#ffcb49",
        neutral: "#f6f6f6",
        zinc: "#525252"
      },
      // fontSize: {
      //   xlg : '80px'
      // },
      screens: {
        'slg': '1300px'
      },
    },
  },
  plugins: [],
}
