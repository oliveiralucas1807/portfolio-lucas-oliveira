# Portfólio V2: fechamento da home e blog

## Objetivo

Levar a V2 da fase de laboratório para uma versão de apresentação consolidada, preservando o hero, os cases e a identidade já aprovados, corrigindo ambiguidades visuais e incorporando movimento, blog e uma seção Sobre mais autoral.

## Direção visual

- A assinatura continua baseada em preto, branco acinzentado e laranja.
- O corte diagonal será uma linha contínua: saída do hero, inclinação das faixas e entrada da seção de projetos usarão o mesmo ângulo visual.
- A topbar será reduzida em aproximadamente 18%, mantendo `LOS®`, Trabalhos, Sobre, Blog, LinkedIn, idioma e tema.
- O Laboratório deixa de fazer parte da navegação e das rotas de apresentação.
- O movimento será funcional: revelação durante a rolagem, microparallax em elementos interativos e entrada escalonada das galerias expandidas.

## Cases

- Remover somente a linha imediatamente acima do botão “Explorar projeto”.
- Manter a linha inferior que separa um case do seguinte.
- Cada galeria expandida exibirá 22 artes reais e um card editorial final.
- O card final ocupará o último espaço da grade e comunicará: “E diversos outros cards e materiais produzidos”.
- A abertura e o fechamento continuarão acessíveis por `details/summary`, com animação visual aplicada ao conteúdo.
- Elementos revelados durante a rolagem respeitarão `prefers-reduced-motion`.

## Sobre e ícones

- Substituir o retrato atual por `C:\Users\prov1\Documents\LUCAS OLIVEIRA FOTO.png`, otimizado para WebP dentro do projeto.
- Posicionar o chapéu “Sobre” acima da imagem e prolongar uma linha laranja sobre a coluna textual.
- Ajustar proporções para que retrato e conteúdo tenham alturas visualmente próximas.
- Usar um ícone semanticamente diferente por habilidade: design, campanhas, direção de arte, IA, prompting e automação.
- Contatos usarão versões sólidas e legíveis em tamanhos pequenos para WhatsApp, LinkedIn e currículo.

## Blog

- Criar as rotas `/blog/` e `/en/blog/`.
- O título editorial será “O que está acontecendo agora”.
- A página apresentará atualizações, processos e experimentos como cartões editoriais, usando conteúdo local e sem CMS.
- A topbar apontará para a rota localizada do blog.
- O primeiro conteúdo registrará o desenvolvimento da própria V2; os demais serão estados editoriais preparados para futura alimentação.

## Spotify e áudio

- Remover o embed de prévias do Spotify da interface final.
- Criar um player próprio para arquivos de áudio autorizados, com volume inicial baixo, reproduzir, pausar, avançar e controle de volume.
- Enquanto nenhum arquivo autorizado estiver disponível, o player não fará reprodução simulada e mostrará um estado discreto de preparação.
- O link da playlist do Spotify continuará disponível como referência externa.

## Parallax e animação

- Aplicar microparallax somente na topbar, controles, chips e imagens clicáveis.
- Limitar deslocamento para evitar perda de precisão do cursor.
- Usar `IntersectionObserver` para revelar seções e itens conforme entram na viewport.
- Galerias expandidas terão entrada em cascata e não dependerão de biblioteca externa.

## Responsividade e acessibilidade

- Nenhum elemento flutuante poderá bloquear CTAs no mobile.
- Foco por teclado, semântica dos botões, contraste e redução de movimento serão preservados.
- Português e inglês terão rotas equivalentes para home e blog.

## Fora do escopo

- Streaming integral de músicas hospedadas pelo Spotify fora das condições do serviço.
- CMS, newsletter, filtros de projeto, variações adicionais de carrossel e página pública de Laboratório.
- Publicação da V2 ou substituição do portfólio atual.

## Critérios de aceite

- Topbar compacta e sem sobreposição indesejada no retrato.
- Três limites diagonais visualmente coerentes.
- Seis cases com 22 artes e um card final em cada galeria.
- Animações de rolagem e expansão funcionando em desktop e mobile, com fallback de movimento reduzido.
- Nova foto e iconografia específica aplicadas no Sobre.
- Blog localizado acessível pela topbar.
- Laboratório ausente da navegação e da saída estática.
- Player próprio preparado, sem alegar reprodução integral antes de receber os arquivos de áudio.

