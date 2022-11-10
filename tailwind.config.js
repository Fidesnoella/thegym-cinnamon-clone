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
        darkpurple: "#525252",
        orange: "#ffcb49",
        neutral: "#f6f6f6",
        zinc: "#525252",
        teal: "#5125FF1A"
      },
      screens: {
        'slg': '81.25rem'
      },
    },
  },
  plugins: [],
}
