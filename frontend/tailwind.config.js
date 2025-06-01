/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pokedexRed: "#FF3334",
      },
      borderRadius: {
        xl2: "30px",
      },
      boxShadow: {
        custom: "0px 4px 20px 10px rgba(0, 0, 0, 1)",
        custom50: "0px 4px 20px 10px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        pikafont: ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [],
};
