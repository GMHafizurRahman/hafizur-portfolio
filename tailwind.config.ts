import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      colors: {
        base: 'var(--bg-primary)',
        'base-alt': 'var(--bg-secondary)',
        card: 'var(--bg-card)',
        'card-hover': 'var(--bg-card-hover)',
        fore: 'var(--text-primary)',
        'fore-alt': 'var(--text-secondary)',
        'fore-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-dark': 'var(--accent-hover)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        hover: 'var(--border-hover)',
      },
      boxShadow: {
        card: '0 1px 3px var(--shadow), 0 0 0 1px var(--border)',
        'card-hover': '0 8px 24px var(--shadow), 0 0 0 1px var(--border-hover)',
        glow: '0 0 20px var(--accent-glow)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
