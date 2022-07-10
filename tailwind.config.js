const colors = require('tailwindcss/colors');

const colorVars = [
  'c-bg-0',
  'c-bg-1',
  'c-bg-2',
  'c-bg-3',
  'c-text-0',
  'c-text-1',
  'c-text-2',
  'c-text-3',
  'c-border-0',
  'c-border-1',
  'c-border-2',
];

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#A2EEE4',
          100: '#91EBDF',
          200: '#6EE5D5',
          300: '#4CDFCA',
          400: '#29D9C0',
          500: '#21B8A3',
          600: '#188879',
          700: '#10594F',
          800: '#072925',
          900: '#000000',
        },
        ...colorVars.reduce((acc, cur) => {
          acc[cur] = `var(--${cur})`;
          return acc;
        }, {}),
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-headings': colors.gray[800],
            '--tw-prose-links': '#21B8A3',
            '--tw-prose-bold': colors.gray[800],
            '--tw-prose-quotes': colors.gray[800],
            '--tw-prose-code': colors.gray[800],
            '--tw-prose-invert-headings': colors.gray[200],
            '--tw-prose-invert-links': '#21B8A3',
            '--tw-prose-invert-bold': colors.gray[200],
            '--tw-prose-invert-code': colors.gray[200],
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
