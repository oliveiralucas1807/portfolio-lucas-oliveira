# Pending Editorial Updates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate the public blog source and publish the two approved bilingual editorial updates without changing the homepage deployment.

**Architecture:** Keep the existing typed `BlogPost[]` data source. Add regression contracts before copying the two existing public milestones and writing the two new text-only posts. Build with the GitHub Pages base path and deploy only the localized blog HTML files.

**Tech Stack:** Astro, TypeScript, Vitest, Playwright, GitHub Pages.

## Global Constraints

- Preserve all ten currently public posts.
- Add `bancada-conteudo-piloto-externo` and `psd-after-effects-arquitetura` as bilingual text-only posts.
- Do not expose tester names, client data, financial data, credentials, or confidential commercial material.
- Do not use the editorial em dash character `—` in either new post.
- Do not claim installation, adoption, JSX execution, composition, or render validation.
- Deploy only `blog/index.html` and `en/blog/index.html` to avoid overwriting the homepage.

---

### Task 1: Define the editorial contracts

**Files:**
- Modify: `tests/unit/content-contract.test.ts`

**Interfaces:**
- Consumes: exported `blogPosts: BlogPost[]` from `src/data/blog.ts`.
- Produces: regression assertions for four required slugs and privacy/state boundaries.

- [ ] **Step 1: Write the failing test**

Add assertions that locate `qa-pos-deploy-dispositivo-real`, `dashboard-financeiro-em-construcao`, `bancada-conteudo-piloto-externo`, and `psd-after-effects-arquitetura`. Require exact dates, zero images on the two new posts, bilingual text, and absence of tester names, adoption claims, render claims, private financial terms, and `—`.

- [ ] **Step 2: Run the test to verify RED**

Run: `npm test -- tests/unit/content-contract.test.ts`

Expected: FAIL because the four required slugs are missing from `origin/main`.

- [ ] **Step 3: Commit the failing contract**

Run:

```powershell
git add tests/unit/content-contract.test.ts
git commit -m "test: define pending editorial updates"
```

### Task 2: Consolidate and write the four milestones

**Files:**
- Modify: `src/data/blog.ts`
- Create: `public-site/assets/blog/qa-pos-deploy-dispositivo-real/hero-mobile-antes.webp`
- Create: `public-site/assets/blog/qa-pos-deploy-dispositivo-real/hero-mobile-depois.webp`
- Create: `public-site/assets/blog/qa-pos-deploy-dispositivo-real/curriculo-mobile-antes.webp`
- Create: `public-site/assets/blog/qa-pos-deploy-dispositivo-real/curriculo-mobile-depois.webp`
- Modify: `docs/processo-v2/17-inventario-imagens-blog.md`

**Interfaces:**
- Consumes: the existing `BlogPost` type and `sitePath` image mapping.
- Produces: twelve sourced, localized blog posts.

- [ ] **Step 1: Copy the already-public QA and dashboard milestones**

Copy their exact approved entries and QA assets from `D:\portfolio site git hub online\portfolio-v2-release-spotify`, preserving their existing source references and image metadata.

- [ ] **Step 2: Add the pilot milestone**

Use slug `bancada-conteudo-piloto-externo`, date `10 AGO 2026`, dateISO `2026-08-10`, topics `creative-workbench` and `applied-ai`, source `obsidian:portfolio-case-mivybook-megazord-dashboard`, and `images: []`. State that four complementary creative profiles received the package, but installation and adoption remain unverified.

- [ ] **Step 3: Add the PSD to After Effects milestone**

Use slug `psd-after-effects-arquitetura`, date `21 AGO 2026`, dateISO `2026-08-21`, topics `research` and `applied-ai`, source `obsidian:projeto-automacao-psd-after-effects-chatgpt`, and `images: []`. Explain the reviewed flow from PSD to manifest, motion plan, editable AEP and QA, while explicitly stating that JSX execution and render validation remain pending.

- [ ] **Step 4: Run the focused test to verify GREEN**

Run: `npm test -- tests/unit/content-contract.test.ts`

Expected: PASS.

- [ ] **Step 5: Run copy checks**

Search the serialized new posts for `—`, tester names, financial institutions, `render validado`, `adotado`, and equivalent English overclaims. Expected: zero matches.

- [ ] **Step 6: Commit the content**

Run:

```powershell
git add src/data/blog.ts public-site/assets/blog/qa-pos-deploy-dispositivo-real docs/processo-v2/17-inventario-imagens-blog.md
git commit -m "feat: publish pending editorial updates"
```

### Task 3: Verify and publish the localized blog

**Files:**
- Generated: `dist/blog/index.html`
- Generated: `dist/en/blog/index.html`

**Interfaces:**
- Consumes: the twelve-post `blogPosts` collection.
- Produces: localized static blog pages under the GitHub Pages base path.

- [ ] **Step 1: Run the full unit suite**

Run: `npm test`

Expected: all test files pass with zero failures.

- [ ] **Step 2: Build for GitHub Pages**

Run:

```powershell
$env:DEPLOY_BASE='/portfolio-lucas-oliveira'
npm run build
```

Expected: Astro check reports zero errors, warnings, and hints; four static routes build successfully.

- [ ] **Step 3: Verify generated HTML**

Confirm both new localized titles exist and CSS paths begin with `/portfolio-lucas-oliveira/_astro/`.

- [ ] **Step 4: Push the source branch**

Push `editorial/blog-pendentes-20260830`, then merge it into `main` without rewriting history.

- [ ] **Step 5: Publish only blog HTML**

Update `blog/index.html` and `en/blog/index.html` on `gh-pages`. Do not copy `index.html`, gallery data, or homepage assets.

- [ ] **Step 6: Verify production**

Fetch the public Portuguese and English blog with cache busting. Require HTTP 200, twelve unique article titles, both new posts, and CSS HTTP 200. Open both pages in Chromium at desktop and mobile widths and confirm the article summaries render without horizontal overflow.

