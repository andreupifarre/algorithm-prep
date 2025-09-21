# Algorithm Prep Docs

This repository hosts an Astro Starlight site that organizes the two pointers study notes into a structured, SEO-friendly
reference.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

The documentation is served at `http://localhost:4321` by default during development.

## Content structure

- `src/content/docs/index.md` – landing page with navigation tips.
- `src/content/docs/two-pointers/` – guides and practice problems rewritten from the original Markdown files.
- `astro.config.mjs` – Starlight configuration including sidebar navigation and SEO metadata.

Happy studying! Dive into the [Two Pointers overview](src/content/docs/two-pointers/overview.md) to get started.
