# AGENTS.md — PAFOI Main Website V1

**Repository:** PAFOI Main Website V1
**Parent Loom job:** LOOM-2026-004
**Purpose:** Plant a Forest of Ideas (PAFOI) main website, created from 3is Web Studio Static Template V0.5.

---

## Binding branch rule

Work only on `features/loom-YYYY-###-short-description`. Never work directly on `main`.

## Binding constraints for this job

- Plain HTML, CSS and vanilla JavaScript only.
- No frameworks, no package.json, no build tools, no dependencies.
- No Netlify config, n8n workflows, API/webhook/server/database code.
- No external services, URLs, fonts, libraries, or assets.
- No credentials, tokens, API keys, `.env` files, or secrets.
- Generic placeholder content only. No real tenant/client content.
- No direct deployment.
- No commit, push, PR, or merge without explicit owner approval.

## Future-agent rules

- Read README.md and relevant docs before changing files.
- Preserve the template as generic. Do not overwrite with PAFOI, TSD, SCII, BOSS, HAL, Yuanli, or real client content.
- Real tenant/client sites must be created in separate repositories.
- Use `site-spec.json` for normal content, branding, and section changes.
- Keep all assets local. Validate JSON and local file references.
- Show changed files and validation results before any commit.
- Do not merge or release production changes without named human approval.

## Completion report

Agents must report: current branch, files changed, validation results, assumptions, known risks, and commit SHA/PR URL/preview URL only if those actions are explicitly authorised in a future job.
