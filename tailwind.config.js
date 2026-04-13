/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ufrb-green': {
          DEFAULT: '#009c3b',
          light: '#00c75b',
          dark: '#007a2e',
        },
        'ufrb': {
          primary: '#009c3b',
          secondary: '#003366',
          accent: '#f5f5f5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}