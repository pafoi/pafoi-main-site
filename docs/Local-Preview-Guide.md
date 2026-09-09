# Local Preview Guide

## Opening the template directly

You can open `index.html` directly from Finder (macOS) or File Explorer (Windows) by double-clicking it. The browser will render the page immediately.

## Why fetch() may be blocked

When opened via `file://`, modern browsers apply strict CORS policies. The `fetch("site-spec.json")` call in `app.js` will likely fail with a CORS error.

**This is expected and handled.** The template includes a fallback mechanism:

1. `app.js` attempts to load `site-spec.json` via `fetch`.
2. If `fetch` fails, it falls back to reading the embedded `<script type="application/json" id="site-data">` tag in `index.html`.
3. The page renders with the same content either way.

## Fallback content

When the fallback path is used, a **local preview note** appears at the bottom of the footer:

> "This page is rendering with local fallback data from site-spec.json. Connect a live data source to replace placeholder content."

This confirms the page is working correctly with local data.

## No local server required

This job does **not** install, configure or require any local server, dependency manager, or build tool. The template is designed to work with zero setup.

## Adding a local server later

In a separate approved Loom job, a simple local HTTP server may be added to serve the template without CORS restrictions. Options include:

- A minimal Python `http.server` script.
- A lightweight Node.js static server.
- A hosted preview environment (e.g. Netlify, Vercel).

No such server or hosting configuration is part of this build job. Any preview URL, deployment record, or release process will be created in a future job with explicit owner approval.
