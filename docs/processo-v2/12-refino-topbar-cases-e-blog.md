# Refino da topbar, cases e blog

Data: 05 de agosto de 2026

## Objetivo

Fechar a navegação principal e aproximar a home da direção visual aprovada, preservando leitura, movimento e acesso rápido aos conteúdos.

## Decisões implementadas

- Menu principal em caixa alta, com `TRABALHOS`, `SOBRE` e `O QUE HÁ DE NOVO` centralizados geometricamente na topbar.
- Seletor de inglês substituído por um símbolo monocromático que combina referências visuais dos Estados Unidos e do Reino Unido.
- Identificação do hero atualizada para `Manaus · Brasil · Desde 2019` e `Manaus · Brazil · Since 2019`.
- Faixas de imagens inclinadas em `-3deg`, tornando a direção diagonal perceptível em desktop e mobile.
- Abertura da seção principal alterada para `CASES` e `Projetos e campanhas`, sem ponto final.
- Card final das galerias revisado com um grande símbolo de mais e a mensagem `Diversos outros cards e materiais produzidos`.
- Ícone sólido do LinkedIn unificado entre topbar e modal de contato.
- Player renomeado para `Playlist do Lucas`, com acesso à playlist oficial no Spotify.
- Posts de `O que há de novo` agora abrem na própria página com texto ampliado e imagens, sem exigir uma terceira rota.

## Limite técnico do Spotify

O embed público do Spotify toca apenas as prévias permitidas pela plataforma. Reprodução integral, contínua e controlada dentro do site exige arquivos de áudio autorizados ou uma integração autenticada que ainda não faz parte do escopo. Até essa definição, o componente mantém o link para a playlist oficial e não promete reprodução local completa.

## Itens aguardando material

- SVG definitivo do WhatsApp escolhido por Lucas.
- SVG definitivo do e-mail escolhido por Lucas.
- Arquivos de áudio autorizados, caso seja aprovada uma reprodução ambiente independente do Spotify.

## Validação

- `npm test`: 10 testes aprovados.
- `npm run build`: 4 páginas estáticas geradas, sem erros ou avisos do Astro.
- `npm run test:e2e`: 16 testes aprovados em desktop e mobile.
- `node scripts/check-links.mjs dist`: 4 arquivos HTML sem referências internas quebradas.
- Busca ortográfica em `src`: nenhum travessão encontrado.

