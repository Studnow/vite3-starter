/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/**/*.{html, hbs}", "src/sass/*.sass", "src/css/*.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=mytheme]"],
          primary: "#101010",
          "primary-content": "#ffffff",
          secondary: "#DF6464",
          accent: "#FFA542",
          "accent-content": "#fff",
          neutral: "#838383",
          "base-100": "#EAEAEA",
          "base-200": "#F9F9F9",
          "base-content": "#838383",
          info: "#A8E2F0",
          success: "#43D854",
          warning: "#E78B13",
          error: "#EE3F53",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
