/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))'
        },
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
        chart: {
          '1': 'oklch(var(--chart-1))',
          '2': 'oklch(var(--chart-2))',
          '3': 'oklch(var(--chart-3))',
          '4': 'oklch(var(--chart-4))',
          '5': 'oklch(var(--chart-5))'
        },
        level: {
          '1': 'oklch(var(--level-1))',
          '2': 'oklch(var(--level-2))',
          '3': 'oklch(var(--level-3))',
          '4': 'oklch(var(--level-4))',
          '5': 'oklch(var(--level-5))',
          '6': 'oklch(var(--level-6))',
          '7': 'oklch(var(--level-7))',
          '8': 'oklch(var(--level-8))',
          '9': 'oklch(var(--level-9))',
          '10': 'oklch(var(--level-10))'
        },
        vibrant: {
          orange: 'oklch(var(--vibrant-orange))',
          pink: 'oklch(var(--vibrant-pink))',
          cyan: 'oklch(var(--vibrant-cyan))',
          lime: 'oklch(var(--vibrant-lime))',
          coral: 'oklch(var(--vibrant-coral))',
          purple: 'oklch(var(--vibrant-purple))',
          teal: 'oklch(var(--vibrant-teal))',
          yellow: 'oklch(var(--vibrant-yellow))'
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseOnce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' }
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' }
        },
        colorShift: {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(30deg)' }
        },
        ambientGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' }
        },
        textShimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        textRainbow: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        specialCharGlow: {
          '0%, 100%': {
            textShadow: '0 0 10px oklch(var(--primary)), 0 0 20px oklch(var(--primary)), 0 0 30px oklch(var(--primary))',
            filter: 'brightness(1)'
          },
          '50%': {
            textShadow: '0 0 20px oklch(var(--primary)), 0 0 40px oklch(var(--primary)), 0 0 60px oklch(var(--primary))',
            filter: 'brightness(1.5)'
          }
        },
        levelBarGrow: {
          'from': { width: '0' },
          'to': { width: 'var(--target-width, 100%)' }
        },
        colorPulse: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.3)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3) translateY(30px)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        rainbowBorder: {
          '0%': { borderColor: 'oklch(var(--vibrant-pink))' },
          '16.66%': { borderColor: 'oklch(var(--vibrant-orange))' },
          '33.33%': { borderColor: 'oklch(var(--vibrant-yellow))' },
          '50%': { borderColor: 'oklch(var(--vibrant-lime))' },
          '66.66%': { borderColor: 'oklch(var(--vibrant-cyan))' },
          '83.33%': { borderColor: 'oklch(var(--vibrant-purple))' },
          '100%': { borderColor: 'oklch(var(--vibrant-pink))' }
        },
        rainbowGlow: {
          '0%': { boxShadow: '0 0 20px oklch(var(--vibrant-pink)), 0 0 40px oklch(var(--vibrant-pink))' },
          '16.66%': { boxShadow: '0 0 20px oklch(var(--vibrant-orange)), 0 0 40px oklch(var(--vibrant-orange))' },
          '33.33%': { boxShadow: '0 0 20px oklch(var(--vibrant-yellow)), 0 0 40px oklch(var(--vibrant-yellow))' },
          '50%': { boxShadow: '0 0 20px oklch(var(--vibrant-lime)), 0 0 40px oklch(var(--vibrant-lime))' },
          '66.66%': { boxShadow: '0 0 20px oklch(var(--vibrant-cyan)), 0 0 40px oklch(var(--vibrant-cyan))' },
          '83.33%': { boxShadow: '0 0 20px oklch(var(--vibrant-purple)), 0 0 40px oklch(var(--vibrant-purple))' },
          '100%': { boxShadow: '0 0 20px oklch(var(--vibrant-pink)), 0 0 40px oklch(var(--vibrant-pink))' }
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        gradientY: {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' }
        },
        gradientXY: {
          '0%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
          '100%': { backgroundPosition: '0% 0%' }
        },
        colorCycle: {
          '0%': { filter: 'hue-rotate(0deg) saturate(1)' },
          '25%': { filter: 'hue-rotate(90deg) saturate(1.2)' },
          '50%': { filter: 'hue-rotate(180deg) saturate(1)' },
          '75%': { filter: 'hue-rotate(270deg) saturate(1.2)' },
          '100%': { filter: 'hue-rotate(360deg) saturate(1)' }
        },
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'pulse-once': 'pulseOnce 0.3s ease-in-out',
        'shake': 'shake 0.4s ease-in-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'color-shift': 'colorShift 8s ease-in-out infinite',
        'ambient-glow': 'ambientGlow 6s ease-in-out infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'text-rainbow': 'textRainbow 3s ease-in-out infinite',
        'special-char-glow': 'specialCharGlow 2s ease-in-out infinite',
        'level-bar-grow': 'levelBarGrow 1s ease-out forwards',
        'color-pulse': 'colorPulse 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'float': 'float 3s ease-in-out infinite',
        'rainbow-border': 'rainbowBorder 4s linear infinite',
        'rainbow-glow': 'rainbowGlow 3s ease-in-out infinite',
        'gradient-x': 'gradientX 3s ease infinite',
        'gradient-y': 'gradientY 3s ease infinite',
        'gradient-xy': 'gradientXY 4s ease infinite',
        'color-cycle': 'colorCycle 8s ease-in-out infinite',
        'scale-pulse': 'scalePulse 2s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
