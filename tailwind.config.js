/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px', // Perfect for 32" 1440p / 4K displays
    },
    extend: {
      colors: {
        bengal: {
          sindoor: '#A51D24',
          crimson: '#881337',
          deepRed: '#5A0B10',
          night: '#0C0606',
          panel: 'rgba(28, 12, 14, 0.75)',
          gold: '#EAB308',
          amberGold: '#F59E0B',
          brightGold: '#FDE047',
          alpona: '#FFFDF9',
        },
        assam: {
          teaDark: '#064E3B',
          teaEmerald: '#047857',
          gamusaRed: '#DC2626',
          gamusaWhite: '#FAFAFA',
          goldenMuga: '#D4AF37',
        }
      },
      fontFamily: {
        bengali: ['"Hind Siliguri"', '"Noto Serif Bengali"', 'sans-serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Outfit"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(245, 158, 11, 0.45)',
        'glow-sindoor': '0 0 35px -5px rgba(165, 29, 36, 0.5)',
        'ultra-card': '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      }
    },
  },
  plugins: [],
};
