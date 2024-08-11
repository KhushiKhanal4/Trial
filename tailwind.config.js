/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translate(-40%) rotate(-200deg)' },
          '50%': { transform: 'translateY(80%) rotate(180deg)' },
        },
      },
      animation: {
        wave: 'wave 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

