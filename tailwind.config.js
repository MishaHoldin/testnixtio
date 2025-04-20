/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-family)'],
        inter: ['var(--second-family)'],
        poppins: ['var(--third-family)'],
      },
      colors: {
        stroke: 'var(--stroke)',
        inputText: 'var(--input-text)',
      },
      letterSpacing: {
        tightest: '-0.01em',
      },
    },
  },
  plugins: [],
}
