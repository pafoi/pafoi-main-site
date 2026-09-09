# Site Spec Guide

## Overview

`site-spec.json` is the single source of content and branding for this template. Every visible text string, colour, navigation link and section is defined here.

## Top-level metadata fields

### schema_version

Version of the spec format (e.g. `"1.0.0"`). Must follow semantic versioning.

### tenant_id / interface_id / interface_type / template_id

Identity metadata. In the template these are set to generic placeholders. In a real tenant site they identify:

- **tenant_id** — the organisation or client.
- **interface_id** — the specific interface or site instance.
- **interface_type** — one of `"static-site"`, `"landing-page"`, `"microsite"`.
- **template_id** — the base template version this spec derives from.

### release

- **version** — Template or site version (semver). May include a `-draft` suffix for non-production builds.
- **status** — One of `"draft"`, `"review"`, `"approved"`, `"released"`.
- **environment** — Environment label (e.g. `"local-preview"`).
- **created** — Date string (ISO format).
- **owner** — Person or role responsible.
- **approved_by** — Name of approving authority (optional).
- **template** — Identifier for the base template version used.

## Content fields (nested structure)

### site

- **name** — Organisation or site name. Maps to the header wordmark, page title and footer.
- **tagline** — Short tagline (optional).

### nav

Array of local anchor links:

```json
"nav": [
  { "label": "About", "href": "#about" },
  { "label": "What We Grow", "href": "#themes" }
]
```

**All `href` values must be local anchors (`#...`).** No external URLs are permitted in navigation.

### sections

All page sections are nested under `sections`:

#### sections.hero

- **eyebrow** — Short label displayed above the main headline (e.g. "Plant a Forest of Ideas"). Optional but recommended for brand context.
- **heading** — Main headline.
- **description** — Supporting text.
- **ctaText** — Button label for the primary CTA (links to `#featured`).

#### sections.about

- **heading** — Section title.
- **content** — Body text describing the organisation's purpose.

#### sections.themes

- **heading** — Section title.
- **items** — Array of card objects with `icon` (optional), `title` and `description`. Minimum one item. The `icon` value maps to a local SVG glyph (e.g. `"ideas"`, `"people"`, `"action"`).

#### sections.placemake

- **heading** — Section title (e.g. "Let's Placemake").
- **content** — Body text describing the outreach programme.

#### sections.featured

- **heading** — Section title.
- **items** — Array of card objects with `title` and `description`. Minimum one item.

#### sections.cta

- **heading** — Section title.
- **description** — Invitation text.
- **buttonText** — CTA button label (links to `#contact`).

#### sections.footer

- **organisationName** — Displayed in the footer.
- **email** — Contact email address. Set to `null` to show "Contact details will be added before release." instead of a mailto link. Do not use fake or placeholder emails.
- **year** — Copyright year (optional).

### localPreview

- **note** — Text shown in the footer when the page loads with fallback data (i.e. when `site-spec.json` could not be fetched).

## Brand colours

Brand colours are defined in `styles.css` as CSS custom properties under `:root`. The `site-spec.json` file does not duplicate colour values directly; instead, colours are changed by editing the `--color-*` variables in `styles.css`.

Only system fonts are permitted. External font URLs, @font-face declarations or CDN font links violate the template constraints.

## How sections are rendered

`app.js` reads `site-spec.json` (via `fetch`, with inline fallback) and populates the DOM elements identified by their IDs:

- `#site-title` — site name
- `#nav-links-desktop` / `#nav-links-mobile` — navigation
- `#hero-eyebrow`, `#hero-heading`, `#hero-description`, `#hero-cta` — hero section
- `#about-heading`, `#about-content` — about section
- `#themes-heading`, `#themes-grid` — themes cards
- `#placemake-heading`, `#placemake-content`, `#placemake-cta` — placemake section
- `#featured-heading`, `#featured-grid` — featured cards
- `#cta-heading`, `#cta-description`, `#cta-button` — CTA section
- `#footer-org`, `#footer-email`, `#footer-copy` — footer

When `fetch` fails (e.g. under `file://`), a hardcoded fallback spec in `app.js` provides the same structure with PAFOI-safe placeholder values.

## Contact / email behaviour

When `sections.footer.email` is set to `null`:
- The footer displays only: "Contact details will be added before release."
- No `mailto:` link is rendered.
- No fake, placeholder or real-looking email address is shown.

This is the required default for draft and pre-release builds.

## Approval requirements

Public claims, external links, prices, contact details, partner names and public statements **require human approval** before being added to `site-spec.json`. The template uses only generic placeholders to avoid accidental publication of unverified content.
