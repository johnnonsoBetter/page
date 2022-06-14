module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        tpblack: 'rgba(13, 13, 13, 0.5)',
        tp: 'rgba(black, 0.9)',
        white: '#FFFFFF',
        deepblack: '#0D0D0D',
        slide: 'linear-gradient(95.91deg, #665AEF 6.04%, #FC364C 88.42%)',
        lightred: '#FC364C',
        lightgray: '#8E8B8F',
        lowpink: '#A2A2A2',
        lowdark: '#1F1F1F',
        darkpurple: '#000000'

      
    },
    extend: {
      height: {
        '6px': '6px', '50': '50px', "76px": "76px", "20px": "20px", "438px": "438px", "120px": "170px",
        "64px": "64px"
      },
      width: {
        '184px': '184px', '149px': '149px', '80': '80%', "20px": "20px", "630px": "630px", "30px": "20px", "400px": "400px", "90": "90%"
      },
    }
  },
  fontFamily: {
    sans: ['Manrope', 'sans-serif']
  },
  plugins: [require("tailwindcss-animate")],
}