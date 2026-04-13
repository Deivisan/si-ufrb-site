/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores fixas da UFRB (usadas quando não há tema)
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
        // Cores dinâmicas baseadas em CSS variables
        'primary': 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'var(--hero-gradient)',
      },
    },
  },
  plugins: [],
}
