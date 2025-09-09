/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#DBE4F0",
          100: "#84CAE0",
          200: "#9282D1",
          300: "#7498C2",
          400: "#596B83",
          500: "#4172A3",
          600: "#2C6094",
          700: "#1B5085",
          800: "#0C4175",
          900: "#003366",
        },
        secondary: {
          50: "#F2FAFD",
          100: "#E6F6FB",
          200: "#D9F0F9",
          300: "#CCE8F7",
          400: "#BDE2F5",
          500: "#ABE1F4",
          600: "#99D3EE",
          700: "#87CEE8",
          800: "#6FCDE4",
          900: "#4DA3C7",
        },
        tertiary: {
          50: "#EBEBEB",
          100: "#D6D6D6",
          200: "#C2C2C2",
          300: "#ADADAD",
          400: "#999999",
          500: "#858585",
          600: "#707070",
          700: "#5C5C5C",
          800: "#474747",
          900: "#333333",
          1000: "#000000",
        },
        status: {
          success: "#32B856",
          error: "#9B1C1C",
          warning: "#FFB800",
          info: "#007BFF",
          brand: "#003366",
          disabled: "#6C757D",
          new: "#6F42C1",
        },
      },
      container: {
        center: true, // Ensures the container is centered
        padding: "1rem", // Default padding for all screens
      },
    },
  },
  plugins: [],
};
