# Atualizações de QA e Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar duas atualizações bilíngues no blog: QA pós-deploy em dispositivo real e dashboard financeiro em construção.

**Architecture:** Os dois marcos serão adicionados ao array tipado existente em `src/data/blog.ts`. O artigo de QA receberá evidências WebP próprias; o artigo financeiro permanecerá sem imagens e será protegido por testes de privacidade e posicionamento.

**Tech Stack:** Astro, TypeScript, Vitest, Playwright, ffmpeg, GitHub Pages.

## Global Constraints

- Não publicar valores, contas, dívidas, instituições, movimentações, banco de dados ou endereço privado do dashboard financeiro.
- Não apresentar Lucas como UX/UI/Product Designer ou desenvolvedor profissional.
- Não usar travessões editoriais.
- O dashboard deve ser apresentado como projeto em construção, não como produto ou case concluído.
- O artigo financeiro usa `images: []`.
- O artigo de QA usa no máximo seis evidências diretamente relacionadas.
- Preservar todos os artigos, filtros e ativos atuais.
- A implementação parte de `D:\portfolio site git hub online\portfolio-v2-release-spotify` para não regredir a release publicada.

---

### Task 1: Contratos editoriais dos dois artigos

**Files:**
- Modify: `tests/unit/content-contract.test.ts`
- Test: `tests/unit/content-contract.test.ts`

**Interfaces:**
- Consumes: `blogPosts: BlogPost[]` de `src/data/blog.ts`.
- Produces: contrato para os slugs `qa-pos-deploy-dispositivo-real` e `dashboard-financeiro-em-construcao`.

- [ ] **Step 1: Escrever os testes que falham**

Adicionar ao bloco `describe('editorial timeline')`:

```ts
it('adds the approved post-deploy QA and dashboard progress milestones', () => {
  const qa = blogPosts.find((post) => post.slug === 'qa-pos-deploy-dispositivo-real');
  const dashboard = blogPosts.find((post) => post.slug === 'dashboard-financeiro-em-construcao');

  expect(qa).toMatchObject({ dateISO: '2026-08-07', topics: ['portfolio'] });
  expect(qa?.images.length).toBeGreaterThanOrEqual(3);
  expect(qa?.images.length).toBeLessThanOrEqual(6);
  expect(dashboard).toMatchObject({ dateISO: '2026-08-10', topics: ['creative-workbench', 'applied-ai'], images: [] });
});

it('keeps the dashboard progress article free from personal financial data', () => {
  const dashboard = blogPosts.find((post) => post.slug === 'dashboard-financeiro-em-construcao');
  const copy = JSON.stringify(dashboard);

  expect(copy).not.toMatch(/R\$|Inter|PicPay|Mercado Pago|InfinitePay|Tailscale|tailnet|\.db|sqlite/i);
  expect(copy).not.toContain('—');
  expect(copy).toContain('em construção');
});
```

- [ ] **Step 2: Executar o teste e confirmar falha**

Run: `npm test -- --run tests/unit/content-contract.test.ts`

Expected: FAIL porque os dois slugs ainda não existem.

- [ ] **Step 3: Commitar o contrato vermelho**

```powershell
git add -- tests/unit/content-contract.test.ts
git commit -m "test: define QA and dashboard editorial milestones"
```

---

### Task 2: Evidências visuais seguras do QA mobile

**Files:**
- Create: `public-site/assets/blog/qa-pos-deploy-dispositivo-real/hero-mobile-antes.webp`
- Create: `public-site/assets/blog/qa-pos-deploy-dispositivo-real/hero-mobile-depois.webp`
- Create: `public-site/assets/blog/qa-pos-deploy-dispositivo-real/curriculo-mobile-antes.webp`
- Create: `public-site/assets/blog/qa-pos-deploy-dispositivo-real/curriculo-mobile-depois.webp`

**Interfaces:**
- Consumes: capturas históricas locais e páginas públicas atuais.
- Produces: quatro WebPs sem barra do navegador, notificações ou dados privados.

- [ ] **Step 1: Confirmar as capturas históricas**

Verificar, sem modificar:

```powershell
Get-Item `
  'C:\Users\prov1\AppData\Local\Temp\codex-clipboard-5190e347-2ca4-4316-98e4-37310bdc48e4.jpg', `
  'C:\Users\prov1\AppData\Local\Temp\codex-clipboard-c7c1f0ef-4e0d-4d25-a72c-391d2556c903.jpg'
```

Expected: dois arquivos existentes, correspondendo ao hero e ao currículo antes das correções.

- [ ] **Step 2: Capturar os estados atuais em viewport mobile**

Usar Playwright com viewport `{ width: 412, height: 915 }` para capturar:

```text
https://oliveiralucas1807.github.io/portfolio-lucas-oliveira/
https://oliveiralucas1807.github.io/curriculo/
```

Salvar intermediários em `artifacts/qa-pos-deploy/`. Capturar somente a página; não incluir interface externa do navegador.

- [ ] **Step 3: Recortar e converter os quatro registros**

Criar a pasta final e converter com ffmpeg:

```powershell
New-Item -ItemType Directory -Force -Path 'public-site\assets\blog\qa-pos-deploy-dispositivo-real' | Out-Null
ffmpeg -y -i '<origem>' -vf '<crop-validado>' -c:v libwebp -quality 80 -compression_level 6 '<destino.webp>'
```

Validar individualmente com `view_image`. Os recortes devem preservar a diferença de composição e excluir status bar, URL, notificações e informações sem função editorial.

- [ ] **Step 4: Commitar os ativos aprovados**

```powershell
git add -- public-site/assets/blog/qa-pos-deploy-dispositivo-real
git commit -m "assets: add post-deploy mobile QA evidence"
```

---

### Task 3: Publicações bilíngues

**Files:**
- Modify: `src/data/blog.ts`
- Modify: `docs/processo-v2/17-inventario-imagens-blog.md`
- Test: `tests/unit/content-contract.test.ts`

**Interfaces:**
- Consumes: `BlogPost`, `BlogTopic` e quatro ativos da Task 2.
- Produces: dois novos objetos `BlogPost`.

- [ ] **Step 1: Adicionar o artigo de QA**

Inserir em `posts`:

```ts
{
  slug: 'qa-pos-deploy-dispositivo-real', date: '07 AGO 2026', dateISO: '2026-08-07', topics: ['portfolio'], status: 'published',
  category: { pt: 'QA e responsividade', en: 'QA and responsive design' },
  sourceRef: 'git:6ffcd89,20a77e1,d063fee,ab4c5c4,39b9398,bfa43cd,9d756c7; docs:16-qa-lightbox-mobile-e-blog,2026-08-07-auditoria-galerias',
  title: { pt: 'Depois do deploy: o que o celular real revelou sobre o Portfólio V2', en: 'After deployment: what a real phone revealed about Portfolio V2' },
  excerpt: { pt: 'A publicação expôs diferenças de enquadramento, escala e ritmo que levaram a uma rodada de ajustes mobile, revisão das galerias e novos testes.', en: 'Publishing exposed differences in framing, scale and rhythm that led to mobile refinements, a gallery review and new tests.' },
  body: {
    pt: [
      'O modo responsivo do navegador ajudou durante a construção, mas o uso em um Samsung S24 FE revelou diferenças de enquadramento e ritmo que pediam outra rodada de revisão. Hero, distância da topbar, botões, menu compacto e fotografia do currículo foram ajustados a partir da tela real.',
      'A revisão também chegou às galerias. Uma arte usada entre os três destaques não deveria reaparecer dentro do conteúdo expandido do mesmo case. A regra virou um teste automatizado e orientou uma substituição sistemática nos seis projetos.',
      'O aprendizado foi simples: colocar o site no ar não encerrou o trabalho. A publicação criou o contexto necessário para observar, comparar e refinar decisões que ainda não estavam claras no ambiente de desenvolvimento.'
    ],
    en: [
      'The browser responsive mode helped during development, but using the site on a Samsung S24 FE revealed framing and rhythm differences that required another review. The hero, topbar spacing, buttons, compact menu and résumé portrait were adjusted from the real screen.',
      'The review also reached the galleries. Artwork used among the three highlights should not appear again inside the expanded content of the same case. This rule became an automated test and guided a systematic replacement across all six projects.',
      'The lesson was simple: putting the site online did not end the work. Publishing created the context needed to observe, compare and refine decisions that were not yet clear in development.'
    ],
  },
  images: [
    { src: '/assets/blog/qa-pos-deploy-dispositivo-real/hero-mobile-antes.webp', alt: { pt: 'Hero mobile antes do reposicionamento do bloco de identidade', en: 'Mobile hero before repositioning the identity block' } },
    { src: '/assets/blog/qa-pos-deploy-dispositivo-real/hero-mobile-depois.webp', alt: { pt: 'Hero mobile depois do ajuste validado em celular real', en: 'Mobile hero after the adjustment validated on a real phone' } },
    { src: '/assets/blog/qa-pos-deploy-dispositivo-real/curriculo-mobile-antes.webp', alt: { pt: 'Currículo mobile antes da correção da proporção da fotografia', en: 'Mobile résumé before correcting the portrait proportions' } },
    { src: '/assets/blog/qa-pos-deploy-dispositivo-real/curriculo-mobile-depois.webp', alt: { pt: 'Currículo mobile depois da correção da fotografia', en: 'Mobile résumé after correcting the portrait' } },
  ],
},
```

- [ ] **Step 2: Adicionar o artigo do dashboard**

Inserir como publicação mais recente:

```ts
{
  slug: 'dashboard-financeiro-em-construcao', date: '10 AGO 2026', dateISO: '2026-08-10', topics: ['creative-workbench', 'applied-ai'], status: 'published',
  category: { pt: 'Projeto em desenvolvimento', en: 'Work in progress' },
  sourceRef: 'local:dashboard-financeiro-lucas; tests:3-files-12-tests; obsidian:decisao-dashboard-financeiro-case-demonstrativo',
  title: { pt: 'Um dashboard financeiro para entender decisões, não apenas mostrar números', en: 'A financial dashboard for understanding decisions, not just displaying numbers' },
  excerpt: { pt: 'Um projeto pessoal em construção reúne planejamento, histórico e testes para transformar informações dispersas em decisões explicáveis.', en: 'A personal project in progress brings planning, history and tests together to turn scattered information into explainable decisions.' },
  body: {
    pt: [
      'O projeto começou com uma pergunta direta: como reunir informações financeiras espalhadas sem misturar previsão com o que realmente aconteceu? O dashboard está sendo construído para conectar planejamento, histórico, simulações e registro de decisões em uma visão mais clara.',
      'Parte do trabalho está em transformar regras financeiras em testes. O objetivo é preservar a origem dos números, reduzir inconsistências e permitir que cada mudança possa ser explicada. A aplicação permanece privada enquanto essa estrutura evolui.',
      'Este ainda não é um case concluído. O processo está sendo documentado e, no futuro, será apresentado por meio de uma versão demonstrativa com dados inteiramente fictícios, separada das informações pessoais usadas no projeto real.'
    ],
    en: [
      'The project started with a direct question: how can scattered financial information be brought together without mixing forecasts with what actually happened? The dashboard is being built to connect planning, history, simulations and decision records in a clearer view.',
      'Part of the work involves turning financial rules into tests. The goal is to preserve where each number came from, reduce inconsistencies and make every change explainable. The application remains private while this structure evolves.',
      'This is not a completed case yet. The process is being documented and will later be presented through a demonstration version with entirely fictional data, kept separate from the personal information used in the real project.'
    ],
  },
  images: [],
},
```

- [ ] **Step 3: Atualizar o inventário editorial**

Adicionar quatro linhas para os ativos do QA em `docs/processo-v2/17-inventario-imagens-blog.md`. Registrar o dashboard com `images: []` e a justificativa “nenhuma imagem real publicada por privacidade”.

- [ ] **Step 4: Executar o contrato editorial**

Run: `npm test -- --run tests/unit/content-contract.test.ts`

Expected: 11 testes do arquivo passam, incluindo os dois novos contratos.

- [ ] **Step 5: Commitar os artigos**

```powershell
git add -- src/data/blog.ts tests/unit/content-contract.test.ts docs/processo-v2/17-inventario-imagens-blog.md
git commit -m "feat: publish QA and dashboard progress updates"
```

---

### Task 4: QA completo e publicação

**Files:**
- Verify: `src/data/blog.ts`
- Verify: `public-site/assets/blog/qa-pos-deploy-dispositivo-real/`
- Deploy: `D:\portfolio site git hub online\portfolio-gh-pages-release`

**Interfaces:**
- Consumes: build estático validado da release.
- Produces: blog publicado no GitHub Pages com duas novas atualizações.

- [ ] **Step 1: Executar testes e build**

```powershell
npm test
$env:DEPLOY_BASE='/portfolio-lucas-oliveira'
npm run build
npx playwright test --grep "blog evidence" --reporter=line
```

Expected: Vitest, Astro check/build e testes de lightbox desktop/mobile passam.

- [ ] **Step 2: Inspecionar o blog gerado**

Confirmar em `dist/blog/index.html` e `dist/en/blog/index.html`:

```powershell
rg -n "qa-pos-deploy-dispositivo-real|dashboard-financeiro-em-construcao" dist/blog/index.html dist/en/blog/index.html
rg -n "R\$|PicPay|Mercado Pago|InfinitePay|tailnet|Tailscale" dist/blog/index.html dist/en/blog/index.html
```

Expected: os dois slugs aparecem; a busca por dados proibidos não retorna correspondências relacionadas ao dashboard.

- [ ] **Step 3: Enviar a release**

```powershell
git push origin release/spotify-embed
```

- [ ] **Step 4: Copiar o build para a branch pública**

```powershell
Copy-Item -Path 'D:\portfolio site git hub online\portfolio-v2-release-spotify\dist\*' -Destination 'D:\portfolio site git hub online\portfolio-gh-pages-release' -Recurse -Force
Set-Location 'D:\portfolio site git hub online\portfolio-gh-pages-release'
git add -- blog/index.html en/blog/index.html assets/blog/qa-pos-deploy-dispositivo-real
git commit -m "deploy: publish QA and dashboard progress updates"
git push origin gh-pages
```

- [ ] **Step 5: Verificar a publicação real**

Consultar:

```text
https://oliveiralucas1807.github.io/portfolio-lucas-oliveira/blog/
https://oliveiralucas1807.github.io/portfolio-lucas-oliveira/en/blog/
```

Confirmar status 200, presença dos dois títulos, quatro ativos do QA e lightbox funcionando em viewport mobile. Não marcar como concluído enquanto o GitHub Pages ainda servir o HTML anterior.
