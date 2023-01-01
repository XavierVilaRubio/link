module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        backgroundLight: "#fef9fb",
        backgroundDark: "#1c2c4e",
        textLight: "#1c2c4e",
        textDark: "#f2f2f4",
        accentLight: "#007c7c",
        accentDark: "#00afaf",
      },
    },
  },
  plugins: [],
};
