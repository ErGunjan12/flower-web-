/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunflower: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        bloom: {
          cream: '#FAF6EE',
          warmwhite: '#FFFDF9',
          parchment: '#F5EFE0',
          sage: '#607A65',
          forest: '#1E392A',
          darkgreen: '#14271C',
          gold: '#E5A93C',
          amber: '#B87326',
          petal: '#FFB800',
          stem: '#2E6930',
          terracotta: '#C86D51',
          softpink: '#F8E7E7',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-2.5deg)' },
          '50%': { transform: 'rotate(2.5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        pollenDrift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '0.9' },
          '80%': { opacity: '0.8' },
          '100%': { transform: 'translate(60px, -120px) rotate(180deg)', opacity: '0' },
        }
      },
      animation: {
        'sway-slow': 'sway 6s ease-in-out infinite',
        'sway-medium': 'sway 4.5s ease-in-out infinite',
        'sway-fast': 'sway 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'pollen': 'pollenDrift 8s linear infinite',
      }
    },
  },
  plugins: [],
}
