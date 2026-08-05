# QA e resultados locais

## Escopo validado

- Home em português e inglês.
- Laboratório em português e inglês.
- Seis projetos na ordem original.
- Card “Mais cases em breve”.
- Duas faixas animadas em sentidos opostos.
- Tema claro/escuro persistente.
- Cursor personalizado com fallback.
- Formulários de demonstração sem envio de dados.
- Ausência das frases “Cases selecionados” e “Portfólio Light para processos seletivos”.

## Evidências

- `npm test`: seis arquivos e oito testes unitários aprovados.
- `npm run build`: Astro Check sem erros, avisos ou hints; quatro páginas HTML e `robots.txt` gerados.
- `npm run test:e2e`: dez cenários aprovados em Chromium desktop e mobile.
- Rolagem horizontal global: ausente após limitar a máscara da galeria.
- Screenshots: `docs/processo-v2/screenshots/`.
- Verificador de links: quatro HTMLs sem links internos ou assets quebrados.
- Modais de contato e Spotify: abertura, Escape, fechamento e restauração de foco validados.
- Estrutura de projetos: seis blocos com três artes de abertura e 20 imagens disponíveis por cliente.
- Lighthouse local da home: Performance 74, Acessibilidade 100, Boas Práticas 100 e SEO 69.
- Métricas Lighthouse: FCP 2,7 s, LCP 5,9 s, TBT 0 ms e CLS 0.
- O SEO está deliberadamente limitado por `noindex,nofollow` e `robots.txt` enquanto a V2 é uma prévia de desenvolvimento.
- A primeira auditoria registrou 64/96/96/69; fontes locais, favicon, contraste e imagens responsivas elevaram os três primeiros resultados.

Após a revisão editorial e a expansão para 120 artes, a nova auditoria registrou Performance 73, Acessibilidade 100, Boas Práticas 100 e SEO 69. As métricas foram FCP 2,9 s, LCP 6,0 s, TBT 0 ms e CLS 0. O carregamento das galerias expandidas permanece tardio para não bloquear a abertura da página.

## Estado de publicação

- Nenhum deploy foi realizado.
- O portfólio atual permanece na pasta e no repositório originais.
- A única definição de conteúdo pendente é a playlist do Spotify; o bloco atual não tenta reproduzir áudio automaticamente.
