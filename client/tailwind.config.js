/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amethyst': {
          DEFAULT: '#A668F2',
          100: '#200640',
          200: '#400b80',
          300: '#5f11bf',
          400: '#8129ec',
          500: '#a668f2',
          600: '#b887f5',
          700: '#caa5f7',
          800: '#dcc3fa',
          900: '#ede1fc',
        },
        'ultra_violet': {
          DEFAULT: '#735794',
          100: '#17111e',
          200: '#2e233b',
          300: '#453459',
          400: '#5c4576',
          500: '#735794',
          600: '#8f74ad',
          700: '#ab97c2',
          800: '#c7bad6',
          900: '#e3dceb',
        },
        'indigo': {
          DEFAULT: '#4E1296',
          100: '#10041e',
          200: '#1f073c',
          300: '#2f0b5a',
          400: '#3e0e79',
          500: '#4e1296',
          600: '#6d19d4',
          700: '#9048e9',
          800: '#b585f1',
          900: '#dac2f8',
        },
      },
    },
  },
  plugins: [],
}
