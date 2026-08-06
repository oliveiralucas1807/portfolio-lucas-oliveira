# Ajuste de Ícones, Respiro e Movimento Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplificar o card futuro, padronizar contatos e refinar movimento e transição entre hero e carrossel.

**Architecture:** As mudanças permanecem nos componentes existentes. O componente compartilhado de ícones recebe os paths aprovados; o modal React replica esses paths; marcação e CSS cuidam do conteúdo, parallax e espaçamento.

**Tech Stack:** Astro, React, TypeScript, CSS, Vitest e Playwright.

## Global Constraints

- Manter a inclinação do carrossel em `-3deg`.
- Não adicionar dependências.
- Preservar temas, idiomas, acessibilidade e redução de movimento.
- Não publicar nem alterar o portfólio atual.

---

### Task 1: Contratos visuais

**Files:**
- Modify: `tests/e2e/portfolio.spec.ts`
- Modify: `tests/unit/content-contract.test.ts`

- [ ] Registrar a ausência da tagline, o atributo de parallax no blog e os paths oficiais dos ícones.
- [ ] Executar `npm test` e confirmar que o novo contrato falha antes da implementação.

### Task 2: Conteúdo e ícones

**Files:**
- Modify: `src/components/home/Projects.astro`
- Modify: `src/components/navigation/Topbar.astro`
- Modify: `src/components/ui/Icon.astro`
- Modify: `src/components/islands/PortfolioModal.tsx`

- [ ] Remover a tagline do card futuro.
- [ ] Adicionar `data-parallax` ao link do blog.
- [ ] Substituir os desenhos de e-mail e WhatsApp pelos SVGs fornecidos, normalizados para `currentColor`.
- [ ] Executar `npm test`.

### Task 3: Ritmo da transição

**Files:**
- Modify: `src/styles/global.css`

- [ ] Reduzir em aproximadamente 35% o espaço superior útil da seção cinética em desktop e mobile.
- [ ] Confirmar que a inclinação continua em `-3deg`.
- [ ] Executar `npm run test:e2e` e `npm run build`.

### Task 4: Evidências e documentação

**Files:**
- Create: `docs/processo-v2/13-ajuste-icons-respiro-motion.md`
- Update: `docs/processo-v2/screenshots/diagonal-home-desktop-final.webp`
- Update: `docs/processo-v2/screenshots/diagonal-home-mobile-final.webp`

- [ ] Capturar desktop e mobile e revisar visualmente a junção.
- [ ] Registrar decisões, fontes dos SVGs e resultados de QA.
- [ ] Executar `git diff --check` e salvar um commit dedicado.
