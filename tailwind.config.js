/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        orbit: {
          'from': {
            transform: 'rotate(0deg) translateX(64px) rotate(0deg)',
          },
          'to': {
            transform: 'rotate(360deg) translateX(64px) rotate(-360deg)',
          },
        },
      },
      animation: {
        orbit: 'orbit 8s linear infinite',
      },
    },
  },
}
