/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF932E',
        secondary: '#E6E6E6',
      },
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
