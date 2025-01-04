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
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top right, #070621 10%, #abace93b 25%, #070621 50%, #abace93b 85%, #070621 100%)',
      },
      spacing: {
        1: '1px',
        2: '2px',
        3: '4px',
        4: '8px',
        5: '16px',
        6: '32px',
        7: '64px',
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
      },
      keyframes: {
        zoomOutScreen: {
          '0%': { transform: 'scale(1) translateZ(0)' },
          '100%': { transform: 'scale(100) translateZ(10px)' },
        },
        fadeIn: {
          '0%': { opacity: '1', backgroundColor: '#070621' },
          '100%': { opacity: '0', backgroundColor: 'white'},
        },
        fadeOut: {
          '0%': { opacity: '0', backgroundColor: 'white' },
          '100%': { opacity: '1', backgroundColor: '#070621'},
        },
      },
      animation: {
        zoomOutScreen: 'zoomOutScreen 3s ease-in-out forwards',
        fadeInScreen: 'fadeIn 1s ease-in forwards',
        fadeOutScreen: 'fadeOut 1s ease-out forwards',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.button-hover': {
          padding: '4px' 
        },
        '.button-hover:hover': {
          backgroundColor: 'rgba(249,250,251,0.22)',
          borderRadius: '4px',
          cursor: 'pointer',
        },
      });
    },
  ],
}

