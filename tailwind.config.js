/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F172A',      // Slate-900 for rich dark background
        foreground: '#F8FAFC',      // Slate-50 for better readability
        primary: '#2563EB',         // Blue-600 for stronger emphasis
        'primary-foreground': '#FFFFFF',
        secondary: '#10B981',       // Emerald-500 for agricultural theme
        'secondary-foreground': '#FFFFFF',
        card: '#1E293B',           // Slate-800 for depth
        'card-foreground': '#F1F5F9', // Slate-100
        border: '#334155',         // Slate-700 for subtle separation
        accent: '#3B82F6',         // Blue-500 for interactive elements
        'accent-foreground': '#FFFFFF',
        muted: '#334155',          // Slate-700 for less emphasis
        'muted-foreground': '#94A3B8', // Slate-400
        success: '#059669',        // Emerald-600 for success states
        warning: '#D97706',        // Amber-600 for warnings
        error: '#DC2626',          // Red-600 for errors
        info: '#0284C7',           // Sky-600 for info
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'bounce-sm': 'bounceSm 1s infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 6s ease infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        bounceSm: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      }
    },
  },
  plugins: [],
}