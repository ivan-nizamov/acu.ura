# Astro Starter Kit: Minimal

Initialise project with:

```sh
pnpm create astro@latest -- --template minimal
```

Add Tailwind:

```sh
pnpm astro add tailwind
```

Import tailwind in your global css:

```
@/import "tailwindcss";
```

```
---
import "../styles/global.css";
---
```

source = https://www.reddit.com/r/astrojs/comments/1jq0pj7/astro_tailwind/

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
