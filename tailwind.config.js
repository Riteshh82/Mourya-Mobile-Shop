/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF8F4',
        ink: '#161B2E',
        marigold: {
          50: '#FFF7E8',
          100: '#FFEBC2',
          400: '#F4A93B',
          500: '#EE9520',
          600: '#D67F12',
        },
        teal: {
          50: '#E9F4F3',
          100: '#C7E4E2',
          400: '#12807E',
          500: '#0E6A68',
          600: '#0A5250',
        },
        navy: {
          50: '#EAEDF3',
          400: '#2A3A63',
          500: '#1B2747',
          600: '#161B2E',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 6px 24px -8px rgba(22, 27, 46, 0.18)',
      },
    },
  },
  plugins: [],
}
