// tailwind.config.mjs
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  darkMode: ['class'], // toggled via <html class="dark">
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}'],
  plugins: [],
});
