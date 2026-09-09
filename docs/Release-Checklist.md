# Release Checklist

## Identity

- [ ] `tenant_id` is set to a generic placeholder (not a real organisation)
- [ ] `interface_id` is unique and valid
- [ ] `interface_type` matches the intended site type
- [ ] `template_id` references the correct base template version

## Site specification

- [ ] `site-spec.json` is valid against `site-spec.schema.json`
- [ ] All required fields are present
- [ ] No Lorem Ipsum text — all placeholders are generic but readable
- [ ] Navigation `href` values are local anchors only (no external URLs)
- [ ] SEO title is under 60 characters
- [ ] SEO description is under 160 characters

## Brand assets

- [ ] `assets/logo-placeholder.svg` is present and renders
- [ ] `assets/hero-placeholder.svg` is present and renders
- [ ] `assets/favicon.svg` is present and renders
- [ ] All SVGs are original, abstract/geometric shapes
- [ ] No photographs, maps, recognisable brand marks or external assets
- [ ] Brand colours in `site-spec.json` match CSS custom properties in `styles.css`

## Security

- [ ] No `.env` files in the repository
- [ ] No API keys, tokens, credentials or secret patterns in any file
- [ ] No external `http://` or `https://` URLs in HTML, CSS, JS or SVGs
- [ ] No package.json, node_modules, or dependency manifests

## Content

- [ ] No real tenant/client names, contact details or claims
- [ ] No prices, partner names, programmes or case studies
- [ ] CTA `href` points to `#contact` (not an external URL)
- [ ] All links are local anchors

## Layout and responsive

- [ ] Hero section displays correctly on mobile (single column)
- [ ] Card grids collapse to single column on mobile
- [ ] Navigation toggle works on mobile viewport
- [ ] Desktop navigation displays on larger viewports
- [ ] Hero text and visual swap order correctly at tablet breakpoint

## Accessibility

- [ ] Skip-to-content link is visible on focus
- [ ] All interactive elements are keyboard-accessible
- [ ] Focus indicators are visible on buttons and links
- [ ] Mobile nav closes on Escape key
- [ ] ARIA attributes are present on nav toggle and panel
- [ ] Color contrast meets WCAG AA for body text

## Preview

- [ ] Page opens and renders via `file://` without errors
- [ ] Fallback content loads when `fetch` is blocked
- [ ] Local preview note appears in footer when fallback is used
- [ ] Preview has been approved by the template owner

## Release

- [ ] Named release owner identified
- [ ] Git branch is `features/loom-YYYY-###-short-description`
- [ ] Commit SHA recorded
- [ ] PR URL recorded (if applicable)
- [ ] Deployment/release record created (if applicable)
- [ ] Rollback point identified (previous commit or branch state)
