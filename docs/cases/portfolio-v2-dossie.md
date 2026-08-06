# Dossiê: Portfólio Light V2

## Objetivo

Evoluir a V1 sem perder sua velocidade. A V2 deveria mostrar mais repertório, explicar melhor os seis cases, reforçar o posicionamento atual e continuar simples de publicar e manter.

## Restrições

- preservar a força do hero;
- manter seis clientes e ordem existente;
- português e inglês;
- temas claro e escuro;
- movimento já na primeira implementação;
- não substituir o site público antes da validação;
- documentar cada rodada para o futuro Portfólio de Cases.

## Arquitetura

- Astro com saída estática;
- React apenas nas ilhas interativas;
- dados de cases e blog separados da marcação;
- CSS global com tokens de cor, tipo e movimento;
- Vitest para contratos de conteúdo;
- Playwright para responsividade e interações;
- GitHub Pages mantendo o mesmo endereço.

## Principais decisões visuais

- topbar flutuante com blur e assinatura `LOS®`;
- duas faixas cinéticas substituindo a seção redundante de atalhos;
- transição diagonal conectando hero, repertório e cases;
- três destaques 3:4 por projeto e galeria expandida;
- Sobre com retrato, habilidades e contatos padronizados;
- blog separado, mas ligado à topbar;
- Spotify oficial como painel controlável pelo visitante.

## Iteração

A página evoluiu por crítica visual em contexto. Foram corrigidos largura da topbar, posição do modal, uso de ícones, altura das artes, viúvas, copy, hierarquia dos cases, destaque da expansão, Sobre, contato, carrosséis e responsividade.

## Publicação e incidente

A primeira release foi validada e publicada em 06/08/2026. Na atualização do Spotify, deployments do Pages ficaram presos em `deployment_queued`. Registros órfãos foram cancelados pela API e o build estático passou a ser publicado pela branch `gh-pages`.

## Resultado verificável

- quatro rotas estáticas;
- seis cases bilíngues;
- temas, modais, Spotify e movimento acessível;
- testes unitários e E2E cobrindo conteúdo e interface;
- versão pública no endereço original.

## Evidências

- especificações e planos em `docs/superpowers`;
- processo em `docs/processo-v2`;
- commits de `74990c9` a `b0d2c7d`;
- screenshots e resultados de QA preservados no repositório.

## Próximos elementos do case

- montar sequência visual de antes, V1, protótipo V2 e release;
- selecionar trechos sanitizados de requisitos e correções;
- consolidar métricas de arquivos, testes, rotas e ciclos de revisão;
- escrever a avaliação pessoal de Lucas sobre colaboração humano-IA.
