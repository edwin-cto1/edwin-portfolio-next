import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050510',
        'bg-secondary': '#080820',
        'electric-blue': '#00D4FF',
        'electric-purple': '#8B00FF',
        'text-primary': '#e8eaf0',
        'text-dim': 'rgba(232,234,240,0.55)',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'monospace'],
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00D4FF, #8B00FF)',
      },
      backdropBlur: {
        glass: '16px',
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        'ticker-reverse': 'ticker-reverse 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ticker-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
