/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#abace93b',
        secondary: '#e0e7ff',
        dark: '#070621',
        light: '#f4f4f4',
      },
      spacing: {
        1: '1px',
        2: '2px',
        3: '4px',
        4: '8px',
        5: '16px',
        6: '32px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'marker': ['Permanent Marker', 'sans-serif'],
        'rubik': ['Rubik Dirt', 'sans-serif'],
        'sacramento': ['Sacramento', 'cursive'],
      },
      fontWeight: {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
      },
      textColor: {
        dark: '#070621',
        light: '#f4f4f4',
      }
    },
  },
  plugins: [],
}

