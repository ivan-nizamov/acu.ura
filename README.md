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