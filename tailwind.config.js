/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0D1B2A', 2: '#162438', 3: '#1e3050' },
        brand: '#2176FF',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
