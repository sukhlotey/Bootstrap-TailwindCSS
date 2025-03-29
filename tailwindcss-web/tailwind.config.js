/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html",      // Root index.html file
    "./dist/**/*.html",  // Any HTML files inside the dist folder
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}

