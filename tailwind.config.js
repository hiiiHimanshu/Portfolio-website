/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#2C3333', // Charcoal
          800: '#2E4F4F', // Darker Persian Green
          700: '#0E8388'  // Persian Green
        },
        accent: {
          500: '#F4A460', // Sandy Brown
          600: '#DAA520', // Saffron
          700: '#E97451'  // Burnt Sienna
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
};