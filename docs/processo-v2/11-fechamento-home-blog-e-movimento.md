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

O embed do Spotify pode reproduzir somente uma prévia curta em determinadas condições. A alternativa Web Playback SDK exige autenticação, conta Premium e ainda está sujeita às regras de autoplay. A documentação do Spotify também restringe integrações comerciais de streaming e sincronização de áudio com conteúdo visual.

Por isso, a V2 usa um player local preparado para faixas que Lucas tenha autorização para hospedar. O volume inicial é `0.18`, equivalente a uma presença baixa. O componente possui reproduzir, pausar, avançar, volume, fechamento e link externo para a playlist, mas não simula reprodução enquanto a lista estiver vazia.

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
