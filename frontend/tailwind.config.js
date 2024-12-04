/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your source files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#066523',
          500: '#38844F',
          700: '#05511C',
        },
        darkGreen: '#081B0E',
        error: '#D62020',
        gray: {
          100: '#F3F3F3',
          200: '#C0C0C1',
          300: '#B5B5B5',
          400: '#646464',
          500: '#3C3C3C',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        h1: ['60px', '125%'],
        h2: ['48px', '125%'],
        h3: ['36px', '125%'],
        h4: ['30px', '125%'],
        h5: ['24px', '125%'],
        h6: ['20px', '125%'],
        subheading: ['18px', '125%'],
        body: ['16px', '170%'],
        smallText: ['14px', '150%'],
        smallNumber: ['14px', '170%'],
        smallCaption: ['14px', '125%'],
      },
    },
  },
  plugins: [],
}

