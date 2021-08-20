module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        heroBg: "url('/images/heroBG.png')",
        WorkBg: "url('/images/WorkBG.png')",
        AboutBg: "url('/images/AboutBG.png')",
        ContactBg: "url('/images/ContactBG.png')",
        FooterBg: "url('/images/FooterBG.png')",
      }),
      colors: {
        darkGray: "#292929",
        violet: "#A476E9",
        darkBlue: "#37517e",
        lightBlue: "#47b2e4",
        Blue: "#0178cd",
        Gray: "#f3f5fa",
        darkGray100: "#3d4d6a",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
