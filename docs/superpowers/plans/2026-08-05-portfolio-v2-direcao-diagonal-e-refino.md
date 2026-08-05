# Portfolio V2 Diagonal Direction and Editorial Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a diagonal hero transition, compact navigation, refined case hierarchy, custom icons, an improved About section, and a floating Spotify preview to the approved V2.

**Architecture:** Keep static layout in Astro, content in typed data files, and interaction in focused React islands. Use project-native SVG icons and optimized WebP assets without introducing an icon library or external service.

**Tech Stack:** Astro 7, React 19, TypeScript, CSS, Vitest, Playwright, FFmpeg.

## Global Constraints

- Work only in `D:\portfolio site git hub online\portfolio-v2-lucas-oliveira`.
- Do not publish or modify the active portfolio.
- Treat the missing Spotify URL as a prepared disabled state.
- Keep Portuguese and English synchronized.
- Keep all source artwork read-only and publish only optimized derivatives.
- Preserve dark mode, reduced motion, keyboard access, and no horizontal overflow.

---

### Task 1: Lock copy and featured curation

**Files:**
- Modify: `tests/unit/content-contract.test.ts`
- Modify: `src/data/cases.ts`
- Modify: `src/i18n/config.ts`

**Interfaces:**
- Produces: `featuredIndexes: Record<string, number[]>`, revised case summaries and the exact home headings.
- Consumes: existing case image arrays and locale records.

- [ ] Add failing tests for `Projetos e campanhas.`, the Coimbra summary, the process title, `Vamos conversar.`, period prefix, and featured filenames for Coimbra, Cultura Inglesa and Ótica Murano.
- [ ] Run the unit test and confirm it fails against current copy and curation.
- [ ] Implement localized copy and deterministic featured indexes: Coimbra `[0,12,16]`, Cultura Inglesa `[0,6,2]`, Ótica Murano `[0,1,11]`, other cases `[0,1,2]`.
- [ ] Run unit tests and require all assertions to pass.
- [ ] Commit as `content: refine portfolio case hierarchy`.

### Task 2: Compact navigation, diagonal transition and expanded gallery

**Files:**
- Modify: `src/components/navigation/Topbar.astro`
- Modify: `src/components/home/KineticGallery.astro`
- Modify: `src/data/gallery.ts`
- Modify: `src/styles/global.css`
- Create: additional WebP files under `public-site/assets/gallery/`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Produces: `LOS®`, `.kinetic-shell`, at least 26 unique gallery items, and a top bar no wider than 920 px.
- Consumes: gallery sources from SERV INSPIRA and SERV TH.

- [ ] Add failing E2E assertions for LOS, gallery item count, and the diagonal container class.
- [ ] Run the targeted E2E test and confirm failure.
- [ ] Add eight or more additional client artworks, convert to WebP up to 480 px, and register them in `gallery.ts`.
- [ ] Implement the compact top bar and diagonal overlap with rotation compensation.
- [ ] Run desktop and mobile E2E checks, including horizontal overflow.
- [ ] Commit as `feat: add diagonal gallery transition`.

### Task 3: Rebuild case hierarchy and expansion control

**Files:**
- Modify: `src/components/home/Projects.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Produces: centered project intro, `.project-context`, `.project-details` before `.project-featured`, and `.project-expand-cta`.
- Consumes: revised case copy and featured arrays.

- [ ] Add failing E2E assertions for centered heading, detail order, exact Coimbra featured artwork and expansion CTA.
- [ ] Run the targeted test and confirm structural failures.
- [ ] Implement balanced title wrapping, client context, bordered detail columns and reordered featured gallery.
- [ ] Style the expansion CTA as a centered orange pulse with reduced-motion fallback.
- [ ] Replace process title, add disabled `Acessar cases` button and thin availability label.
- [ ] Run E2E tests and commit as `feat: refine portfolio project storytelling`.

### Task 4: Add icon system and repair modal behavior

**Files:**
- Create: `src/components/ui/Icon.astro`
- Modify: `src/components/home/ModalLayer.astro`
- Modify: `src/components/islands/PortfolioModal.tsx`
- Modify: `src/components/home/AboutContact.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Produces: inline SVG icons named `mail`, `whatsapp`, `linkedin`, `file`, `arrow`, `close`, `play`, `volume`, and `spark`.
- Consumes: existing contact and modal data.

- [ ] Add failing tests for visible modal center coordinates, icon count, close interactions and cursor visibility class.
- [ ] Run targeted modal tests and confirm failure.
- [ ] Implement the icon component and use it in modal and final contact links.
- [ ] Center dialogs explicitly, apply optical title offset and force a visible native cursor inside dialog/backdrop.
- [ ] Run modal tests and commit as `feat: add portfolio icon system`.

### Task 5: Rebuild About and add floating Spotify preview

**Files:**
- Create: `src/components/islands/FloatingSpotify.tsx`
- Modify: `src/components/home/AboutContact.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/en/index.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Produces: `.about-portrait`, `.skill-chip`, `[data-floating-spotify]` and session-scoped dismissal.
- Consumes: the clean mobile hero asset and `siteConfig.spotifyPlaylist`.

- [ ] Add failing E2E assertions for portrait, six skill chips, player dismissal and disabled media controls.
- [ ] Run targeted tests and confirm the new UI is absent.
- [ ] Build the improved About layout with photo, aligned text and icon chips.
- [ ] Replace the fixed Spotify section with a right-side floating React player that can close and persist dismissal in session storage.
- [ ] Keep play and mute disabled until a playlist URL exists and label the state accessibly.
- [ ] Change final CTA to `Vamos conversar.` and use contact icons.
- [ ] Run E2E tests and commit as `feat: rebuild about and spotify preview`.

### Task 6: Expand Laboratory ideas and document the revision

**Files:**
- Modify: `src/data/labFeatures.ts`
- Modify: `src/components/lab/Laboratory.astro`
- Modify: `src/styles/global.css`
- Create: `docs/processo-v2/10-direcao-diagonal-icones-e-cases.md`
- Modify: `docs/processo-v2/08-qa-e-resultados.md`

**Interfaces:**
- Produces: blog title `O que está em construção` and three parallax concept cards.
- Consumes: existing Laboratory registry.

- [ ] Add failing unit/E2E assertions for the new blog title and three parallax concepts.
- [ ] Implement the revised Laboratory copy and visual concept samples without adding them to the home.
- [ ] Document feedback, curations, assets, copy and remaining Spotify dependency.
- [ ] Run `npm test`, `npm run build`, `npm run test:e2e`, and `node scripts/check-links.mjs dist`.
- [ ] Capture desktop/mobile screenshots and inspect top bar, diagonal, titles, modal, About and floating player.
- [ ] Commit as `docs: validate diagonal portfolio refinement`.
