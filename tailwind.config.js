/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'blue':{
        light:"#1877F2",
        DEFAULT:'#1e3a8a',
      },
      'slate':{
        100:'#f5dfca',
        800:'#f9f1cb'
      },
      'amber':{
        300:'#fcd34d',
        400:'#fbbf24'
      },
      'tahiti': {
        light: '#C81533',
        DEFAULT: '#951C2F',
        dark: '#aa173a',
        pink: '#E88597',
        pinker:'#DB5E75',
        cyan:'#04474F',
        wheat:'#F2C58B',
        reder:'#FF4D56',
        wheater:'#F5DFCA',
        golden:'#B99353',
        gold:'#FFF0CA',
        rose:'#540520',
        cust:'#FFE786',
        roser:'#C81C32',
        last:'#6b0a21'
      },
      'gray':{
        300:'#d1d5db',
        500:'#6b7280',
        700:'#374151'
      },
      'red':{
        500:'#ef4444'
      },
      'green':{
        500:'#22c55e',
        600:'#16a34a'
      },
    },
    extend: {},
  },
  plugins: [],
}

