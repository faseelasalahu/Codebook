/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        dark: "#1E293B",
      },
    },
  },
  plugins: [],
}

