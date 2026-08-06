# Topbar Cases and Blog Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refinar navegação, geometria, card editorial, modal, áudio e conteúdo expansível do blog.

**Architecture:** Astro renderiza conteúdo e detalhes sem novas rotas; React permanece responsável apenas por movimento, modal e áudio. CSS centraliza a navegação e compartilha a geometria visual.

**Tech Stack:** Astro, React, TypeScript, CSS, Vitest e Playwright.

## Global Constraints

- Não publicar.
- Não usar travessões na copy.
- Preservar português, inglês, acessibilidade e movimento reduzido.
- Não prometer reprodução local sem arquivos autorizados.

---

### Task 1: Navegação e hero

**Files:** `src/i18n/config.ts`, `src/components/navigation/Topbar.astro`, `src/components/ui/Icon.astro`, `src/components/home/Hero.astro`, `src/styles/global.css`, `tests/e2e/portfolio.spec.ts`.

- [ ] Escrever testes para labels, ícone de idioma e hero.
- [ ] Implementar caixa alta, “O QUE HÁ DE NOVO”, bandeira monocromática e centralização absoluta do grupo.
- [ ] Validar desktop e mobile.

### Task 2: Geometria e card final

**Files:** `src/i18n/config.ts`, `src/components/home/Projects.astro`, `src/styles/global.css`, `tests/unit/content-contract.test.ts`, `tests/e2e/portfolio.spec.ts`.

- [ ] Escrever testes para “Cases”, título sem ponto e card sem “E”.
- [ ] Inclinar a galeria cinética em `-3deg` e ajustar margens contra overflow.
- [ ] Reorganizar círculo, símbolo `+` e texto leve.

### Task 3: Modal e áudio

**Files:** `src/components/islands/PortfolioModal.tsx`, `src/components/islands/AmbientAudioPlayer.tsx`, `tests/e2e/portfolio.spec.ts`.

- [ ] Tornar LinkedIn sólido e laranja no modal.
- [ ] Renomear player para “Playlist do Lucas” e explicar que a audição integral abre no Spotify.
- [ ] Manter controles locais desabilitados enquanto a lista estiver vazia.

### Task 4: Miniartigos do blog

**Files:** `src/data/blog.ts`, `src/components/blog/BlogIndex.astro`, `src/styles/global.css`, `tests/e2e/portfolio.spec.ts`.

- [ ] Adicionar corpo e imagens aos três posts.
- [ ] Renderizar `details/summary` com “Ver mais detalhes”.
- [ ] Animar abertura, validar imagens, mobile e teclado.

### Task 5: Verificação e documentação

**Files:** `docs/processo-v2/12-refino-topbar-cases-e-blog.md`, screenshots finais.

- [ ] Rodar testes unitários, build, Playwright e verificador de links.
- [ ] Capturar e inspecionar home, modal e blog.
- [ ] Preservar o arquivo preexistente do usuário fora do commit.

