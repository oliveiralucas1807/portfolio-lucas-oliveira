# Lightbox, Mobile Menu and Editorial History Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restaurar a visualização ampliada das artes, corrigir hero e navegação mobile e substituir o blog provisório por uma cronologia verificável dos projetos.

**Architecture:** Uma ilha React `CaseLightbox` controla uma única camada modal alimentada pelas imagens declaradas em `Projects.astro`; outra ilha isolada `CompactMenu` controla o submenu responsivo. O hero permanece Astro/CSS. O conteúdo editorial nasce de um inventário Markdown com fontes verificáveis e é convertido em dados bilíngues de `src/data/blog.ts`.

**Tech Stack:** Astro 5, React 19, TypeScript, CSS, Vitest, Playwright, GitHub Pages.

## Global Constraints

- Não alterar a fotografia mobile.
- Não inventar datas, resultados, métricas ou etapas.
- Preservar português, inglês, temas e redução de movimento.
- Não tocar na alteração do usuário em `docs/planejamento/04-REQUISITOS-TECNICOS-E-DEPENDENCIAS.md`.

---

### Task 1: Lightbox acessível dos cases

**Files:**
- Create: `src/components/islands/CaseLightbox.tsx`
- Modify: `src/components/home/Projects.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/en/index.astro`
- Modify: `src/styles/global.css`
- Test: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Consumes: imagens já ordenadas em `cases[].featured` e `cases[].images`.
- Produces: `CaseLightboxProps { locale: Locale; images: LightboxImage[] }` e gatilhos `[data-lightbox-id]`.

- [ ] **Step 1: Escrever testes E2E falhos**

```ts
test('opens case images in an accessible lightbox', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-lightbox-id]').first().click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('[data-lightbox-counter]')).toContainText('2');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toBeHidden();
});
```

- [ ] **Step 2: Rodar o teste e confirmar falha por ausência do dialog**

Run: `npm run test:e2e -- tests/e2e/portfolio.spec.ts -g "accessible lightbox"`
Expected: FAIL porque `role=dialog` não existe.

- [ ] **Step 3: Implementar modal, navegação, foco, scroll lock e swipe**

```tsx
export type LightboxImage = { id: string; src: string; alt: string; client: string };
export default function CaseLightbox({ locale, images }: { locale: Locale; images: LightboxImage[] }) {
  // Ouve os gatilhos declarativos, abre pelo id e navega pela lista do mesmo case.
}
```

- [ ] **Step 4: Rodar teste focal e suíte E2E**

Run: `npm run test:e2e -- tests/e2e/portfolio.spec.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src tests/e2e/portfolio.spec.ts
git commit -m "feat: adiciona lightbox acessivel aos cases"
```

### Task 2: Hero e menu compacto responsivos

**Files:**
- Create: `src/components/islands/CompactMenu.tsx`
- Modify: `src/components/navigation/Topbar.astro`
- Modify: `src/styles/global.css`
- Test: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Consumes: âncoras localizadas de trabalhos e sobre.
- Produces: botão `[data-compact-menu-trigger]`, painel `[data-compact-menu]` e estados ARIA.

- [ ] **Step 1: Escrever testes falhos para menu e composição mobile**

```ts
test('compact menu exposes work and about on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('[data-compact-menu-trigger]').click();
  await expect(page.locator('[data-compact-menu]')).toContainText('TRABALHOS');
  await expect(page.locator('[data-compact-menu]')).toContainText('SOBRE');
});
```

- [ ] **Step 2: Confirmar falha por ausência do trigger**

Run: `npm run test:e2e -- tests/e2e/portfolio.spec.ts -g "compact menu"`
Expected: FAIL.

- [ ] **Step 3: Implementar menu e tokens mobile do hero**

```tsx
export default function CompactMenu({ locale }: { locale: Locale }) {
  // Controla abertura, clique externo, Escape e aria-expanded.
}
```

CSS obrigatório: kicker a `70%` da escala atual; copy acima do rosto; gradiente inferior; pulso branco apenas no tema escuro e com `prefers-reduced-motion` respeitado.

- [ ] **Step 4: Validar 360, 390, 430, 768 e 1440 pixels**

Run: `npm run test:e2e -- tests/e2e/portfolio.spec.ts`
Expected: PASS sem overflow horizontal.

- [ ] **Step 5: Commit**

```bash
git add src tests/e2e/portfolio.spec.ts
git commit -m "feat: refina hero e navegacao mobile"
```

### Task 3: Inventário histórico e conteúdo real do blog

**Files:**
- Create: `docs/processo-v2/15-inventario-editorial-e-linha-do-tempo.md`
- Create: `docs/cases/portfolio-v1-dossie.md`
- Create: `docs/cases/linkedin-e-reposicionamento-dossie.md`
- Create: `docs/cases/portfolio-v2-dossie.md`
- Modify: `src/data/blog.ts`
- Test: `tests/unit/content-contract.test.ts`
- Test: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Consumes: datas e evidências de conversas, Git, documentos e notas canônicas.
- Produces: entradas `BlogEntry` bilíngues com `date`, `title`, `summary`, `body`, `images` e referência documental.

- [ ] **Step 1: Inventariar fontes por busca dirigida**

Pesquisar conversas por `portfolio`, `LinkedIn`, `dashboard financeiro`, `Mivybook` e `Hermes`; cruzar cada marco com commits, arquivos ou notas. Registrar lacunas explicitamente.

- [ ] **Step 2: Escrever teste falho que rejeita conteúdo provisório**

```ts
test('blog uses sourced portfolio milestones instead of placeholders', () => {
  expect(blogEntries.pt.length).toBeGreaterThanOrEqual(5);
  expect(JSON.stringify(blogEntries)).not.toContain('exemplo');
  expect(blogEntries.pt.every((entry) => entry.date && entry.sourceRef)).toBe(true);
});
```

- [ ] **Step 3: Confirmar falha pelo contrato editorial ausente**

Run: `npm run test:unit -- tests/unit/content-contract.test.ts`
Expected: FAIL em `sourceRef` ou quantidade de marcos.

- [ ] **Step 4: Escrever inventário, três dossiês e entradas do blog**

Usar somente eventos confirmados. Projetos não concluídos aparecem na seção de candidatos, não como resultados finalizados.

- [ ] **Step 5: Rodar testes unitários e E2E do blog**

Run: `npm run test:unit && npm run test:e2e -- tests/e2e/portfolio.spec.ts`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add docs/processo-v2 docs/cases src/data/blog.ts tests
git commit -m "feat: transforma historico do portfolio em linha editorial"
```

### Task 4: Verificação, publicação e prova pública

**Files:**
- Modify: `docs/processo-v2/16-qa-lightbox-mobile-e-blog.md`

**Interfaces:**
- Consumes: build validado das tarefas anteriores.
- Produces: build estático publicado e evidências desktop/mobile.

- [ ] **Step 1: Rodar verificação completa**

Run: `npm run test:unit && npm run test:e2e && npm run check && npm run build`
Expected: zero falhas e build das quatro rotas.

- [ ] **Step 2: Revisar visualmente desktop e mobile**

Capturar 1440×1000 e 390×844 em claro e escuro. Confirmar rosto livre, menu, lightbox, blog e ausência de overflow.

- [ ] **Step 3: Documentar QA e publicar**

Gerar build com `DEPLOY_BASE=/portfolio-lucas-oliveira`, atualizar branches de release e `gh-pages` e acompanhar o Pages.

- [ ] **Step 4: Validar o endereço público**

Abrir `https://oliveiralucas1807.github.io/portfolio-lucas-oliveira/` com cache-bust e repetir smoke test do lightbox, menu mobile, blog, temas e Spotify.

- [ ] **Step 5: Commit de documentação final**

```bash
git add docs/processo-v2/16-qa-lightbox-mobile-e-blog.md
git commit -m "docs: registra qa do lightbox e mobile"
```
