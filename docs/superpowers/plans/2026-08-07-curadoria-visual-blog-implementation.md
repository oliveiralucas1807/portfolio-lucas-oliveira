# Curadoria Visual do Blog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar evidências visuais relevantes para as oito atualizações do blog, removendo o uso de imagens genéricas ou desatualizadas.

**Architecture:** Cada publicação receberá um conjunto independente de zero a seis imagens em `public-site/assets/blog/<slug>/`. `src/data/blog.ts` continuará como fonte dos metadados, e o lightbox existente será reutilizado sem mudanças arquiteturais.

**Tech Stack:** Astro 7, TypeScript 6, WebP, Vitest, Playwright e GitHub Pages.

## Global Constraints

- Priorizar screenshot ou registro real do processo.
- Não usar imagens apenas para preencher espaço.
- Não publicar credenciais, mensagens privadas, tokens ou informações de sessão.
- Não inventar telas, métricas ou estados de projetos.
- Usar de zero a seis imagens por publicação.
- Imagem criada deve ser último recurso e explicar um tema abstrato.

---

### Task 1: Inventariar evidências e criar o contrato editorial

**Files:**
- Create: `docs/processo-v2/17-inventario-imagens-blog.md`
- Modify: `tests/unit/content-contract.test.ts`

**Interfaces:**
- Consumes: os oito `slug` definidos em `src/data/blog.ts` e suas referências `sourceRef`.
- Produces: matriz `slug → fontes → imagens escolhidas → tratamento → justificativa`.

- [ ] **Step 1: Registrar o estado atual**

Documentar que os cinco primeiros artigos não possuem imagens e que os três últimos reutilizam `foto-lucas-desktop.webp` e `mivybook-destaque.webp`.

- [ ] **Step 2: Localizar evidências por artigo**

Pesquisar somente nas fontes indicadas pelo respectivo `sourceRef`, nos repositórios V1/V2, no relatório Hermes, no dossiê Mivybook e nos screenshots já fornecidos por Lucas.

- [ ] **Step 3: Registrar a decisão de cada imagem**

Para cada arquivo, registrar caminho original, assunto demonstrado, recorte ou sanitização necessária e artigo de destino. Registrar explicitamente “sem imagem” quando não existir evidência adequada.

- [ ] **Step 4: Escrever o teste editorial**

O teste deve validar: máximo de seis imagens, caminhos restritos a `/assets/blog/`, textos alternativos bilíngues e ausência das imagens genéricas `foto-lucas-desktop.webp`, `mivybook-destaque.webp` e qualquer arte de case não documentada.

- [ ] **Step 5: Executar o teste e confirmar a falha**

```powershell
npm test -- tests/unit/content-contract.test.ts
```

Resultado esperado: falha nos artigos que ainda reutilizam imagens genéricas.

### Task 2: Preparar evidências visuais reais

**Files:**
- Create: `public-site/assets/blog/primeiro-link-publico/*.webp`
- Create: `public-site/assets/blog/refino-mobile-v1/*.webp`
- Create: `public-site/assets/blog/auditoria-e-novo-posicionamento/*.webp`
- Create: `public-site/assets/blog/hermes-como-candidato-a-case/*.webp`
- Create: `public-site/assets/blog/mivybook-bancada-de-acabamento/*.webp`
- Create: `public-site/assets/blog/fundacao-da-v2/*.webp`
- Create: `public-site/assets/blog/critica-visual-em-ciclos/*.webp`
- Create: `public-site/assets/blog/publicacao-recuperacao-e-spotify/*.webp`

**Interfaces:**
- Consumes: inventário aprovado da Task 1.
- Produces: arquivos WebP sanitizados e rastreáveis.

- [ ] **Step 1: Capturar ou copiar os registros selecionados**

Usar capturas de telas locais ou públicas apenas quando elas demonstrarem o evento descrito no artigo.

- [ ] **Step 2: Sanitizar as capturas**

Recortar barras, notificações e áreas irrelevantes. Ocultar dados privados sem cobrir a evidência principal.

- [ ] **Step 3: Otimizar para web**

Converter para WebP, preservar leitura em lightbox e evitar arquivos originais excessivamente pesados.

- [ ] **Step 4: Conferir visualmente cada derivado**

Abrir os arquivos finais e comparar com o inventário. Rejeitar imagens deformadas, ilegíveis ou desconectadas do texto.

### Task 3: Conectar as imagens às publicações

**Files:**
- Modify: `src/data/blog.ts`
- Test: `tests/unit/content-contract.test.ts`

**Interfaces:**
- Consumes: arquivos finais da Task 2.
- Produces: arrays `images` com `src` e `alt` em português e inglês.

- [ ] **Step 1: Substituir os arrays de imagens**

Remover as constantes genéricas `hero` e `movingGallery` e declarar cada caminho sob `/assets/blog/<slug>/` diretamente no artigo correspondente.

- [ ] **Step 2: Escrever textos alternativos objetivos**

Cada texto alternativo deve identificar o registro e a função dele no artigo, sem repetir o título da publicação.

- [ ] **Step 3: Executar o contrato editorial**

```powershell
npm test -- tests/unit/content-contract.test.ts
```

Resultado esperado: todos os testes aprovados.

- [ ] **Step 4: Commit**

```powershell
git add -- src/data/blog.ts tests/unit/content-contract.test.ts public-site/assets/blog docs/processo-v2/17-inventario-imagens-blog.md
git commit -m "feat: curate evidence-based imagery for portfolio blog"
```

### Task 4: Validar e publicar

**Files:**
- Test: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Consumes: blog e arquivos finais.
- Produces: versão pública verificada em desktop e mobile.

- [ ] **Step 1: Validar testes, tipos e build**

```powershell
npm test
npm run build
npm run test:e2e
```

Resultado esperado: código 0 nos três comandos.

- [ ] **Step 2: Conferir o lightbox localmente**

Abrir cada artigo, verificar carregamento, ordem, legenda e navegação das imagens em desktop e mobile.

- [ ] **Step 3: Promover para a branch de release**

Integrar o commit na branch `release/spotify-embed`, gerar o build com `DEPLOY_BASE=/portfolio-lucas-oliveira` e copiar o resultado para a worktree `gh-pages`.

- [ ] **Step 4: Publicar e verificar ao vivo**

Enviar source e `gh-pages`, aguardar o GitHub Pages servir os novos arquivos e confirmar que cada URL retorna HTTP 200 e abre no lightbox público.
