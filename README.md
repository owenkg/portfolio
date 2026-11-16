# George Kivumbi — Portfolio

Personal portfolio site for George Kivumbi, SDET (Software Development Engineer in Test).  
Live at **https://owenkg.github.io/portfolio/**

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 6 |
| Styling | Custom CSS (Tailwind CSS v4 reset only — no utility classes) |
| Fonts | Playfair Display (serif headings), DM Sans (body), Courier Prime (labels/mono) |
| Deployment | GitHub Pages via GitHub Actions |

---

## Project structure

```
portfolio/
├── public/
│   ├── portfolio_photo_clean.png   # Transparent-background hero portrait
│   └── george-kivumbi-sdet-resume.pdf
├── src/
│   ├── App.tsx                     # All page content and sections
│   ├── index.css                   # All styles — design tokens, layout, responsive
│   ├── main.tsx                    # React entry point
│   └── vite-env.d.ts
├── index.html                      # Vite HTML shell, OG meta tags
├── vite.config.ts                  # base: "/portfolio/" for GitHub Pages subpath
├── tsconfig.json
└── .github/workflows/deploy.yml   # CI/CD: pnpm build → upload-pages-artifact → deploy-pages
```

---

## Design tokens (CSS custom properties)

Defined in `:root` in `index.css`. The full warm-print palette:

| Token | Value | Usage |
|---|---|---|
| `--parchment` | `#f2e0c0` | Page background |
| `--espresso` | `#1a0c04` | Body text |
| `--mahogany` | `#3d1f0a` | Secondary text, borders |
| `--umber` | `#8a6040` | Muted labels, captions |
| `--amber` | `#c4712a` | Accent lines, decorative marks |
| `--golden-hour` | `#e09a50` | Hover state accent |
| `--terracotta` | `#c4412a` | Primary accent (name, links, CTA) |
| `--rule` | `rgba(61,31,10, 0.12)` | Divider lines |
| `--border` | `rgba(61,31,10, 0.17)` | Card/grid borders |

---

## Responsive breakpoints

| Breakpoint | What changes |
|---|---|
| `≤ 900px` | Availability badge hidden; nav collapses to GK + links; hero index rail hidden; about/heading grids go single-column |
| `≤ 680px` | Portrait hidden; hero title reduces; project grid stacks; skills grid stacks; contact/footer stack vertically |
| `≤ 480px` | Hero title, section headings, and contact heading scaled down further for small phones; section padding reduced |

---

## Sections

All content lives in `src/App.tsx`. Two module-level constants hold the data:

- **`projects`** — array of `{ index, title, description, tags, link }` — rendered as a 2-column grid of article cards
- **`skills`** — array of `{ id, label, items[] }` — rendered as a 3-column grid

Sections in render order: Nav → Hero → Work → About → Skills → Contact → Footer

---

## SVG effects

A hidden `<svg>` at the top of the page defines a `#stamp-distress` filter (fractal noise + displacement map). Referenced via `filter: url("#stamp-distress")` on `.role-stamp` and `.focus-stamp` to give them a worn-ink edge.

The `.grain` class (applied to the hero `<header>`) overlays a tiled SVG noise texture as a `::before` pseudo-element at 16% opacity with `mix-blend-mode: multiply`.

---

## Development

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
npm run build    # output → dist/
npm run preview  # preview the dist build
```

Pushing to `main` triggers the GitHub Actions workflow which builds and deploys to GitHub Pages automatically.

---

## Preserving past states

A `v1.0.0-pre-rebrand` release on GitHub preserves the original Astro version of the site.  
The current React/Vite version is tagged `v2.0.0`.
