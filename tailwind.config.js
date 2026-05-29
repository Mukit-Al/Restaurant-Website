/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#F9E4A8',
          200: '#F5D88F',
          300: '#F0CC76',
          400: '#ECC05D',
          500: '#E8B444',
          600: '#D4A038',
          700: '#C08C2C',
          800: '#AC7820',
          900: '#986414',
        },
        matte: {
          black: '#1A1A1A',
          dark: '#0D0D0D',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scroll': 'scroll 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(232, 180, 68, 0.3)' },
          'to': { boxShadow: '0 0 40px rgba(232, 180, 68, 0.6)' },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
