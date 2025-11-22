/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        // Requested colors
        primary: '#67ba52', 
        primaryDark: '#569c44', 
        brandGray: '#4a524f',
        
        // Map standard greens to new brand green for ease of theming
        emerald: {
          50: '#f0fcf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#67ba52', // Mapped to brand
          500: '#67ba52', // Mapped to brand
          600: '#569c44', // Darker brand
          700: '#4a524f', // Mapped to brand gray for contrast
          800: '#065f46',
          900: '#4a524f',
        },
        gray: {
          800: '#4a524f', // Override dark grays with brand gray
          900: '#4a524f', // Override dark grays with brand gray
        },
        surface: '#ffffff',
      },
      maxWidth: {
        '8xl': '1600px',
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(103, 186, 82, 0.15)',
        'glow': '0 0 40px rgba(103, 186, 82, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}