/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#e0e7ff',
        dark: '#1e1b4b',
      },
      spacing: {
        1: '1px',
        2: '2px',
        3: '4px',
        4: '8px',
        5: '16px',
        6: '32px',
      },
    },
  },
  plugins: [],
}

