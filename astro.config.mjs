import tailwindcss from "@tailwindcss/vite";
// tailwind.config.mjs
import { defineConfig } from 'astro/config';

import icon from "astro-icon";

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],

  // toggled via <html class="dark">
  darkMode: ['class'],

  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}'],
  plugins: [],
});
