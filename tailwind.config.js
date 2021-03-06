module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  // content: [
  //   // "./pages/**/*.{js,ts,jsx,tsx}",
  //   // "./components/*.{js,ts,jsx,tsx}",
  //   // "./components/*.js",
  //   // "./pages/*.",
  // ],
  theme: {
  
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // require("tailwindcss"),
    // equire("autoprefixer"),
  ]
};
