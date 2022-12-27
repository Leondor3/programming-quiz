/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-color": "#282D4A",
        "tailwindcss": "https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg"
      },
      width: {
        'container-xs': '1344px'
      }
    },
  },
  plugins: [],
}