/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    extend: {
      colors: {
        teal: {
          750: 'hsl(158, 36%, 37%)'
        },
        cream: {
          200: 'hsl(30, 38%, 92%)'
        }
      },
    },
  },
  plugins: [],
}
