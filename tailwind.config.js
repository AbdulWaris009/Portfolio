/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#404040', // Custom color
      },
      fontFamily: {
        sora: ['Sora', ...defaultTheme.fontFamily.sans],
        display: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
