# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate marketing website and blog for Ecosoft, a Thai ERP solutions provider (Odoo ERP, Government ERP, digital transformation). Built on the AstroWind template. Deployed at https://ecosoft.co.th.

## Commands

```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Build production site to ./dist/
npm run preview    # Preview production build locally
npm run format     # Format code with Prettier
npm run lint:eslint  # Lint .js, .ts, .astro files
```

## Architecture

### Config-Driven Site

The primary site configuration lives in `src/config.yaml`. This file controls site metadata, blog settings (permalinks, pagination, categories/tags), UI theme tokens, and analytics. It is loaded via `src/utils/config.ts` using `js-yaml`. Changing site-wide behavior starts here.

Navigation (header links, footer) is configured in `src/navigation.js`.

### Content Collections (Blog)

Blog posts are MDX files in `src/content/post/`. The schema is Zod-validated in `src/content/config.ts`. Required frontmatter: `title`, `publishDate`. Optional: `excerpt`, `image`, `category`, `tags`, `author`, `draft`, `metadata`.

Blog utilities (fetching, filtering, pagination, normalization) are in `src/utils/blog.ts`.

### Widget-Based Page Composition

Pages (`src/pages/`) are assembled from large reusable widget components in `src/components/widgets/`. Widgets include: `Hero`, `Features` (3 variants), `Content`, `Stats`, `Testimonials`, `FAQs`, `Steps`, `Brands`, `CallToAction`, `Contact`. Pages compose these widgets directly.

### Component Layers

- `src/components/widgets/` — full-page section components (Hero, Footer, Header, etc.)
- `src/components/ui/` — reusable primitives (Headline, Form, Timeline, ItemGrid, CTA)
- `src/components/blog/` — blog-specific display components
- `src/components/common/` — cross-cutting concerns (Analytics, Meta, SocialShare, ThemeToggle)

### Layouts

- `Layout.astro` — base HTML shell with meta, analytics, styles
- `PageLayout.astro` — standard page wrapper (uses Layout)
- `LandingLayout.astro` — landing page variant

### Styling

Tailwind CSS with dark mode via class strategy. Colors use CSS custom properties (`--aw-color-primary`, etc.) defined in `src/assets/styles/tailwind.css` and mapped in `tailwind.config.cjs`. Theme tokens (light/dark) are configurable in `src/config.yaml` under `ui.tokens`.

Path alias `~` maps to `./src` (configured in both `astro.config.mjs` and `tsconfig.json`).

### Image Optimization

Images use Astro Assets + Unpic (`@unpic/astro`) for CDN-agnostic optimization. Utilities are in `src/utils/images.ts` and `src/utils/images-optimization.ts`.

### Deployment

- **Netlify** (primary): `netlify.toml` — build command `npm run build`, publish dir `dist`
- **Vercel**: `vercel.json` — clean URLs, immutable asset caching
