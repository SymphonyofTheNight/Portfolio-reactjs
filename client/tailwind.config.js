/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.15rem',
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
        'bg-nft': "url('../assets/projectsimg/nft.jpg')",
        'bg-portfolio': "url('../assets/projectsimg/portfolio.jpg')",
        'bg-animefreak': "url('../assets/projectsimg/animefreak.jpg')",
      })
    },
    screens: {
      xs: "360px", // s-phone
      sss: "405px", // m-phone
      ss: "620px", // s-tablet
      sm: "768px", // tablet
      md: "1024px", // tablet - ipad
      lg: "1280px", // ipad
      lg1: "1366px", // laptop
      lg2: "1660px", // computer
      xl: "1920px", // computer-l
    },
  },
  plugins: [],
};