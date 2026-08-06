# Portfólio V2: direção diagonal, hierarquia dos cases e recursos editoriais

Data: 2026-08-05

## Objetivo

Refinar a V2 sem desmontar a linguagem aprovada. A página deve ganhar continuidade entre hero e galeria, chegar aos cases com menos rolagem, melhorar a leitura dos conteúdos e introduzir ícones, foto no Sobre e Spotify flutuante.

## Top bar e hero

- Reduzir a largura máxima da top bar de 1120 px para aproximadamente 900 px no desktop.
- Reduzir espaçamentos internos e manter todos os controles existentes.
- Alterar a assinatura de `LO®` para `LOS®`.
- Garantir que a barra não cubra a cabeça na hero desktop ou mobile.
- Preservar a composição, a escala do nome e a escala secundária do cargo.

## Transição diagonal entre hero e galeria

- A galeria deve invadir visualmente a base da hero.
- Inclinar o próprio container da seção, não somente as fileiras internas.
- A borda superior da galeria deve formar uma linha diagonal contínua sobre a hero.
- Compensar internamente a rotação para que imagens e legendas permaneçam legíveis.
- Evitar qualquer faixa reta aparente entre hero e galeria.
- Garantir ausência de rolagem horizontal e uma versão menos agressiva no celular.

## Galeria ampliada

- Manter as duas fileiras verticais em sentidos opostos.
- Aumentar o conjunto com novas artes e clientes disponíveis em `F:\SERV INSPIRA` e `D:\save\teagá`.
- Evitar repetição excessiva dos seis cases principais.
- Preservar derivados WebP otimizados e fontes originais somente leitura.

## Abertura dos projetos

- Remover o subtítulo atual.
- Usar apenas o título `Projetos e campanhas.`
- Centralizar o eyebrow `Projetos` e o título.
- Aumentar a escala e reduzir o espaço vertical da seção para que Coimbra apareça mais cedo.

## Cases e copy

- Prefixar períodos com `Amostra de materiais de`, como `Amostra de materiais de março a junho de 2026`.
- Evitar viúvas nos títulos com controle de largura e quebras editoriais.
- Coimbra deve usar o título em duas linhas equilibradas: `Campanhas promocionais` e `para varejo técnico`.
- Nova descrição de Coimbra: `Conjunto de campanhas promocionais e conteúdos de produto criados para comunicar ofertas, datas comerciais e o universo técnico da Coimbra com leitura rápida e presença de marca.`
- As descrições de abertura apresentam o cliente e o desafio de comunicação.
- `Minha atuação`, `Entregas` e `Direção aplicada` devem explicar contribuição, produção e escolhas visuais sem repetir a descrição de abertura.
- Mover esses três blocos para antes das imagens de destaque.
- Separar os blocos com linhas verticais que acompanham título e texto.
- Aplicar a mesma lógica editorial aos seis cases.

## Curadoria dos destaques

- Coimbra: Escalação Campeã, Dia do Trabalhador e Esmerilhadeira Makita.
- Mega Mês do Trabalhador e Mês do Serralheiro permanecem na galeria expandida.
- Cultura Inglesa: substituir `Feedbacks que amamos` por `Feliz Páscoa`.
- Ótica Murano: substituir o terceiro destaque ligado a `O Diabo Veste Prada` por `Feliz Dia dos Namorados`.
- Taco Libre, Natura e La Pizza mantêm os destaques atuais nesta rodada.

## Controle de expansão

- Transformar `Explorar projeto` em botão visual centralizado.
- Aproximar texto e símbolo de adição.
- Usar fundo laranja, contraste escuro e animação suave de pulso ou luz.
- A animação deve indicar conteúdo adicional sem competir com a leitura.
- Desativar a animação em `prefers-reduced-motion`.

## Modal de contato, ícones e cursor

- Centralizar o modal no viewport com posicionamento explícito e margens automáticas.
- Corrigir o cursor personalizado dentro do dialog e do backdrop.
- O cursor nunca pode desaparecer sobre links, botões ou área interna do modal.
- Alinhar eyebrow, título e descrição no mesmo eixo.
- Aplicar compensação óptica de até 20 px para a esquerda no título `Opções de contato`.
- Criar ícones SVG próprios e consistentes para e-mail, WhatsApp, LinkedIn, currículo/PDF, contato, habilidades e controles do Spotify.
- Não reutilizar os ícones do portfólio anterior.

## Sobre

- Reestruturar a seção com foto, apresentação e competências.
- Usar a foto mobile sem texto como fonte, com enquadramento específico para retrato.
- Corrigir o alinhamento do título.
- Exibir competências como chips ou botões visuais com ícones discretos.
- Manter foco em Design Gráfico Pleno, campanhas digitais, Direção de Arte, IA generativa, Prompt Engineering e automação criativa.

## Cases de processo

- Manter o eyebrow `Processo / Desenvolvimento`.
- Alterar o título para `Design, IA e processos em construção.`
- Manter a descrição aprovada.
- Substituir o texto solto por botão `Acessar cases` com seta.
- Exibir ao lado, em peso fino, `Indisponível no momento`.
- O botão permanece desativado enquanto a rota não existir.

## Spotify flutuante

- Substituir o bloco fixo atual por um mini player flutuante no lado direito da tela.
- Permitir fechar e manter a escolha durante a sessão.
- Exibir controles visuais de reproduzir/pausar e mutar, mas mantê-los em estado de demonstração até existir URL válida.
- Quando Lucas fornecer a playlist, conectar o embed oficial do Spotify dentro do player.
- Não prometer autoplay: navegadores e Spotify podem bloquear reprodução automática.
- Manter acesso à explicação da playlist enquanto não houver link real.

## Contato final

- Substituir o título atual por `Vamos conversar.`
- Aumentar a escala e a largura do título.
- Adicionar os mesmos ícones do modal aos links de contato.

## Blog e Laboratório

- Planejar o blog como página separada, não como trecho da home.
- Nome editorial recomendado: `O que está em construção`.
- A página deve futuramente reunir projetos, estudos, bastidores e experimentos em andamento.
- Manter modo escuro, cursor e Spotify como aprovados.
- Variações de carrossel permanecem no Laboratório até existir uma função clara.
- Parallax deve ganhar três ideias demonstráveis:
  1. profundidade sutil em capas de cases;
  2. deslocamento de camadas em bastidores de processo;
  3. transição entre blocos editoriais do blog.
- Nenhuma dessas ideias entra na home nesta rodada.

## Responsividade e validação

- Top bar, diagonal, modal, mini player e chips devem funcionar no desktop e celular.
- Não pode existir rolagem horizontal global.
- Modais devem manter foco, Escape e retorno ao acionador.
- Ícones precisam de rótulos acessíveis quando forem controles.
- Testar curadoria exata dos destaques.
- Verificar viúvas nos principais títulos em 390 px, 768 px, 1280 px e 1440 px.
- Executar testes unitários, build, E2E, links e screenshots.
- Atualizar a documentação do processo para o futuro case de desenvolvimento.

## Fora desta rodada

- Publicação da V2.
- Integração real do Spotify antes do envio da URL.
- Implementação completa da página de blog.
- Ativação do portfólio de processos.
- Substituição de `LOS®` pela futura identidade BID.
