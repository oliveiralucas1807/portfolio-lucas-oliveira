# Galerias Sem Repetição Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remover das galerias expandidas qualquer arte já usada entre os três destaques, mantendo a quantidade atual de imagens em cada case.

**Architecture:** A montagem do case impedirá por contrato que um destaque entre no grid. Um inventário visual por cliente determinará as substituições, usando somente peças do próprio cliente e preservando os três destaques.

**Tech Stack:** Astro 7, TypeScript 6, JSON, Vitest, Playwright, GitHub Pages.

## Global Constraints

- Auditar Coimbra, Taco Libre, Natura, Cultura Inglesa, Ótica Murano e La Pizza.
- Não alterar as três imagens de destaque.
- Manter exatamente a quantidade atual de imagens em cada galeria.
- Detectar arquivos iguais e duplicações visuais com nomes, dimensões ou recortes diferentes.
- Usar somente peças do cliente correspondente.

---

### Task 1: Criar o contrato automatizado de exclusão dos destaques

**Files:**
- Modify: `tests/unit/gallery.test.ts`
- Modify: `src/data/cases.ts`

**Interfaces:**
- Consumes: `featured: CaseImage[]` e `gallery: CaseImage[]` de cada case.
- Produces: galerias sem caminhos de destaque e contagens preservadas.

- [ ] **Step 1: Escrever teste que percorre os seis cases**

O teste deve afirmar que nenhum `featured.src` aparece em `gallery`, que os caminhos da galeria são únicos e que a contagem esperada permanece igual à contagem anterior registrada por case.

- [ ] **Step 2: Executar o teste e confirmar a falha**

```powershell
npm test -- tests/unit/gallery.test.ts
```

Resultado esperado: falha indicando destaques atualmente repetidos nas galerias.

- [ ] **Step 3: Generalizar a montagem da galeria**

Substituir a exceção específica de `otica-murano` por filtragem comum baseada no conjunto de caminhos das três imagens em destaque.

- [ ] **Step 4: Executar o teste de contrato**

```powershell
npm test -- tests/unit/gallery.test.ts
```

Resultado esperado nesta etapa: nenhuma repetição por caminho; eventuais falhas de contagem apontam quantas peças substitutas são necessárias.

### Task 2: Auditar visualmente e substituir as repetições

**Files:**
- Modify: `data/cases.json`
- Add: arquivos otimizados sob a pasta pública de cada cliente já usada pelo projeto.
- Create: `docs/cases/2026-08-07-auditoria-galerias.md`

**Interfaces:**
- Consumes: inventário de destaques, grid atual e pastas-fonte de cada cliente.
- Produces: lista documentada `case → repetição → substituição` e galerias completas.

- [ ] **Step 1: Gerar inventário técnico**

Listar para cada case os três caminhos de destaque, os caminhos da galeria e todas as colisões exatas.

- [ ] **Step 2: Fazer comparação visual**

Renderizar miniaturas em folhas de contato por cliente e marcar exportações visualmente equivalentes, mesmo quando seus arquivos forem diferentes.

- [ ] **Step 3: Selecionar substitutos**

Pesquisar de forma direcionada nas pastas do cliente. Escolher uma peça distinta para cada repetição e registrar origem, destino e tema no documento de auditoria.

- [ ] **Step 4: Otimizar e incorporar os arquivos**

Exportar os substitutos no formato e na qualidade já praticados pelo projeto, copiar para a pasta pública correta e atualizar somente as entradas necessárias em `data/cases.json`.

- [ ] **Step 5: Confirmar contagens e identidade do cliente**

Executar o teste de galeria. Resultado esperado: seis cases aprovados, nenhum destaque no grid, nenhum caminho duplicado e contagens originais preservadas.

- [ ] **Step 6: Commit**

```powershell
git add -- data/cases.json src/data/cases.ts tests/unit/gallery.test.ts docs/cases/2026-08-07-auditoria-galerias.md public
git commit -m "fix: replace repeated artwork in case galleries"
```

### Task 3: Validar interface e publicação

**Files:**
- Test: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Consumes: dados e arquivos finais das galerias.
- Produces: build validado e publicação conferida em desktop e mobile.

- [ ] **Step 1: Rodar testes e build**

```powershell
npm test
npm run build
npm run test:e2e
```

Resultado esperado: todos os comandos terminam com código 0.

- [ ] **Step 2: Inspecionar os seis cases localmente**

Abrir e fechar “Explorar projeto” em desktop e mobile, confirmar os três destaques intactos e comparar visualmente cada grid.

- [ ] **Step 3: Publicar pelo fluxo de release existente**

Promover o build somente depois de verificar branch, destino `gh-pages` e diferenças que serão publicadas.

- [ ] **Step 4: Conferir o endereço público**

Abrir a URL real com cache renovado e repetir a inspeção dos seis cases. Resultado esperado: nenhuma arte de destaque reaparece no grid e todas as galerias conservam sua quantidade anterior.
