/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-color": "#0C356A",
      "secondary-color": "#279EFF",
      "third-color": "#40F8FF",
      "forth-color": "#D5FFD0",
      "blur-color": "#F8EDFF",
      white: "#FFFFFF",
    },
    fontFamily: {
      primary: ["Poppins"],
    },
    extend: {},
    screens: {
      sm: { min: "320px", max: "640px" },
      md: { min: "641px", max: "768px" },
      lg: { min: "769px", max: "1024px" },
      xl: { min: "1025px", max: "1280px" },
      "2xl": { min: "1281px", max: "1376px" },
      "3xl": { min: "1378px" },
    },
  },
  plugins: [],
};
