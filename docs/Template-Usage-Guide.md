# Template Usage Guide

## What this is

This repository contains a **generic, reusable static-site template** for 3is Web Studio. It is built with plain HTML, CSS and vanilla JavaScript only — no frameworks, build tools, or external dependencies.

It is **not** a live website. It is a template from which future tenant or client sites are derived.

## What this is not

- This is not a PAFOI site.
- This is not a Yuanli public site.
- This is not a real client or tenant site.
- It does not contain real names, contact details, prices, partners, programmes or case studies.

## How future sites are created

Each real tenant or client site must be created in a **separate repository**. This template is copied or forked, then customised through:

1. **`site-spec.json`** — All content, branding, navigation, section text and metadata. Edit this file to change what the site says and how it looks.
2. **`assets/`** — Replace placeholder SVGs with the tenant's own local assets.
3. **`styles.css`** — Adjust CSS custom properties (colours, spacing, fonts) to match the tenant's brand.
4. **`index.html`** — Modify structure only if new sections or layout changes are needed beyond what `site-spec.json` drives.

## Template versioning

The template follows semantic versioning (`MAJOR.MINOR.PATCH`). The current version is tracked in `site-spec.json` under `release.version`.

- **MAJOR** — breaking changes to the template structure or `site-spec.json` schema.
- **MINOR** — new sections, fields or features added without breaking existing specs.
- **PATCH** — bug fixes, accessibility improvements, visual refinements.

When a new template version is released, the `release` object in `site-spec.json` should be updated with the new version, date and owner.

## Why real tenant content must not overwrite this repository

This template is the **source of truth for structure and constraint**. If real tenant content were written here:

- Future sites would inherit that tenant's data by accident.
- The template would no longer be generic or reusable.
- Schema validation would fail against real data that does not match the template shape.

Each tenant site lives in its own repository, referencing this template as the base pattern.
