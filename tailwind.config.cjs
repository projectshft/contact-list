/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '100', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in 0s 1',
      },
    },
  },
  plugins: [],
};
