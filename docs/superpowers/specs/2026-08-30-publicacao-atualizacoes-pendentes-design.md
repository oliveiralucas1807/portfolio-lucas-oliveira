# Publicação das atualizações editoriais pendentes

## Objetivo

Consolidar na fonte principal os dez posts já publicados e acrescentar duas atualizações bilíngues aprovadas: o piloto externo da Bancada de Conteúdo e a pesquisa de automação PSD para After Effects.

## Decisões editoriais

- O piloto externo será publicado sem nomes, conversas, imagens ou afirmações de instalação, primeiro uso, recorrência ou sucesso.
- A pesquisa PSD para After Effects será apresentada como arquitetura e preparação. Executor JSX, composição e render continuam pendentes.
- Os dois posts usarão `images: []`. A ausência de imagens é intencional: não há evidência visual pública que seja ao mesmo tempo necessária, segura e não decorativa.
- A data editorial registra o fato: `2026-08-10` para o piloto e `2026-08-21` para a pesquisa PSD → After Effects.
- Português e inglês devem transmitir o mesmo estado e os mesmos limites.
- A copy não usará travessão editorial `—`, dados pessoais, nomes dos testadores, clientes, credenciais ou material comercial confidencial.

## Consolidação e publicação

- `origin/main` recebe primeiro os dois posts de QA/dashboard que já estavam no release público, seus quatro assets e os testes correspondentes.
- Em seguida, recebe os dois novos posts e seus contratos editoriais.
- O build usa `DEPLOY_BASE=/portfolio-lucas-oliveira`.
- Para preservar a home e o hotfix da Ótica Murano, o deploy copia somente `blog/index.html` e `en/blog/index.html` para a branch `gh-pages`; os assets do QA já publicados serão mantidos.
- A validação pública deve comprovar doze títulos no blog, os dois novos títulos em português e inglês, CSS HTTP 200 e ausência das expressões proibidas nos novos posts.

## Critérios de aceite

1. Testes falham antes da inclusão dos quatro marcos ausentes e passam depois da implementação.
2. O build Astro termina sem erros, avisos ou hints.
3. A fonte principal contém os mesmos dez posts previamente públicos mais os dois novos.
4. O blog público apresenta os doze títulos e continua estilizado.
5. Nenhum outro arquivo público da home é substituído no deploy editorial.

