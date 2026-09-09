# PAFOI — Plant a Forest of Ideas (Main Website V1)

**Repository:** PAFOI Main Website V1
**Parent Loom job:** LOOM-2026-004
**Base template:** 3is Web Studio Static Template V0.5
**Release version:** 1.0.0-draft
**Status:** Draft — local preview only, not deployed.

This is the draft main website for Plant a Forest of Ideas (PAFOI), created from the 3is Web Studio Static Template V0.5.

## What this is

PAFOI is a platform for sharing idea seeds and developing them into practical initiatives, stories, collaborations and places. This website communicates what PAFOI is, what it grows, and how people can join, collaborate or host.

## Structure

```
.
├── AGENTS.md                    # Agent instructions (keep concise)
├── README.md                    # This file
├── index.html                   # Single-page template
├── styles.css                   # All styles: reset, tokens, layout, components
├── app.js                       # Content loading, nav toggle, smooth scroll, fade-in
├── site-spec.json               # All content, branding and section data
├── site-spec.schema.json        # JSON Schema validating site-spec.json
├── assets/
│   ├── favicon.svg
│   ├── logo-placeholder.svg
│   ├── hero-placeholder.svg
│   ├── ideas-glyph.svg
│   ├── people-glyph.svg
│   └── action-glyph.svg
└── docs/
    ├── Site-Spec-Guide.md
    ├── Local-Preview-Guide.md
    └── Release-Checklist.md
```

## How it works

1. **`site-spec.json`** drives all visible content. Edit this file to change site name, navigation, section text, card items, footer info and metadata.
2. **`index.html`** provides the structural skeleton with generic fallback text visible before JavaScript runs.
3. **`app.js`** loads `site-spec.json` (via `fetch`, with inline and hardcoded fallback) and populates the DOM. It also handles the mobile nav toggle, smooth anchor scrolling and fade-in-on-scroll animations.
4. **`styles.css`** uses CSS custom properties defined under `:root`. Change `--color-*` values there to re-theme the entire site.

## Opening locally

Double-click `index.html` in Finder. The page renders with PAFOI draft content even if `fetch("site-spec.json")` is blocked by the browser (the fallback spec in `app.js` provides the same structure).

## Current status

- This is a **draft** build (version 1.0.0-draft).
- It is **not yet connected** to Netlify or any production deployment.
- All content is **placeholder/draft** — awaiting owner review and approval.
- **Contact details and external links must be added/approved before release.**

## Deployment path

Future deployment follows: feature branch → review → preview → named approval → release.

## Design tokens

Edit `styles.css` under `:root` to restyle:

| Token | Value | Purpose |
|---|---|---|
| `--color-primary` | `#155E3A` | Deep forest green |
| `--color-primary-strong` | `#0D3B25` | Darker forest green |
| `--color-accent` | `#B8D89A` | Soft leaf green |
| `--color-background` | `#F7F3E8` | Warm paper-like background |
| `--color-surface` | `#FFFDF8` | Card/surface backgrounds |
| `--color-text` | `#1E2A22` | Dark green/charcoal text |
| `--color-muted` | `#5F6F62` | Secondary text |
| `--color-border` | `#D9E2D2` | Borders, dividers |

## Constraints

- No other external dependencies, CDNs, or remote assets .
- System fonts only (Georgia serif, Inter/system-ui sans-serif).
- All assets are local SVGs.
- No real contact details, claims, statistics or partner names.
- All navigation and CTA links are local anchors (`#...`).
