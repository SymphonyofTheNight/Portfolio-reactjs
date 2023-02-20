/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '1xl': '1.35em',
      '2xl': '1.65em',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Oxygen: ["Oxygen", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: theme => ({
        'nft': "url('../assets/projectsimg/nft.jpg')",
        'portfolio': "url('../assets/projectsimg/portfolio.jpg')",
        'animefreak': "url('../assets/projectsimg/animefreak.jpg')",
      })
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      lg1: "1366px",
      lg2: "1660px",
      xl: "1700px",
    },
  },
  plugins: [],
};