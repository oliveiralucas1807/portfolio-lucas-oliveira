# Fechamento da home, blog e movimento

## Alterações da rodada

- A topbar foi reduzida para 740 pixels de largura máxima e o item Contato foi substituído por Blog.
- O Laboratório V2 saiu da navegação e deixou de gerar páginas públicas.
- As rotas `/blog/` e `/en/blog/` apresentam a nova frente “O que está acontecendo agora”.
- Hero, galeria cinética e entrada de projetos passaram a compartilhar o mesmo token de inclinação.
- A borda acima de “Explorar projeto” foi removida; a borda inferior do case permanece como encerramento real.
- Cada galeria expandida agora possui 19 artes e um card editorial, formando uma grade de vinte itens.
- Um sistema React com `IntersectionObserver` controla entradas durante a rolagem e microparallax em elementos interativos.
- A nova fotografia fornecida por Lucas foi otimizada para WebP e aplicada à seção Sobre.
- Seis habilidades receberam seis ícones distintos; contatos usam ícones sólidos.

## Decisão sobre áudio

O primeiro lançamento usou um player local vazio porque o embed do Spotify pode reproduzir somente uma prévia curta em determinadas condições. Como esse estado deixava controles desativados e não entregava música, a decisão foi revista após a publicação.

A V2 passa a usar o embed oficial da playlist `2OfZT7teUPaGjHWRgGqMta`, com a permissão `encrypted-media` exigida para reprodução completa nos navegadores compatíveis. O painel continua flutuante, fechável e persistente durante a sessão, além de manter um link externo para o Spotify. Não há autoplay ou volume inicial artificial: reprodução, disponibilidade da faixa e volume são controlados pelo Spotify e pelo navegador.

O Web Playback SDK continua descartado porque exige autenticação, uma conta Premium e uma infraestrutura de autorização desproporcional ao portfólio. Nenhuma credencial do Spotify é armazenada no site.

Referências oficiais:

- [Spotify Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk)
- [Getting Started with Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk/tutorials/getting-started)
- [Spotify Embed troubleshooting](https://developer.spotify.com/documentation/embeds/tutorials/troubleshooting)

## Conteúdo do blog

O blog começa como um índice editorial sem CMS. A primeira pauta documenta a construção da V2. As duas pautas seguintes registram IA aplicada ao processo e consistência em campanhas de muitas peças. Os cards em preparação deixam explícito que ainda não possuem página individual.

## Evidências esperadas

- Home desktop e mobile sem overflow horizontal.
- Modal de contato centralizado e acessível.
- Blog disponível nos dois idiomas.
- Galerias expandidas com vinte itens.
- Nenhuma rota pública do Laboratório.
- Build Astro sem erros, avisos ou hints.
