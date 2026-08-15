# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build static site to dist/
npm run preview  # Preview production build locally
```

## Architecture

This is an **Astro static site** (`output: 'static'`) deployed to `cunderw.dev` by GitHub Actions on every push to `main`.

Personal pages: About (`/`), Resume (`/resume`), Contact (`/contact`), and a general privacy policy (`/privacy-policy`).

**It also hosts the App Store URLs for each iOS app**, which is what every shipped app declares in App Store Connect — a GitHub link is not an acceptable substitute, and a link into a private repo 404s for App Review. Adding an app means four things, and missing either of the last two is the easy mistake:

- `src/pages/projects/<slug>.astro` — marketing **and** support URL
- `src/pages/privacy-policy/<slug>.astro` — privacy policy URL, supplementing `/privacy-policy`
- `public/projects/<slug>/` — `icon.png` at 256x256 and three screenshots at 560x1216
- a link in **both** indexes: the `projects` array in `src/components/Navbar.astro` and the app-specific list in `src/pages/privacy-policy.astro`

The **publish-app-pages** skill does all four from an app repo's store copy.

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
