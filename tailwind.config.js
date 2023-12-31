/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Epilogue', 'sans-serif']
      },
      colors: {
        primary: '#1DC071',
        secondary: '#6F49FD',
        text1: '#171725',
        text2: '#4B5264',
        text3: '#808191',
        text4: '#B2B3BD',
        'icon-color': '#A2A2A8',
        white: '#ffffff',
        whiteSoft: '#fcfbff',
        graySoft: '#fcfcfc',
        grayf3: '#f3f3f3',
        strock: '#f1f1f3',
        lite: '#fcfcfd',
        error: '#eb5757',
        darkbg: '#13131a',
        darkSecondary: '#1c1c24',
        softDark: '#22222c',
        darkSoft: '#24242c',
        darkStroke: '#3a3a43',
        darkRed: '#422c32'
      },
      boxShadow: {
        sdprimary: '10px 10px 20px 0px rgba(211, 211, 211, 0.25)'
      }
    }
  },
  plugins: []
}
