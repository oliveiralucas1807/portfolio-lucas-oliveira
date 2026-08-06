# Portfolio V2 Editorial and Case Presentation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the approved V2 home with clearer copy, contact and Spotify modals, taller artwork strips, complete case galleries, and a reduced Laboratory scope.

**Architecture:** Keep Astro as the static composition layer and React only for reusable modal behavior. Centralize bilingual copy in `src/i18n/config.ts`, preserve case metadata in `src/data/cases.ts`, and publish optimized WebP derivatives through `public-site/`.

**Tech Stack:** Astro 7, React 19 islands, TypeScript, CSS tokens, Vitest, Playwright, FFmpeg for generated WebP assets.

## Global Constraints

- Do not publish or modify the active portfolio.
- Preserve the current hero artwork and the six-project order.
- Remove editorial em dashes from visible copy in Portuguese and English.
- Keep the full contact section while opening the top contact action in a modal.
- Keep dark mode, custom cursor, Spotify structure, blog, carousel variants, and controlled parallax in the Laboratory.
- Remove newsletter, CMS, form, 3D object, and project filters from the Laboratory.
- Respect reduced motion and maintain keyboard accessibility.
- Do not add external services or dependencies unless required by the approved specification.

---

### Task 1: Lock revised content and scope with tests

**Files:**
- Modify: `tests/unit/content.test.ts`
- Modify: `tests/unit/lab.test.ts`
- Modify: `src/i18n/config.ts`
- Modify: `src/data/labFeatures.ts`

**Interfaces:**
- Produces: revised `ui.pt` and `ui.en` strings and a six-item `labFeatures` array.
- Consumes: existing `Locale` and `LabFeature` types.

- [ ] **Step 1: Add failing assertions** for direct project headings, absence of em dashes, revised LinkedIn positioning, and the exact Laboratory IDs `dark-mode`, `cursor`, `spotify`, `blog`, `carousel-variants`, and `parallax`.
- [ ] **Step 2: Run `npm test -- tests/unit/content.test.ts tests/unit/lab.test.ts`** and confirm the old copy and eleven-item Laboratory fail.
- [ ] **Step 3: Update bilingual copy and Laboratory data** with no newsletter, CMS, Resend form, 3D object, or filters.
- [ ] **Step 4: Run the two unit files again** and expect all assertions to pass.
- [ ] **Step 5: Commit** with `git commit -m "content: refine portfolio v2 editorial voice"`.

### Task 2: Expand case image data and optimized assets

**Files:**
- Modify: `src/data/cases.ts`
- Create: additional WebP files under `public-site/assets/cases/<case-id>/`
- Modify: `tests/unit/cases.test.ts`

**Interfaces:**
- Produces: `PortfolioCase.images` containing all selected images and `PortfolioCase.featured` containing exactly three opening images.
- Consumes: the source records in `data/cases.json` and preserved originals under `public/assets/cases/`.

- [ ] **Step 1: Add failing tests** requiring six cases, three featured images per case, more than five total images per case, and Coimbra featured filenames for Escalação Campeã, Mega Mês do Trabalhador, and Mês do Serralheiro.
- [ ] **Step 2: Run `npm test -- tests/unit/cases.test.ts`** and confirm the five-image slice fails.
- [ ] **Step 3: Update `cases.ts`** to expose all source images and a deterministic three-image featured selection.
- [ ] **Step 4: Generate optimized WebP derivatives** from each source image, max width 800 px, quality 74, without altering source files.
- [ ] **Step 5: Run the case tests and `node scripts/check-links.mjs dist` after a build** to verify every referenced derivative exists.
- [ ] **Step 6: Commit** with `git commit -m "feat: expand portfolio case galleries"`.

### Task 3: Add reusable accessible modals

**Files:**
- Create: `src/components/islands/PortfolioModal.tsx`
- Create: `src/components/home/ModalLayer.astro`
- Modify: `src/components/home/Hero.astro`
- Modify: `src/components/home/AboutContact.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/en/index.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Produces: buttons using `data-modal-open="contact"` and `data-modal-open="spotify"`; dialogs identified by `data-modal="contact"` and `data-modal="spotify"`.
- Modal behavior: open, trap focus, close by button, backdrop, and Escape, then restore trigger focus.

- [ ] **Step 1: Add failing E2E scenarios** for opening contact from the hero, opening Spotify from its panel, Escape closing, and focus restoration.
- [ ] **Step 2: Run the targeted Playwright test** and confirm modal selectors are absent.
- [ ] **Step 3: Implement the reusable React modal controller and Astro modal content layer** with bilingual labels and no external submission.
- [ ] **Step 4: Replace the hero anchor with a modal button** while preserving the footer contact section.
- [ ] **Step 5: Convert the Spotify right panel into the modal trigger** and retain the safe playlist placeholder.
- [ ] **Step 6: Run targeted E2E tests** and expect all modal interactions to pass.
- [ ] **Step 7: Commit** with `git commit -m "feat: add contact and spotify modals"`.

### Task 4: Refine hero, kinetic gallery, projects, and about layouts

**Files:**
- Modify: `src/components/home/KineticGallery.astro`
- Modify: `src/components/home/Projects.astro`
- Modify: `src/components/home/AboutContact.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Produces: `.project-featured` with three images, `.project-gallery` with remaining images, `.deep-bridge-grid`, and taller `.marquee-track figure` cards.
- Consumes: revised `PortfolioCase.featured`, `PortfolioCase.images`, and bilingual UI copy.

- [ ] **Step 1: Add failing E2E assertions** for three featured images per project, more gallery images after expansion, the two-column process bridge on desktop, and no horizontal overflow on mobile.
- [ ] **Step 2: Run the targeted E2E tests** and verify failures against the old single-banner structure.
- [ ] **Step 3: Remove the unexplained gallery heading copy and keep a concise accessible label.**
- [ ] **Step 4: Implement taller 3:4 kinetic cards** with controlled widths and reduced-motion fallback.
- [ ] **Step 5: Restructure project headings and featured artwork** so summaries sit below titles and three vertical artworks lead each project.
- [ ] **Step 6: Render every remaining case image in responsive multi-row galleries.**
- [ ] **Step 7: Implement the two-column development bridge and left-aligned About hierarchy.**
- [ ] **Step 8: Reduce the hero role scale to 35% to 40% of the name scale.**
- [ ] **Step 9: Run E2E desktop and mobile tests** and expect the new structure and overflow checks to pass.
- [ ] **Step 10: Commit** with `git commit -m "feat: refine portfolio case presentation"`.

### Task 5: Simplify the Laboratory and update documentation

**Files:**
- Modify: `src/components/lab/Laboratory.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`
- Modify: `docs/processo-v2/02-sistema-visual-e-implementacao.md`
- Modify: `docs/processo-v2/08-qa-e-resultados.md`
- Create: `docs/processo-v2/09-revisao-editorial-e-galerias.md`

**Interfaces:**
- Produces: six visible Laboratory cards with only approved demonstrations.
- Consumes: reduced `labFeatures` array.

- [ ] **Step 1: Update E2E expectations** from eleven Laboratory cards to six and assert removed feature names are absent.
- [ ] **Step 2: Remove obsolete demo markup and scripts** for forms, CMS, 3D, and filters.
- [ ] **Step 3: Rewrite the blog card** as a future part of the cases and development environment.
- [ ] **Step 4: Update process documentation** with feedback, decisions, implementation evidence, and remaining Spotify decision.
- [ ] **Step 5: Run `npm test` and `npm run test:e2e`** and expect all suites to pass.
- [ ] **Step 6: Commit** with `git commit -m "refactor: focus portfolio v2 laboratory"`.

### Task 6: Final visual and technical verification

**Files:**
- Modify: `docs/processo-v2/08-qa-e-resultados.md`
- Create: refreshed screenshots under `docs/processo-v2/screenshots/`

**Interfaces:**
- Produces: fresh QA evidence for the revised V2.
- Consumes: the complete built site.

- [ ] **Step 1: Run `npm test`** and require zero failures.
- [ ] **Step 2: Run `npm run build`** and require zero Astro errors, warnings, or hints.
- [ ] **Step 3: Run `npm run test:e2e`** and require all desktop and mobile scenarios to pass.
- [ ] **Step 4: Run `node scripts/check-links.mjs dist`** and require zero broken links or assets.
- [ ] **Step 5: Inspect desktop and mobile screenshots** for text alignment, artwork cropping, modal layout, and horizontal overflow.
- [ ] **Step 6: Record final evidence and commit** with `git commit -m "docs: validate portfolio v2 editorial revision"`.
