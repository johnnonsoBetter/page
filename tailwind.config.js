module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        tpblack: '#0D0D0D80',
        white: '#FFFFFF',
        deepblack: '#0D0D0D',
        slide: 'linear-gradient(95.91deg, #665AEF 6.04%, #FC364C 88.42%);'
      
    },
    extend: {
      height: {
        '6px': '6px', '50': '50px',
      },
      width: {
        '184px': '184px', '149px': '149px', '80': '80%'
      }
    }
  },
  fontFamily: {
    sans: ['Manrope', 'sans-serif']
  },
  plugins: [],
}