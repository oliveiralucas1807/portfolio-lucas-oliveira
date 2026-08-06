# Bandeiras no Seletor de Idioma Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Trocar o ícone abstrato do seletor pelos SVGs de destino aprovados.

**Architecture:** Os SVGs ficam em `public-site/assets/icons`, diretório público configurado no Astro. A topbar escolhe o asset a partir da localidade atual e mantém toda a navegação existente.

**Tech Stack:** Astro, CSS, Playwright e Vitest.

## Global Constraints

- Estados Unidos em PT e Brasil em EN.
- Manter parallax, acessibilidade e botão circular.
- Não adicionar dependências ou publicar.

---

### Task 1: Contrato e assets

**Files:**
- Create: `public-site/assets/icons/idioma-estados-unidos.svg`
- Create: `public-site/assets/icons/idioma-brasil.svg`
- Modify: `tests/e2e/portfolio.spec.ts`

- [ ] Registrar em Playwright os assets esperados em PT e EN.
- [ ] Incorporar cópias exatas dos SVGs fornecidos.

### Task 2: Topbar e validação

**Files:**
- Modify: `src/components/navigation/Topbar.astro`
- Modify: `src/styles/global.css`
- Create: `docs/processo-v2/14-bandeiras-seletor-idioma.md`

- [ ] Renderizar o asset de destino na topbar.
- [ ] Ajustar o recorte da imagem dentro do botão circular.
- [ ] Executar `npm test`, `npm run build` e `npm run test:e2e`.
- [ ] Revisar visualmente e salvar o commit.
