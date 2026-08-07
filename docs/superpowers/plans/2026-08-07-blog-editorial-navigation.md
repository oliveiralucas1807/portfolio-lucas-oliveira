# Blog Editorial Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ordenar e navegar o blog por temas, melhorar suas evidências visuais e preparar a revisão editorial semanal.

**Architecture:** `src/data/blog.ts` passa a declarar data ISO e temas. `BlogIndex.astro` ordena uma cópia dos posts, deriva o post mais recente por tema e expõe âncoras. O lightbox existente será reutilizado com um conjunto de imagens próprio do blog.

**Tech Stack:** Astro, TypeScript, React island existente, CSS, Vitest, Playwright e Codex Automations.

## Global Constraints

- Dashboard financeiro fica oculto enquanto não houver publicação real.
- Zero a seis imagens pertinentes por publicação.
- Nenhuma publicação automática; revisão humana obrigatória.
- Desktop e conteúdo já aprovado do hero não podem regredir.

---

### Task 1: Contrato editorial e ordenação

**Files:**
- Modify: `src/data/blog.ts`
- Modify: `src/components/blog/BlogIndex.astro`
- Modify: `tests/unit/content-contract.test.ts`
- Modify: `tests/e2e/portfolio.spec.ts`

- [ ] Escrever testes que exijam `dateISO`, ordem decrescente, temas válidos e no máximo seis imagens.
- [ ] Rodar `npm test` e confirmar falha do contrato novo.
- [ ] Adicionar `dateISO` e `topics` aos oito posts e ordenar uma cópia em `BlogIndex.astro`.
- [ ] Rodar `npm test` e confirmar aprovação.
- [ ] Commitar o contrato editorial.

### Task 2: Atalhos temáticos

**Files:**
- Modify: `src/components/blog/BlogIndex.astro`
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`

- [ ] Criar teste para quatro atalhos, ausência de Dashboard financeiro e destino na publicação mais recente do tema.
- [ ] Implementar derivação do primeiro post de cada tema após a ordenação.
- [ ] Renderizar a faixa laranja, rolável no mobile e com foco visível.
- [ ] Executar Playwright no desktop e mobile.
- [ ] Commitar a navegação temática.

### Task 3: Evidências e lightbox do blog

**Files:**
- Modify: `src/components/blog/BlogIndex.astro`
- Modify: `src/components/islands/CaseLightbox.tsx`
- Modify: `src/pages/blog/index.astro`
- Modify: `src/pages/en/blog/index.astro`
- Modify: `tests/e2e/portfolio.spec.ts`

- [ ] Criar teste que abre uma imagem do blog, navega e fecha o visualizador.
- [ ] Transformar imagens em botões com `data-lightbox-id` e grupo por slug.
- [ ] Montar o island com as imagens localizadas do blog e rótulo neutro de visualizador.
- [ ] Remover imagens decorativas dos posts sem evidência pertinente nesta etapa, permitindo lista vazia.
- [ ] Rodar Playwright e build.
- [ ] Commitar o lightbox editorial.

### Task 4: CTAs mobile na mesma linha

**Files:**
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/portfolio.spec.ts`

- [ ] Medir os três CTAs em 360 px e escrever teste de mesma coordenada Y.
- [ ] Aplicar redução adicional de 10% em fonte e padding apenas se o teste falhar.
- [ ] Confirmar ausência de overflow horizontal e manter alvos clicáveis legíveis.
- [ ] Commitar o refinamento mobile.

### Task 5: Automação e memória durável

**Files:**
- Create: `C:/Users/prov1/Documents/Obsidian-Codex/04_Automations/runbook-revisao-editorial-semanal-portfolio.md`

- [ ] Registrar fontes, critérios, formato de saída e fronteiras de publicação no runbook.
- [ ] Criar automação semanal às segundas, 11:00, America/Manaus.
- [ ] Incluir no relatório seções Blog, candidato a case e candidato a LinkedIn.
- [ ] Verificar a configuração salva da automação.

### Task 6: Publicação e prova

**Files:**
- Modify: `docs/processo-v2/16-qa-lightbox-mobile-e-blog.md`

- [ ] Executar `npm test`, `npm run test:e2e`, `npm run build` e `git diff --check`.
- [ ] Propagar os commits às branches canônica e de release.
- [ ] Publicar `dist` em `gh-pages`.
- [ ] Medir ordem, atalhos, lightbox e CTAs na URL pública.
