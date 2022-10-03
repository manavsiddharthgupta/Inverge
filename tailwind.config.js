/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "420px",
      sm: "680px",
      md: "860px",
      lg: "980px",
      xl: "1204px",
      xxl: "1460px",
    },
    extend: {},
  },
  plugins: [],
};
