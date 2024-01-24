/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      abu: "#FAFAFB",
      putih: "#F5F5F5",
      biru: "#0057FF",
      hijau: "#9ADE7B",
      hitam: "#000000",
    },
    fontFamily: {
      primary: ["Poppins"],
    },
    extend: {},
    screens: {
      hp: { min: "320px", max: "767px" },
      tablet: { min: "768px", max: "1024px" },
      laptop: { min: "1025px", max: "1280px" },
      large: { min: "1281px", max: "1376px" },
      "extra-large": { min: "1378px" },
    },
  },
  plugins: [],
};
