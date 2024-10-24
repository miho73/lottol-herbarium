/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lottol: {
        100: '#FEFDEE',
        200: '#FEF9C4',
        300: '#FDF69B',
        400: '#FCE14A',
        500: '#DCB34D',
        600: '#E5AF32',
        700: '#A56028',
        800: '#7F3F1D',
        900: '#4D2800',
      },
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        "kings": ["Kings", "sans-serif"],
        "gothic": ["AppleGothic", "Apple SD Gothic Neo", "Nanum Gothic", "sans-serif"],
        "myeongjo": ["AppleMyungjo", "Nanum Myeongjo", "serif"],
      },
      dropShadow: {
        "lottol": "2px 2px 3px rgba(220, 179, 77, 0.5)",
      },
      scale: {
        "200": "2",
      }
    },
  },
  plugins: [],
}
