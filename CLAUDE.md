# CLAUDE.md - Artsy: Curated Artist Collective

This file provides context for Claude (AI assistant) when working on this codebase.

> **IMPORTANT: Push changes immediately!**
> This is a GitHub Pages site - changes only go live after pushing.
> Always `git push` as soon as changes are ready.

## Project Overview

Artsy is a curated artist database connecting dealers and collectors with exceptional artists. It serves as a living directory of hand-selected artists across categories (Modern Art, Old Masters, New & Upcoming, Photography, Abstract, Sculpture).

**Tech Stack:**
- Frontend: Next.js 16 (React 19, TypeScript, Tailwind CSS v4)
- Hosting: GitHub Pages (static export)
- Fonts: Playfair Display (serif headings), Inter (body), Cormorant Garamond (accents)

**Live URL:** https://grotkoaleksandra.github.io/artsy/

## Design System

Based on BrujaMaruja template patterns:
- **Colors:** Warm beige bg (#faf7f2), deep purple (#3a2d7c), burnt orange accent (#d4622b)
- **Typography:** Cormorant Garamond for large headings (italic), uppercase tracking for labels
- **Animations:** fadeUp staggered animations, image hover zoom, bounce scroll indicator
- **Gallery frames:** White padding + shadow around artwork images

## Deployment

Push to main and it's live via GitHub Pages static export.

## Key Files

- `src/data/artists.ts` — Artist database (18 curated artists with bios, works, categories)
- `src/app/page.tsx` — Home page (hero, featured artists, statement, how it works)
- `src/app/collective/page.tsx` — The Collective (filterable artist grid)
- `src/app/artist/[slug]/page.tsx` — Artist profile (server component with generateStaticParams)
- `src/components/artist-profile.tsx` — Artist profile client component (lightbox, gallery)
- `src/components/navbar.tsx` — Fixed nav with mobile menu
- `src/components/footer.tsx` — Purple footer
- `src/app/globals.css` — Theme tokens, animations, utilities
- `next.config.ts` — basePath: "/artsy", static export

## Categories

All, Modern Art, Old Masters, New & Upcoming, Photography, Abstract, Sculpture

## Adding an Artist

Add an entry to the `artists` array in `src/data/artists.ts` following the `Artist` interface:
- slug, name, category, tags, bio, statement, featured artwork, works array
- Optional: website, instagram

## Conventions

1. All headings use `font-[family-name:var(--font-cormorant)]` with italic
2. Labels use `tracking-[0.2em] uppercase text-accent`
3. Images use `img-hover` class for zoom effect
4. Purple bands for statement/CTA sections
5. Gallery frames use `.gallery-frame` class for white border effect
6. Placeholder images via `picsum.photos/seed/{name}/{width}/{height}`
