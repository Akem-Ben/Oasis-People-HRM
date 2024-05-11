/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      lexend: ['Lexend Deca', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
    }
  },
  plugins: [],
}

