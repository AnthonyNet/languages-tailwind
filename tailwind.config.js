/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const myClass = plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  })
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [myClass],
  resolve: {
    extensions: ['', '.js', '.jsx']
}
}
