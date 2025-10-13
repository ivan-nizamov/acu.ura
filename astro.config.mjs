import tailwindcss from "@tailwindcss/vite";
// tailwind.config.mjs
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	vite: {
    plugins: [tailwindcss()],
  },

  // toggled via <html class="dark">
  darkMode: ['class'],

  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}'],
  plugins: [],
});
