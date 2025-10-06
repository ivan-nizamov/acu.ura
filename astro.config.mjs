// tailwind.config.mjs
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  darkMode: ['class'], // toggled via <html class="dark">
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // semantic tokens backed by CSS custom properties (HSL with alpha support)
        bg:      'hsl(var(--bg) / <alpha-value>)',
        fg:      'hsl(var(--fg) / <alpha-value>)',
        muted:   'hsl(var(--muted) / <alpha-value>)',
        card:    'hsl(var(--card) / <alpha-value>)',
        border:  'hsl(var(--border) / <alpha-value>)',

        primary:        'hsl(var(--primary) / <alpha-value>)',
        'primary-fg':   'hsl(var(--primary-foreground) / <alpha-value>)',
        secondary:      'hsl(var(--secondary) / <alpha-value>)',
        'secondary-fg': 'hsl(var(--secondary-foreground) / <alpha-value>)',
        accent:         'hsl(var(--accent) / <alpha-value>)',
        'accent-fg':    'hsl(var(--accent-foreground) / <alpha-value>)',
        destructive:    'hsl(var(--destructive) / <alpha-value>)',
        'destructive-fg': 'hsl(var(--destructive-foreground) / <alpha-value>)',
        ring:           'hsl(var(--ring) / <alpha-value>)',
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border) / <alpha-value>)',
      },
      ringColor: {
        DEFAULT: 'hsl(var(--ring) / <alpha-value>)',
      },
    },
  },
  plugins: [],
})
