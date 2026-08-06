# Publicação da V2 no GitHub Pages

## Objetivo

Substituir o portfólio anterior pela V2 sem perder uma rota de retorno e mantendo as animações e os componentes interativos do Astro e React.

## Estratégia

- preservar a V1 na branch `legacy-v1-2026-08-06` e na tag `portfolio-v1-final-2026-08-06`;
- gerar a V2 como site estático com Astro;
- usar o subcaminho público `/portfolio-lucas-oliveira` durante o build;
- publicar o diretório `dist` com GitHub Actions e GitHub Pages;
- manter as versões em português, inglês e o blog no mesmo pacote;
- liberar indexação apenas no build de produção.

## Pipeline

O workflow `.github/workflows/deploy-pages.yml` executa:

1. instalação reprodutível com `npm ci`;
2. testes unitários;
3. build com `DEPLOY_BASE=/portfolio-lucas-oliveira`;
4. envio do artefato estático para o GitHub Pages;
5. publicação no ambiente `github-pages`.

## Validação antes da troca

- 10 testes unitários;
- 16 testes de interface em desktop e mobile;
- diagnóstico do Astro sem erros ou alertas;
- quatro páginas estáticas geradas;
- prévia no mesmo subcaminho do GitHub Pages;
- verificação de hidratação React, tema, modal de contato e console do navegador.

## Retorno para a V1

Em caso de regressão, a versão anterior pode ser recuperada a partir da tag `portfolio-v1-final-2026-08-06` ou da branch `legacy-v1-2026-08-06`.

## Incidente de fila e fallback em 2026-08-06

Na publicação do embed oficial do Spotify, o build e o upload do artefato passaram, mas o serviço do GitHub Pages permaneceu em `deployment_queued` até o timeout de dez minutos. A repetição com um novo `pages_build_version` também ficou presa por dez minutos. Os deployments órfãos foram cancelados pela API oficial e o site passou a ser servido pela branch estática `gh-pages`, mantendo a mesma URL e o mesmo build `dist` validado. O workflow baseado em `deploy-pages` foi removido para não recriar a fila problemática.
