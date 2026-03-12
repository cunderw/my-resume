# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build static site to dist/
npm run preview  # Preview production build locally
```

## Architecture

This is an **Astro static site** (`output: 'static'`) deployed to `cunderw.dev`. It has three pages: About (`/`), Resume (`/resume`), and Contact (`/contact`).

### Content Management

All resume content is stored in a single TypeScript object at `src/data/resume.ts`. TypeScript interfaces are defined in `src/types/resume.ts`. To update resume content, edit `src/data/resume.ts` — no CMS or database involved.

### Data Flow

```
src/data/resume.ts → src/pages/*.astro → src/components/*.astro
```

Pages import the `resume` data object and pass typed props down to components (`ExperienceItem.astro`, `EducationItem.astro`).

### Key Files

- `src/data/resume.ts` — all resume content
- `src/types/resume.ts` — `ResumeData`, `ExperienceData`, `EducationData`, `ProjectData` types
- `src/layouts/Layout.astro` — root layout (head, nav, footer)
- `src/components/Navbar.astro` — active state detection via `Astro.url.pathname`

### Styling

Tailwind CSS via `@astrojs/tailwind`. Responsive breakpoints use `md:` prefix. Inter font loaded from CDN in the layout.

There is no client-side JavaScript — all pages are pure static HTML.
