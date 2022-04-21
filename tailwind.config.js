const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "64l": "64px",
      },
      letterSpacing: {
        semiTight: "-.1px",
      },
      colors: {
        "airbnb-black": "#2b2b2b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
