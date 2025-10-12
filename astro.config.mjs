// tailwind.config.mjs
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // toggled via <html class="dark">
  darkMode: ['class'],

  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}'],
  plugins: [],
  adapter: netlify(),
});