# Portfolio Light V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the animated, bilingual Portfolio Light V2 and its isolated Laboratory without changing or publishing the current production portfolio.

**Architecture:** Astro 7 renders static PT/EN routes and content-first mini-cases. Tailwind CSS 4 provides shared visual tokens; React 19 is restricted to stateful islands such as theme, development controls, and the Laboratory. The home remains progressively enhanced and the Laboratory is code-split away from its initial payload.

**Tech Stack:** Node.js 22, Astro 7.1.6, Tailwind CSS 4.3.3, React 19.2.8, TypeScript, Vitest 4.1.10, Playwright 1.62.1, GitHub Pages-compatible static output.

## Global Constraints

- Work only in `D:\portfolio site git hub online\portfolio-v2-lucas-oliveira`.
- Do not configure a Git remote, push, deploy, or modify `D:\portfolio site git hub online\portfolio ativo online`.
- Preserve the six current projects and their order; add a “Mais cases em breve” card.
- Remove the redundant “Cases selecionados” shortcut section and the footer phrase “Portfólio Light para processos seletivos”.
- Preserve the current hero presentation as the visual baseline on desktop and mobile.
- Use Astro for static routes, Tailwind for tokens/composition, and React only for stateful islands.
- Use Inter for interface/body, Montserrat for primary titles, and Archivo Black only as a restrained editorial accent; do not include Arial in the authored font stack.
- Use initial tokens `#FFFFFF`, `#F5F6F7`, `#E7E9EC`, `#24262B`, `#FF6A00`, and `#121316`.
- Provide complete Portuguese and English routes with `lang`, canonical, `hreflang`, translated metadata, UI, alt text, and case copy.
- Include motion in the first build and respect `prefers-reduced-motion` everywhere.
- Keep WhatsApp, Spotify placeholder, curriculum, contact, and LinkedIn access.
- Keep the deep case portfolio separate; the Light V2 links to it through an explicit future-facing bridge.
- Do not activate credentials, real email submission, CMS persistence, analytics, or paid services.
- Record evidence and decisions in `docs/processo-v2/`; never record credentials, raw conversation, or unverified metrics.
- Do not overwrite source art directories; copy only approved derivatives into the V2.

---

## Planned File Map

- `package.json`: scripts and exact runtime/dev dependencies.
- `astro.config.mjs`: static output, Vite/Tailwind, React, and future Pages base handling.
- `tsconfig.json`: Astro strict TypeScript settings and path aliases.
- `src/styles/global.css`: fonts, tokens, reset, focus, themes, and motion fallbacks.
- `src/layouts/BaseLayout.astro`: metadata, language alternates, topbar shell, footer, and global scripts.
- `src/i18n/config.ts`: locale types, route helpers, and UI strings.
- `src/content.config.ts`: schema for bilingual mini-cases.
- `src/content/cases/*.json`: one validated content record per existing case.
- `src/data/site.ts`: professional links and site-wide configuration.
- `src/data/gallery.ts`: curated kinetic-gallery manifest.
- `src/components/home/*.astro`: static/progressive home sections.
- `src/components/islands/*.tsx`: theme, cursor, and Laboratory-only stateful controls.
- `src/pages/index.astro`, `src/pages/en/index.astro`: bilingual home routes.
- `src/pages/laboratorio/index.astro`, `src/pages/en/lab/index.astro`: isolated feature demonstrations.
- `src/pages/robots.txt.ts`: local/development-safe indexing policy.
- `src/lib/*.ts`: pure locale, gallery, and preference helpers.
- `tests/unit/*.test.ts`: pure behavior and content contract tests.
- `tests/e2e/*.spec.ts`: responsive, locale, accessibility, and interaction tests.
- `playwright.config.ts`, `vitest.config.ts`: test runners.
- `docs/processo-v2/*.md`: baseline, decisions, asset inventory, implementation log, and QA evidence.

---

### Task 1: Establish the Astro testable foundation

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `vitest.config.ts`
- Create: `playwright.config.ts`
- Create: `src/pages/index.astro`
- Create: `src/styles/global.css`
- Create: `tests/unit/smoke.test.ts`
- Create: `docs/processo-v2/00-baseline-e-escopo.md`

**Interfaces:**
- Consumes: existing static V1 files as read-only reference.
- Produces: `npm run dev`, `npm run build`, `npm run test`, and `npm run test:e2e`; Astro `@/*` alias.

- [ ] **Step 1: Write the initial smoke test**

```ts
import { describe, expect, it } from 'vitest';

describe('V2 workspace', () => {
  it('runs the unit-test harness', () => {
    expect('portfolio-v2').toContain('v2');
  });
});
```

- [ ] **Step 2: Run the test to verify the missing harness fails**

Run: `npm test`

Expected: FAIL because `package.json` and Vitest configuration do not exist.

- [ ] **Step 3: Add the exact project scripts and dependencies**

```json
{
  "name": "portfolio-light-v2-lucas-oliveira",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "@astrojs/react": "6.0.2",
    "@tailwindcss/vite": "4.3.3",
    "astro": "7.1.6",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "tailwindcss": "4.3.3"
  },
  "devDependencies": {
    "@astrojs/check": "0.9.10",
    "@playwright/test": "1.62.1",
    "@types/react": "19.2.18",
    "@types/react-dom": "19.2.4",
    "playwright": "1.62.1",
    "typescript": "7.0.2",
    "vitest": "4.1.10"
  }
}
```

Configure Astro static output with React and Tailwind Vite integration. Configure Vitest for Node and Playwright with `webServer.command: 'npm run dev -- --host 127.0.0.1'`, port `4321`, and desktop/mobile projects.

- [ ] **Step 4: Add the minimum accessible page and token sheet**

Create a Portuguese page with a skip link, semantic `main`, visible heading, and import `src/styles/global.css`. Define the six approved colors as CSS custom properties and define Inter/Montserrat/Archivo Black roles without Arial.

- [ ] **Step 5: Record the immutable baseline**

Document source paths, branch, no-remote constraint, existing dirty bilingual requirements file, six-case count, 120-image baseline, and the fact that production was not modified.

- [ ] **Step 6: Install and verify**

Run: `npm install && npm test && npm run build`

Expected: smoke test PASS; Astro check/build exits 0 and emits `dist/index.html`.

- [ ] **Step 7: Commit**

```powershell
git add package.json package-lock.json astro.config.mjs tsconfig.json vitest.config.ts playwright.config.ts src tests docs/processo-v2/00-baseline-e-escopo.md
git commit -m "build: establish astro v2 foundation"
```

### Task 2: Build typed bilingual content and route contracts

**Files:**
- Create: `src/i18n/config.ts`
- Create: `src/data/site.ts`
- Create: `src/content.config.ts`
- Create: `src/content/cases/coimbra.json`
- Create: `src/content/cases/tacolibre.json`
- Create: `src/content/cases/natura.json`
- Create: `src/content/cases/otica-murano.json`
- Create: `src/content/cases/la-pizza.json`
- Create: `src/content/cases/cultura-inglesa.json`
- Create: `src/lib/locale.ts`
- Create: `tests/unit/locale.test.ts`
- Create: `tests/unit/content-contract.test.ts`
- Create: `docs/processo-v2/01-fontes-profissionais-e-conteudo.md`

**Interfaces:**
- Produces: `type Locale = 'pt' | 'en'`; `localizePath(path: string, locale: Locale): string`; `ui[locale]`; `siteConfig`; Astro collection `cases`.
- Consumes: current `data/cases.json`, current HTML links, canonical curriculum, and current LinkedIn profile as read-only sources.

- [ ] **Step 1: Write locale and content contract tests**

```ts
expect(localizePath('/laboratorio/', 'en')).toBe('/en/lab/');
expect(localizePath('/', 'pt')).toBe('/');
expect(allCases).toHaveLength(6);
expect(allCases.every((item) => item.data.pt && item.data.en)).toBe(true);
```

- [ ] **Step 2: Verify the tests fail**

Run: `npm test -- tests/unit/locale.test.ts tests/unit/content-contract.test.ts`

Expected: FAIL because locale helpers and content schema do not exist.

- [ ] **Step 3: Implement locale helpers and UI dictionaries**

Define explicit PT/EN labels for navigation, hero actions, gallery, cases, future-case card, About, contact, footer, theme, Spotify empty state, and Laboratory. Route mappings must be deterministic and never derive translated slugs from display copy.

- [ ] **Step 4: Define case schema and migrate all six records**

Each record must include `order`, `slug`, `client`, `period`, `cover`, `gallery`, and bilingual `title`, `summary`, `context`, `role`, `solution`, `deliverables`, `result`, and `alt`. When evidence does not support a result, use a factual output statement rather than a metric.

- [ ] **Step 5: Verify professional positioning and links**

Read the canonical curriculum source and the public/current LinkedIn profile in strict read-only mode. Record URLs and verified wording in `site.ts`; document the date and source in `01-fontes-profissionais-e-conteudo.md` without copying private data.

- [ ] **Step 6: Run tests and content build**

Run: `npm test && npm run build`

Expected: six cases pass schema in both locales; build exits 0.

- [ ] **Step 7: Commit**

```powershell
git add src/i18n src/data/site.ts src/content.config.ts src/content/cases src/lib/locale.ts tests/unit docs/processo-v2/01-fontes-profissionais-e-conteudo.md
git commit -m "feat: add bilingual portfolio content model"
```

### Task 3: Implement the shared layout, topbar, themes, cursor, and footer

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/navigation/Topbar.astro`
- Create: `src/components/navigation/Footer.astro`
- Create: `src/components/islands/ThemeControl.tsx`
- Create: `src/components/islands/CustomCursor.tsx`
- Create: `src/lib/preferences.ts`
- Modify: `src/styles/global.css`
- Create: `tests/unit/preferences.test.ts`
- Create: `tests/e2e/layout.spec.ts`
- Create: `docs/processo-v2/02-sistema-visual-e-navegacao.md`

**Interfaces:**
- Consumes: `Locale`, `ui`, `siteConfig`.
- Produces: `<BaseLayout locale title description image>`, stored preferences `portfolio-theme` and `portfolio-locale`.

- [ ] **Step 1: Write preference and layout tests**

```ts
expect(resolveTheme('dark', false)).toBe('dark');
expect(resolveTheme(null, true)).toBe('dark');
expect(resolveTheme(null, false)).toBe('light');
```

E2E assertions: skip link works, LinkedIn link exists, theme button toggles `data-theme`, footer does not contain “processos seletivos”, and focus is visible.

- [ ] **Step 2: Verify tests fail**

Run: `npm test -- tests/unit/preferences.test.ts`

Expected: FAIL because `resolveTheme` does not exist.

- [ ] **Step 3: Implement theme persistence and no-flash bootstrap**

Implement `resolveTheme(saved: string | null, prefersDark: boolean): 'light' | 'dark'`. Add an inline head bootstrap that sets `data-theme` before paint and a React control that persists the explicit choice.

- [ ] **Step 4: Implement shared layout and topbar**

Render canonical/hreflang tags, translated metadata, skip link, translucent navigation, PT/EN route switcher, theme control, LinkedIn access, and development-only Laboratory link controlled by `PUBLIC_SHOW_LAB !== 'false'`.

- [ ] **Step 5: Implement restrained custom cursor**

Enable only for `(pointer: fine)` and when reduced motion is not requested. Preserve the native cursor on form controls, embeds, touch devices, errors, and when JavaScript is unavailable.

- [ ] **Step 6: Implement footer and verify removed copy**

Footer contains essential navigation, contact, language state, and authorship only. It must not render “Portfólio Light para processos seletivos”.

- [ ] **Step 7: Test and commit**

Run: `npm test && npm run build && npm run test:e2e -- tests/e2e/layout.spec.ts`

Expected: unit/build/E2E PASS in light/dark and keyboard paths.

```powershell
git add src/layouts src/components/navigation src/components/islands src/lib/preferences.ts src/styles tests docs/processo-v2/02-sistema-visual-e-navegacao.md
git commit -m "feat: add bilingual shell themes and navigation"
```

### Task 4: Preserve and integrate the responsive hero

**Files:**
- Create: `src/components/home/Hero.astro`
- Copy: existing approved hero assets into `public/assets/hero/`
- Modify: `src/pages/index.astro`
- Create: `src/pages/en/index.astro`
- Create: `tests/e2e/hero.spec.ts`
- Create: `docs/processo-v2/03-hero-baseline.md`

**Interfaces:**
- Consumes: `Locale`, `ui`, `siteConfig`, approved desktop/mobile hero assets.
- Produces: `<Hero locale>` with projects, curriculum, contact, and language actions.

- [ ] **Step 1: Write responsive hero E2E assertions**

Assert desktop and mobile image sources, one H1, three primary actions, explicit English action on PT, explicit Portuguese return on EN, and no horizontal overflow at 390px.

- [ ] **Step 2: Verify the test fails**

Run: `npm run test:e2e -- tests/e2e/hero.spec.ts`

Expected: FAIL because the V2 Hero is not implemented.

- [ ] **Step 3: Build the hero from the approved V1 visual baseline**

Use `<picture>` with the current high-quality mobile/desktop images, preserve accessible full job-title text, apply the new button hierarchy, and add an orchestrated first-load sequence with a reduced-motion fallback.

- [ ] **Step 4: Capture baseline evidence**

Record V1 and V2 desktop/mobile screenshots, viewport sizes, preserved qualities, and intentional changes in `03-hero-baseline.md`.

- [ ] **Step 5: Test and commit**

Run: `npm run build && npm run test:e2e -- tests/e2e/hero.spec.ts`

Expected: PASS at desktop and mobile viewports.

```powershell
git add src/components/home/Hero.astro src/pages public/assets/hero tests/e2e/hero.spec.ts docs/processo-v2/03-hero-baseline.md
git commit -m "feat: preserve and animate responsive hero"
```

### Task 5: Curate and build the bidirectional kinetic gallery

**Files:**
- Create: `scripts/inventory-gallery-assets.mjs`
- Create: `src/data/gallery.ts`
- Create: `src/components/home/KineticGallery.astro`
- Create: `public/assets/gallery/` derivatives
- Create: `tests/unit/gallery.test.ts`
- Create: `tests/e2e/gallery.spec.ts`
- Create: `docs/processo-v2/04-inventario-e-curadoria-da-galeria.md`

**Interfaces:**
- Produces: `GalleryItem { id, src, width, height, client, alt: Record<Locale,string>, href? }`; `<KineticGallery locale>`.
- Consumes: approved current-case assets plus read-only candidate sources from SERV INSPIRA/SERV TH.

- [ ] **Step 1: Write manifest validation tests**

```ts
expect(galleryItems.length).toBeGreaterThanOrEqual(12);
expect(new Set(galleryItems.map((item) => item.client)).size).toBeGreaterThanOrEqual(5);
expect(galleryItems.every((item) => item.width > 0 && item.height > 0)).toBe(true);
expect(galleryItems.every((item) => item.alt.pt && item.alt.en)).toBe(true);
```

- [ ] **Step 2: Verify the manifest test fails**

Run: `npm test -- tests/unit/gallery.test.ts`

Expected: FAIL because the curated manifest does not exist.

- [ ] **Step 3: Inventory sources without modifying them**

The script emits candidate metadata only: path, dimensions, format, file size, client inference, hash, and source root. It must skip credential/login folders and never copy automatically.

- [ ] **Step 4: Curate and create derivatives**

Choose at least 12 images across at least five clients, mixing current cases and other approved work. Copy optimized WebP/AVIF derivatives into `public/assets/gallery/` and record source, permission status, crop decision, and generated path in the documentation.

- [ ] **Step 5: Implement two continuous rows**

Use CSS transforms and duplicated presentation tracks marked `aria-hidden`; keep one semantic source list. Row one moves right, row two left, both pause on hover/focus, and both become static under reduced motion.

- [ ] **Step 6: Test performance behavior and commit**

Run: `npm test -- tests/unit/gallery.test.ts && npm run test:e2e -- tests/e2e/gallery.spec.ts && npm run build`

Expected: manifest contract PASS; opposite directions detected; reduced-motion animation is disabled; build exits 0.

```powershell
git add scripts src/data/gallery.ts src/components/home/KineticGallery.astro public/assets/gallery tests docs/processo-v2/04-inventario-e-curadoria-da-galeria.md
git commit -m "feat: add curated bidirectional art gallery"
```

### Task 6: Build concrete mini-cases and the future-case bridge

**Files:**
- Create: `src/components/home/Projects.astro`
- Create: `src/components/home/ProjectCard.astro`
- Create: `src/components/home/CasePreview.astro`
- Create: `src/components/home/FutureCaseCard.astro`
- Create: `src/pages/projetos/[slug].astro`
- Create: `src/pages/en/projects/[slug].astro`
- Create: `tests/e2e/projects.spec.ts`
- Create: `docs/processo-v2/05-revisao-dos-mini-cases.md`

**Interfaces:**
- Consumes: Astro `cases` collection ordered 1–6.
- Produces: six cards, six bilingual mini-case routes, one “Mais cases em breve” card, and one separate deep-case-portfolio bridge.

- [ ] **Step 1: Write project route tests**

Assert six project cards in the same order as V1, a seventh non-project future card, concrete role/solution/deliverables on every mini-case, PT/EN alternates, and no claim containing unsupported numeric metrics.

- [ ] **Step 2: Verify the tests fail**

Run: `npm run test:e2e -- tests/e2e/projects.spec.ts`

Expected: FAIL because project components/routes do not exist.

- [ ] **Step 3: Implement project grid and progressive disclosure**

Cards show client, title, role, deliverables, and cover. Each detail route renders context, role, solution, deliverables, factual result/output, and selected images. The home does not reintroduce the removed shortcut navigation.

- [ ] **Step 4: Implement expansion and deep-case bridge**

Render “Mais cases em breve” after the six real cases. Render a visually separate callout explaining that future deep studies document process and development; do not present the deep portfolio as already published if its URL is absent.

- [ ] **Step 5: Document copy changes**

For each case, record the previous generic copy, evidence consulted, revised copy, and any claim intentionally omitted.

- [ ] **Step 6: Test and commit**

Run: `npm run build && npm run test:e2e -- tests/e2e/projects.spec.ts`

Expected: all twelve localized project routes build and tests PASS.

```powershell
git add src/components/home src/pages/projetos src/pages/en/projects tests/e2e/projects.spec.ts docs/processo-v2/05-revisao-dos-mini-cases.md
git commit -m "feat: rebuild six portfolio mini cases"
```

### Task 7: Complete About, experience, contact, and Spotify placeholder

**Files:**
- Create: `src/components/home/About.astro`
- Create: `src/components/home/Experience.astro`
- Create: `src/components/home/Contact.astro`
- Create: `src/components/media/SpotifyPlaylist.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/en/index.astro`
- Create: `tests/e2e/profile-contact.spec.ts`
- Create: `docs/processo-v2/06-posicionamento-e-contato.md`

**Interfaces:**
- Consumes: verified `siteConfig` and bilingual professional copy.
- Produces: complete home narrative and resilient `<SpotifyPlaylist url?>`.

- [ ] **Step 1: Write contact/profile tests**

Assert no primary UX/UI/Product/developer positioning, LinkedIn/WhatsApp/curriculum links, valid external-link semantics, and an informative Spotify empty state when no playlist URL exists.

- [ ] **Step 2: Verify the tests fail**

Run: `npm run test:e2e -- tests/e2e/profile-contact.spec.ts`

Expected: FAIL because the sections are absent.

- [ ] **Step 3: Implement sections using verified sources**

Write concise PT/EN copy around graphic/digital design, campaigns, applied AI, prompt engineering, and creative automation. Mention interface experience only as complementary applied experience.

- [ ] **Step 4: Implement Spotify states**

With no URL, render “Playlist em preparação” and no iframe. With a validated `open.spotify.com` playlist URL, render a lazy-loaded embed and visible external fallback link; never promise autoplay.

- [ ] **Step 5: Test and commit**

Run: `npm run build && npm run test:e2e -- tests/e2e/profile-contact.spec.ts`

Expected: PT/EN content and all professional links PASS.

```powershell
git add src/components/home src/components/media src/pages tests/e2e/profile-contact.spec.ts docs/processo-v2/06-posicionamento-e-contato.md
git commit -m "feat: complete profile contact and spotify states"
```

### Task 8: Implement the isolated bilingual Laboratory

**Files:**
- Create: `src/data/labFeatures.ts`
- Create: `src/components/lab/LabFeature.astro`
- Create: `src/components/islands/LabControls.tsx`
- Create: `src/components/islands/ParallaxDemo.tsx`
- Create: `src/components/islands/FilterDemo.tsx`
- Create: `src/components/lab/BlogDemo.astro`
- Create: `src/components/lab/NewsletterDemo.astro`
- Create: `src/components/lab/CmsDemo.astro`
- Create: `src/components/lab/ResendDemo.astro`
- Create: `src/components/lab/ThreeDemo.astro`
- Create: `src/pages/laboratorio/index.astro`
- Create: `src/pages/en/lab/index.astro`
- Create: `tests/unit/lab-features.test.ts`
- Create: `tests/e2e/laboratory.spec.ts`
- Create: `docs/processo-v2/07-laboratorio-de-features.md`

**Interfaces:**
- Produces: `LabFeatureDefinition { id, status, title, purpose, implementation, cost, accessibility, risks }` localized in PT/EN; isolated lab routes.
- Consumes: global theme/cursor/gallery primitives; no real external services.

- [ ] **Step 1: Write Laboratory contract tests**

```ts
expect(labFeatures.map((item) => item.id)).toEqual([
  'dark-mode', 'cursor', 'spotify', 'blog', 'newsletter', 'cms',
  'resend', 'three-d', 'filters', 'carousel-variants', 'parallax'
]);
expect(labFeatures.every((item) => item.details.pt && item.details.en)).toBe(true);
```

- [ ] **Step 2: Verify the tests fail**

Run: `npm test -- tests/unit/lab-features.test.ts`

Expected: FAIL because the feature registry does not exist.

- [ ] **Step 3: Implement the registry and explanatory cards**

Each card states what the feature does, how it would be implemented, dependencies/cost, accessibility behavior, and known risk. Avoid vague marketing copy.

- [ ] **Step 4: Implement safe live demonstrations**

Theme, cursor, filters, carousel variants, and bounded parallax are interactive. Blog/CMS show local mock content. Newsletter/Resend validate locally but never send. The 3D demonstration uses a lightweight CSS/canvas object with a static fallback and does not add Three.js unless the prototype proves a real need.

- [ ] **Step 5: Keep Laboratory code out of the home payload**

Use route-level imports and client directives only on Laboratory routes. E2E verifies the home has no Laboratory island bundles other than the navigation link.

- [ ] **Step 6: Test and commit**

Run: `npm test && npm run build && npm run test:e2e -- tests/e2e/laboratory.spec.ts`

Expected: all eleven demonstrations are present in PT/EN; fake forms perform no network submission; reduced-motion mode disables intense effects.

```powershell
git add src/data/labFeatures.ts src/components/lab src/components/islands src/pages/laboratorio src/pages/en/lab tests docs/processo-v2/07-laboratorio-de-features.md
git commit -m "feat: add isolated portfolio feature laboratory"
```

### Task 9: Add development indexing policy, SEO, and full QA

**Files:**
- Create: `src/pages/robots.txt.ts`
- Create: `src/components/seo/StructuredData.astro`
- Create: `tests/e2e/seo-accessibility.spec.ts`
- Create: `scripts/check-links.mjs`
- Create: `docs/processo-v2/08-qa-e-resultados.md`
- Modify: `README-V2.md`

**Interfaces:**
- Consumes: all public routes and `siteConfig`.
- Produces: deterministic robots response, metadata/structured data, link report, final QA evidence.

- [ ] **Step 1: Write SEO and indexing tests**

Assert unique titles/descriptions, canonical/hreflang reciprocity, correct `lang`, one H1, development `noindex`, descriptive image alt text, and no broken internal links.

- [ ] **Step 2: Verify targeted tests fail**

Run: `npm run test:e2e -- tests/e2e/seo-accessibility.spec.ts`

Expected: FAIL until robots and structured metadata are complete.

- [ ] **Step 3: Implement safe indexing modes**

Default development output disallows indexing and emits `noindex`. Production indexing can only be enabled with `PUBLIC_SITE_STAGE=production` during an explicitly approved deployment.

- [ ] **Step 4: Run complete verification**

Run:

```powershell
npm test
npm run build
npm run test:e2e
node scripts/check-links.mjs dist
git status --short
git remote -v
```

Expected: unit/E2E/build/link checks PASS; remote output empty; only intentionally preserved unrelated worktree changes remain.

- [ ] **Step 5: Record measurable evidence**

Document route counts, build output, console state, link results, responsive screenshots, keyboard/reduced-motion/theme coverage, page weights, and Lighthouse values. Label any unrun check as unverified instead of estimating.

- [ ] **Step 6: Update the operator README and commit**

Document install, dev, build, test, content update, gallery update, Spotify configuration, Laboratory visibility, and the explicit no-deploy boundary.

```powershell
git add src/pages/robots.txt.ts src/components/seo tests/e2e/seo-accessibility.spec.ts scripts/check-links.mjs docs/processo-v2/08-qa-e-resultados.md README-V2.md
git commit -m "test: complete portfolio v2 quality gates"
```

### Task 10: Final integrated review without publication

**Files:**
- Modify only files required by verified defects.
- Create: `docs/processo-v2/09-revisao-integrada-e-proximos-passos.md`

**Interfaces:**
- Consumes: complete local V2.
- Produces: reviewable local build and explicit list of publication prerequisites; no deployment.

- [ ] **Step 1: Run the full suite from a clean process**

Run: `npm ci && npm test && npm run build && npm run test:e2e`

Expected: every command exits 0.

- [ ] **Step 2: Inspect representative screenshots**

Review PT/EN home and Laboratory at 390×844, 768×1024, and 1440×1000 in light/dark modes. Check image crops, typography, animation rhythm, overflow, cursor fallback, and topbar behavior.

- [ ] **Step 3: Fix only evidenced defects and rerun affected checks**

For each correction, record symptom, cause, fix, and verification command in `09-revisao-integrada-e-proximos-passos.md`.

- [ ] **Step 4: Prove production remained untouched**

Record V2 branch, empty remotes, production path status/hash without editing it, and confirm no deploy command was executed.

- [ ] **Step 5: Commit final local state**

```powershell
git add src public tests scripts docs README-V2.md package.json package-lock.json astro.config.mjs tsconfig.json vitest.config.ts playwright.config.ts
git commit -m "feat: complete local portfolio light v2"
```

- [ ] **Step 6: Hand off for Lucas review**

Provide the local preview URL, exact test results, screenshots, known limitations, the absent Spotify playlist URL, and the separate approval gate required before creating any development or production deployment.
