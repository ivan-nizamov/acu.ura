# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

An Astro-based website for an acupuncture clinic in Timișoara, Romania. Built with Astro 5, Tailwind CSS v4, TypeScript, and deployed on Netlify with edge caching.

## Development Commands

This project uses **Bun** as the package manager and runtime (not pnpm/npm).

```bash
# Install dependencies (runs automatically in nix develop shell)
bun install

# Start development server at localhost:4321
bun run dev

# Build for production (output to ./dist/)
bun run build

# Preview production build locally
bun run preview

# Run Astro CLI commands
bun run astro [command]
bun run astro -- --help  # Get help
```

## Development Environment

This project uses Nix flakes for reproducible development environments. The flake provides Bun and automatically runs `bun install` and `bun run dev` on shell entry.

```bash
# Enter development shell (NixOS)
nix develop
```

## Architecture

### Rendering Strategy
- **Hybrid rendering**: Static pages + dynamic SSR API routes
- Static pages: index, about, contact, colophon
- SSR endpoint: `/api/schedule.json` (fetches from external Google Apps Script)

### Caching Strategy
Critical for the schedule API:
- API route: `prerender = false` in `src/pages/api/schedule.json.ts`
- Edge caching via `CDN-Cache-Control` and `Netlify-CDN-Cache-Control` headers
- Cache duration: 1 hour (`s-maxage=3600`) with stale-while-revalidate
- Hourly cache warming via Netlify scheduled function (`netlify/functions/warm-schedule.mts`)

### Component Structure
- **Layout.astro**: Base layout with page transitions, includes ClientRouter for SPA-like navigation
- **Header.astro**: Navigation with brand logo ("acu.ura!")
- **Footer.astro**: Site-wide footer links
- **Center.astro**: Container component for content centering
- **TimeTable.astro**: Client-side schedule fetcher with 4.5s timeout and error handling
  - **CRITICAL**: Inline `<script>` tags in Astro components run in the browser and CANNOT use TypeScript type annotations
  - Bad: `parts.forEach((p: string, i: number) => { ... })`
  - Good: `parts.forEach((p, i) => { ... })`
  - TypeScript is only available in the frontmatter (`---` section), not in `<script>` tags

### Styling System
- **Tailwind v4** via `@tailwindcss/vite` plugin
- Custom design tokens from **Utopia** (fluid typography and spacing)
- CSS variables in `src/styles/global.css`:
  - Font sizes: `--step--1` through `--step-6` (fluid clamp)
  - Spacing: `--space-xs` through `--space-3xl` (fluid clamp)
  - Colors: `--surface`, `--text`, `--muted`, `--primary`, etc.
- Dark mode: Class-based (`.dark`) with localStorage persistence via `/public/theme.js`
- Custom fonts: EB Garamond (serif), Maple Mono (monospace)

### Page Transitions
Custom slide animations (up/down) using Astro's ViewTransitions:
- Configured in Layout.astro with `transition:animate` directive
- CSS keyframes: `slideUpIn`, `slideUpOut`, `slideDownIn`, `slideDownOut`
- Duration/easing controlled via CSS variables

### External Data
- Schedule data: Fetched from Google Apps Script endpoint
- Client-side fetch in TimeTable component with AbortController timeout
- Parses Romanian "și" (and) separator for display formatting

## Deployment

Configured for Netlify via `@astrojs/netlify` adapter in `astro.config.mjs`:
- Server output mode (hybrid rendering)
- Edge functions for SSR routes
- Scheduled function for cache warming (hourly)

## File Structure

```
/
├── src/
│   ├── pages/           # Routes (index, about, contact, colophon)
│   │   └── api/         # SSR endpoints
│   ├── layouts/         # Base layout with transitions
│   ├── components/      # Astro components
│   └── styles/          # Global CSS with design tokens
├── public/              # Static assets (favicon, theme.js)
├── netlify/
│   └── functions/       # Netlify scheduled functions
├── astro.config.mjs     # Astro + Tailwind + Netlify config
├── flake.nix            # Nix development environment
└── package.json         # Bun scripts
```

## Key Considerations

- **Always use Bun**, not npm/pnpm (despite README showing pnpm commands)
- The schedule API depends on external Google Apps Script - handle fetch failures gracefully
- Dark mode state persists via localStorage (managed by `/public/theme.js`)
- Romanian language content throughout - preserve language when editing text
- Tailwind v4 uses `@theme` directive for design tokens (not traditional `tailwind.config.js`)
- CSS custom properties bridge design tokens to Tailwind utilities (e.g., `mt-l`, `p-m`, `gap-xs`)

## Troubleshooting

### "Loading..." never resolves in TimeTable component

1. **Check browser console for `Unexpected token ':'` errors**
   - This means TypeScript type annotations leaked into a `<script>` tag
   - Remove all type annotations (`: string`, `: number`, etc.) from inline scripts
   - Types are only valid in Astro frontmatter (`---` sections) and `.ts` files

2. **Check Network tab for `/api/schedule.json`**
   - **404**: Netlify adapter may not be installed. Run `bun run astro add netlify`
   - **502**: Google Apps Script endpoint is slow/down. CDN caching will hide this for users once warmed
   - **200 with JSON**: Frontend should render successfully

3. **Test locally with Netlify CLI**
   - Install: `npm i -g netlify-cli` (use npm for global CLI tools)
   - Run: `netlify dev` (simulates Netlify Functions locally)

### Netlify deployment shows 404 for API endpoint

- Ensure `@astrojs/netlify` adapter is installed and configured in `astro.config.mjs`
- Verify `prerender = false` is set in `src/pages/api/schedule.json.ts`
- Check Netlify build logs for function deployment confirmation
