# Spotify Official Embed Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Trocar o player local vazio por um painel flutuante com o embed oficial da playlist de Lucas e fallback externo.

**Architecture:** O componente React continuará controlando abertura, fechamento e persistência da sessão. O áudio será responsabilidade exclusiva do iframe oficial do Spotify, sem tokens, API própria, autoplay ou controles locais falsos.

**Tech Stack:** Astro 5, React 19, TypeScript, Spotify Embed, Vitest e Playwright.

## Global Constraints

- Playlist: `2OfZT7teUPaGjHWRgGqMta`.
- O iframe deve permitir `autoplay`, `clipboard-write`, `encrypted-media`, `fullscreen` e `picture-in-picture`.
- Não forçar autoplay e não armazenar credenciais.
- Manter link externo, fechamento persistente na sessão e conteúdo PT/EN.
- Preservar a alteração não relacionada em `docs/planejamento/04-REQUISITOS-TECNICOS-E-DEPENDENCIAS.md`.

---

### Task 1: Player oficial e publicação

**Files:**
- Modify: `tests/e2e/portfolio.spec.ts`
- Modify: `src/components/islands/AmbientAudioPlayer.tsx`
- Modify: `src/components/home/AboutContact.astro`
- Modify: `src/data/site.ts`
- Modify: `src/styles/global.css`
- Modify: `docs/processo-v2/11-fechamento-home-blog-e-movimento.md`

**Interfaces:**
- Consumes: `spotifyUrl: string`, `locale: 'pt' | 'en'`.
- Produces: painel `[data-audio-player]` com `iframe[title]`, link externo e botão de fechamento.

- [ ] **Step 1: Escrever o teste de interface que exige o embed oficial**

Atualizar o teste do player para exigir um iframe com `src` contendo `/embed/playlist/2OfZT7teUPaGjHWRgGqMta`, `allow` contendo `encrypted-media`, ausência do atributo `autoplay` e funcionamento do fechamento.

- [ ] **Step 2: Executar o teste e confirmar a falha correta**

Run: `npx playwright test tests/e2e/portfolio.spec.ts --grep "official Spotify embed" --project=desktop-chromium`

Expected: FAIL porque o componente atual não renderiza iframe.

- [ ] **Step 3: Implementar o mínimo necessário**

Remover `tracks`, `<audio>` e controles locais. Derivar a URL oficial de embed a partir da configuração, renderizar o iframe com permissões completas, conservar o link externo e o fechamento via `sessionStorage`.

- [ ] **Step 4: Ajustar o CSS responsivo e a documentação do processo**

Usar painel de uma coluna, iframe com altura compacta, ações abaixo do embed e largura segura em mobile. Registrar que o Spotify controla disponibilidade de reprodução integral e volume.

- [ ] **Step 5: Verificar o ciclo verde e a regressão completa**

Run: `npx playwright test tests/e2e/portfolio.spec.ts --grep "official Spotify embed" --project=desktop-chromium`

Expected: PASS.

Run: `npm test && npm run test:e2e && npm run build`

Expected: 10 testes unitários, todos os testes de interface e quatro páginas geradas sem erros.

- [ ] **Step 6: Commit, publicação e verificação pública**

Versionar apenas arquivos da integração, atualizar a release baseada na `main`, publicar pelo workflow existente e abrir `https://oliveiralucas1807.github.io/portfolio-lucas-oliveira/` para verificar iframe, link, fechamento e console.
