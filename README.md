# Initialisation process

## Create new astro project
```sh
pnpm create astro@latest -- --template minimal
```

## Initialise Starwind UI 
 Add the following code to the tsconfig.json file to resolve paths:
```json
{
  // ...
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
    }
  }
}
```

 Create a .npmrc file in the root of your project with the following content:
```npmrc
auto-install-peers=true
node-linker=hoisted
lockfile=true
```

Initialise project configuration
```sh
pnpx starwind@latest init
```

Import the starwind.css file into your main layout. This is likely src/layouts/Layout.astro, but could vary depending on your project structure.

```astro
---
// style import
import "@/styles/starwind.css";
---
<!-- layout code... -->
```

Add components to project
```sh
pnpx starwind@latest add button dropdown item
```

## Spacing Variables Cheatsheet

Use the global fluid spacing variables for all paddings, margins, and gaps.

Short, token-based classes are enabled:
- `p-s`, `px-xs`, `py-2xs`, `gap-l`, `-mx-3xs`, etc.

These map to dynamic CSS variables via Tailwind v4 tokens we added in `@theme`:
- `--spacing-s: var(--space-s)`, `--spacing-2xs: var(--space-2xs)`, …

You can still use arbitrary values if you need to: `p-[var(--space-s)]`, `gap-[var(--space-2xs)]`, `-mx-[var(--space-3xs)]`.

- Core scale
  - 3xs (tight): `var(--space-3xs)` ≈ 4–5px (e.g. separators, micro offsets)
  - 2xs (compact): `var(--space-2xs)` ≈ 8–11px (e.g. small gaps, compact padding)
  - xs (cozy): `var(--space-xs)` ≈ 12–16px (e.g. inner padding for compact items)
  - s (base): `var(--space-s)` ≈ 16–21px (e.g. section/page padding, default item padding)
  - m (roomy): `var(--space-m)` ≈ 24–32px (e.g. large gaps, section stacks)
  - l/xl/2xl/3xl: for spacious layouts and hero sections

- One‑up pairs (fine‑tuning between steps)
  - Between 3xs and 2xs: `var(--space-3xs-2xs)` (≈ 6–9px)
  - Between 2xs and xs: `var(--space-2xs-xs)` (≈ 10–13px)
  - Between xs and s: `var(--space-xs-s)` (≈ 14–18px)
  - Between s and m: `var(--space-s-m)` (≈ 18–26px)
  - …and so on up the scale

- Common replacements
  - `p-4` → `p-s`
  - `px-4` → `px-[var(--space-s)]`
  - `py-3` → `py-[var(--space-xs)]`
  - `py-2` → `py-[var(--space-2xs)]`
  - `px-2` → `px-[var(--space-2xs)]`
  - `gap-4` → `gap-s`
  - `gap-2` → `gap-2xs`
  - `gap-1.5` → `gap-3xs-2xs`
  - `-mx-1` → `-mx-3xs`

- When to use which
  - Components: prefer `2xs`/`xs` for inner padding, `s` for outer padding.
  - Lists/Items: `gap` uses `2xs` (tight) to `s` (roomy) depending on density.
  - Page/layout shells: use `s` to `m` for section padding, step up on larger breakpoints.
  - Hairlines and 1px rules are not spacing: keep `h-px`, `w-px` as is.

Examples

```html
<!-- Dropdown content padding -->
<div class="p-[var(--space-3xs)]">…</div>

<!-- Item (default) spacing -->
<div class="gap-[var(--space-s)] p-[var(--space-s)]">…</div>

<!-- Compact Button (sm) -->
<button class="px-[var(--space-xs)] py-[var(--space-2xs)]">…</button>
```

### Control Heights and Icon Sizes

Use spacing variables for fixed heights too:

- Buttons
  - `h-9` → `h-[var(--space-l)]` (sm)
  - `h-11` → `h-[calc(var(--space-l)+var(--space-2xs))]` (md — in‑between)
  - `h-12` → `h-[var(--space-xl)]` (lg)
  - Icon buttons: `size-[var(--space-l)]` (sm), `size-[calc(var(--space-l)+var(--space-2xs))]` (md), `size-[var(--space-xl)]` (lg)

- Icons inside buttons/items
  - `[&_svg]:size-4` → `[&_svg]:size-[var(--space-s)]`

- Hamburger trigger
  - Wrapper: `h/w-[var(--space-m)]`
  - Bars: `h-0.5` (2px hairline-like) and `w-[var(--space-m)]`

# Tips for future referance 
## How to set default font 

Include the following in the head of your page:
```astro
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&display=swap"
  />
```
(Embed link provided by google fonts)

Then add this to your tailwind:
```css
@theme {
    --font-sans: "EB Garamond", ui-serif, Georgia, "Times New Roman", Times, serif;
}
```