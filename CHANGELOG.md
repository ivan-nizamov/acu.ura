# Changelog

## 2025-11-08

### UI and Spacing
- Simplified mobile hamburger: removed animations and border; reduced to static three bars at half size; thinner line weight.
- Added global fluid spacing variables to `:root` (Utopia scale) in `src/styles/starwind.css`.
- Converted Starwind components to use spacing variables via Tailwind arbitrary values:
  - Dropdown (content padding, label/item padding, item gaps, separator margins)
  - Button (inner gaps, paddings)
  - Item (gaps, paddings across header/title/content/actions/footer/media)
- Mapped control heights to spacing variables:
  - Buttons: `sm = var(--space-l)`, `md = calc(var(--space-l) + var(--space-2xs))`, `lg = var(--space-xl)`
  - Icon sizes aligned to spacing scale
- Added a demo of button sizes and variants on `src/pages/index.astro`.

### Documentation
- Added a “Spacing Variables Cheatsheet” to `README.md` with guidelines, replacements, and examples.
- Documented control height mappings and icon sizes in `README.md`.

