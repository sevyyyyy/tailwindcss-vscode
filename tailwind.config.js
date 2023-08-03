/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'gurey':'#2C2C32',
        'dark':'#25252B',
        'asul':'#0066B8',
        'light':'#ffffff',
        'grey':'#a5a5a7',
        'gray':'#3d3d42'
      },
    },
  },
  plugins: [],
}

