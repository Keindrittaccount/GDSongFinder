import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gd-bg': '#080c18',
        'gd-surface': '#0f1525',
        'gd-border': 'rgba(255,255,255,0.08)',
        'gd-primary': '#3b82f6',
        'gd-accent': '#f59e0b',
        'gd-green': '#22c55e',
        'gd-muted': '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
