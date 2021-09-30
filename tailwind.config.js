module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#1EA4CE",
          white: "#FFFFFF",
          black: "#000000",
          gray: "#1EA4CE",
        },
        bg: {
          gray: "#E5E5E5",
          white: "#F3F0FE",
        },
        text: {
          gray: "#6F6F6F",
          black: "#191919",
        },
        border: {
          gray: "#E5E5E5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
