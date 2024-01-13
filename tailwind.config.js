/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        neutralBg: 'var(--neutralBg)',
        onNeutralBg: 'var(--onNeutralBg)',
        primaryBg: 'var(--primaryBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
        primary: 'var(--primary)',
      }
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
