# Portfolio V2 Closing Home and Blog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidar a home do Portfólio V2, criar o blog localizado e substituir experimentos provisórios por componentes finais verificáveis.

**Architecture:** Astro mantém páginas e conteúdo estático; ilhas React pequenas controlam animações, parallax e áudio. Dados de cases e blog permanecem locais e tipados, sem CMS ou dependências de animação.

**Tech Stack:** Astro 7, React 19, TypeScript, CSS, Vitest e Playwright.

## Global Constraints

- Não publicar nem modificar o portfólio atual.
- Preservar português e inglês.
- Não usar travessões na copy da interface.
- Respeitar `prefers-reduced-motion` e navegação por teclado.
- Não simular streaming integral do Spotify.

---

### Task 1: Contratos de conteúdo e navegação

**Files:**
- Modify: `src/i18n/config.ts`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/components/navigation/Topbar.astro`
- Modify: `tests/unit/locale.test.ts`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:** Produz rotas localizadas `blog` em `localeMeta` e remove `lab` da navegação pública.

- [ ] Escrever testes para Blog na topbar e equivalência `/blog/` e `/en/blog/`.
- [ ] Confirmar que os testes falham com a navegação atual.
- [ ] Implementar rotas e remover o link Laboratório.
- [ ] Executar testes unitários e E2E direcionados.

### Task 2: Galerias completas e card editorial

**Files:**
- Modify: `src/components/home/Projects.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/unit/content-contract.test.ts`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:** Cada `.project-gallery` produz 22 imagens e um `.project-gallery-more`.

- [ ] Escrever testes para contagem e card final.
- [ ] Confirmar falha no estado atual.
- [ ] Selecionar 22 imagens únicas por case, evitando repetir as três capas.
- [ ] Remover a borda do summary e implementar o card editorial.
- [ ] Adicionar entrada escalonada ao abrir a galeria.

### Task 3: Sistema de movimento

**Files:**
- Create: `src/components/islands/MotionLayer.tsx`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:** `MotionLayer` observa `[data-reveal]` e `[data-parallax]`, aplicando classes e variáveis CSS.

- [ ] Escrever teste para revelação e fallback de movimento reduzido.
- [ ] Implementar `IntersectionObserver` e microparallax limitado.
- [ ] Marcar seções, cards, controles e imagens interativas.
- [ ] Verificar que o movimento não cria overflow horizontal.

### Task 4: Sobre, retrato e iconografia

**Files:**
- Create: `public-site/assets/about/lucas-oliveira-retrato.webp`
- Modify: `src/components/home/AboutContact.astro`
- Modify: `src/components/ui/Icon.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:** `Icon` aceita nomes semânticos para seis habilidades e três contatos sólidos.

- [ ] Otimizar a fotografia fornecida para WebP.
- [ ] Escrever teste para imagem, chapéu e seis ícones distintos.
- [ ] Reestruturar cabeçalho do Sobre e equalizar as colunas.
- [ ] Implementar ícones sólidos legíveis em tamanho reduzido.

### Task 5: Blog localizado

**Files:**
- Create: `src/data/blog.ts`
- Create: `src/components/blog/BlogIndex.astro`
- Create: `src/pages/blog/index.astro`
- Create: `src/pages/en/blog/index.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:** `blogPosts` expõe título, resumo, data, categoria e estado localizados.

- [ ] Escrever testes para as duas rotas e conteúdo principal.
- [ ] Criar três entradas editoriais, uma publicada e duas em preparação.
- [ ] Construir a página com hierarquia editorial coerente com a home.
- [ ] Validar alternância de idioma e links internos.

### Task 6: Player próprio preparado

**Files:**
- Replace: `src/components/islands/FloatingSpotify.tsx` por `src/components/islands/AmbientAudioPlayer.tsx`
- Modify: `src/components/home/AboutContact.astro`
- Modify: `src/data/site.ts`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:** `AmbientAudioPlayer` recebe lista de faixas locais, inicia com volume `0.18` e apresenta link externo do Spotify quando a lista estiver vazia.

- [ ] Escrever teste para estado vazio honesto e volume inicial contratual.
- [ ] Implementar controles de reprodução, pausa, próxima faixa e volume.
- [ ] Remover o iframe do Spotify.
- [ ] Garantir que o estado vazio não cubra CTAs no mobile.

### Task 7: Geometria final e remoção do Laboratório

**Files:**
- Modify: `src/styles/global.css`
- Delete: `src/pages/laboratorio/index.astro`
- Delete: `src/pages/en/lab/index.astro`
- Modify: `tests/unit/lab-features.test.ts`
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:** Um token CSS de inclinação governa hero, carrosséis e entrada dos projetos.

- [ ] Reduzir topbar para aproximadamente 740px.
- [ ] Unificar os três cortes diagonais com o mesmo token.
- [ ] Remover rotas e testes do Laboratório.
- [ ] Validar screenshots desktop e mobile contra as referências fornecidas.

### Task 8: Documentação e gate final

**Files:**
- Create: `docs/processo-v2/11-fechamento-home-blog-e-movimento.md`
- Modify: `docs/processo-v2/08-qa-e-resultados.md`

**Interfaces:** Registra decisões, limitações de áudio, evidências e próximos passos.

- [ ] Executar `npm test` com zero falhas.
- [ ] Executar `npm run build` com zero diagnósticos.
- [ ] Executar `npm run test:e2e` com todos os cenários aprovados.
- [ ] Executar `node scripts/check-links.mjs dist` sem referências quebradas.
- [ ] Capturar e inspecionar screenshots desktop e mobile.
- [ ] Commitar somente arquivos desta rodada, preservando alterações preexistentes do usuário.

