/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'left_part': '#F2D184',
        "button":'#ea4b8b',
        "field":"#f3f3f3",
        "logo":"#a8833a",
        "header":"#997529",
        "search":"#F2F5F4",
        "footer":"#FAFAFA",
        "gray_font":"#6E6D76",
        "hidden":"#F8B8D0"
      },
      fontFamily: {
        'body': ['Pacifico'],
      }

    },
  },

  plugins: [],
}