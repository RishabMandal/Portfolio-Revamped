/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'Lobster':['Lobster', 'cursive'],
      'Ubuntu': ['Ubuntu', 'sans-serif'] 
    },},
  },
  plugins: [require("daisyui")],
}
