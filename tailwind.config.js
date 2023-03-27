/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "580px",
      md: "900px",
      lg: "1050px",
      xl: "1340px",
    },
    extend: {
      colors: {
        primary: "#051221",
        text_gray: "#C0C2C7",
        text_lightblue: "#2576AB",
        icons: "#129DFF",
        blueLight: "#0E122F",
      },
    },
  },
  plugins: [],
};
