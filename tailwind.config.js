/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ['./src/**/*.{html, ts, tsx}'],
  theme: {
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
}

