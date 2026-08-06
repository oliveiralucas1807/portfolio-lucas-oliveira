# Portfólio V2: revisão editorial, contato e apresentação dos cases

Data: 2026-08-05

## Objetivo

Refinar a primeira implementação aprovada da V2 sem substituir sua identidade. A revisão deve melhorar hierarquia tipográfica, clareza dos textos, enquadramento das artes, profundidade dos projetos e acesso aos contatos. A home continua sendo a experiência principal e o Laboratório permanece isolado.

## Hero

- Manter a composição visual e o nome `Lucas Oliveira` em grande escala.
- Reduzir `Designer Gráfico Pleno` para aproximadamente 35% a 40% da escala atual, com hierarquia claramente secundária.
- Manter os botões de trabalhos, currículo e contato.
- O botão superior de contato deve abrir um modal, sem rolar a página.
- A seção completa de contato permanece no final da home.
- O modal deve oferecer e-mail, WhatsApp, LinkedIn e currículo, fechar por botão, clique no fundo e tecla Escape, além de devolver o foco ao acionador.

## Revisão editorial e alinhamento

- Remover travessões de frases corridas em português e inglês.
- Intervalos de datas devem usar linguagem como `2019 a 2026`, sem travessão.
- Setas e símbolos funcionais de interface podem permanecer quando não forem pontuação editorial.
- Corrigir blocos que não estejam alinhados à esquerda ou que tenham larguras incoerentes.
- Remover o texto conceitual da galeria que não explica sua função.
- Preferir títulos diretos, específicos e profissionais.

## Galeria cinética

- Manter duas faixas em sentidos opostos.
- Aumentar a altura dos cartões para preservar a leitura de peças predominantemente verticais.
- Usar enquadramento próximo de 3:4 e evitar cortes que escondam o conteúdo principal.
- Preservar pausa por foco ou interação e respeito a `prefers-reduced-motion`.
- Manter a mistura de cases existentes e clientes adicionais.

## Introdução dos projetos

- Substituir `Seis recortes de um trabalho contínuo` por uma chamada direta sobre campanhas, marcas e soluções visuais.
- Reescrever o texto auxiliar para explicar que cada bloco apresenta contexto, direção e entregas reais.
- Manter a ordem dos seis projetos existentes.

## Estrutura dos projetos

Cada projeto deve seguir esta ordem:

1. Metadados de cliente e período.
2. Título do projeto.
3. Subtítulo ou resumo imediatamente abaixo do título.
4. Três artes verticais lado a lado como abertura visual.
5. Informações de atuação, entregas e direção aplicada.
6. Controle `Explorar projeto` que revela todas as demais imagens disponíveis.

No projeto Coimbra, a abertura deve priorizar:

- Escalação Campeã;
- Mega Mês do Trabalhador;
- Mês do Serralheiro.

Os demais projetos devem receber curadoria equivalente com três peças representativas. A galeria expandida não deve limitar artificialmente o conteúdo às quatro imagens atuais. Deve usar todas as imagens disponíveis no conjunto selecionado para o projeto, com grade responsiva e múltiplas linhas.

## Mais cases e ponte para processos

- Manter o cartão `Mais cases em breve`.
- Substituir a marcação `07—∞` por uma forma sem travessão editorial.
- Transformar `Cases de desenvolvimento e processo` em composição de duas colunas.
- Coluna esquerda: título.
- Coluna direita: explicação e chamada `Conhecer proposta`.
- O texto deve comunicar que essa área levará ao futuro portfólio de estudos, processos, testes, automações e decisões.
- Nesta fase, a chamada pode permanecer como estado futuro sem criar uma rota incompleta.

## Sobre e posicionamento profissional

- Manter a seção Sobre.
- Reescrever o conteúdo com base no posicionamento confirmado no LinkedIn:
  - Designer Gráfico Pleno;
  - campanhas digitais e direção de arte;
  - IA generativa;
  - Prompt Engineering;
  - automação criativa.
- Evitar posicionar Lucas como UX Designer ou Product Designer.
- Diferenciar texto de apresentação, foco profissional e lista de competências para evitar repetição.

## Spotify

- Manter o bloco da playlist na home.
- Usar o espaço direito como cartão ou painel compacto clicável, em vez de deixar apenas uma ilustração decorativa solta.
- Ao clicar, abrir um modal informando que a playlist está em preparação e será escolhida por Lucas.
- Não carregar embed, não reproduzir áudio e não depender do Spotify enquanto a URL não estiver definida.
- O modal deve seguir as mesmas regras de acessibilidade do modal de contato.

## Laboratório V2

Manter:

- modo escuro;
- cursor personalizado;
- estrutura da playlist Spotify;
- blog;
- variações de carrossel;
- parallax controlado.

Remover:

- newsletter;
- CMS;
- formulário e demonstração de envio;
- objeto 3D;
- filtros de projeto.

O blog deve ser descrito como parte futura do ambiente de cases, processos e desenvolvimento. O parallax continua em avaliação e não deve ser aplicado à home nesta rodada.

## Componentes e dados

- Criar um componente de modal reutilizável para contato e Spotify.
- Manter conteúdo bilíngue centralizado na camada de internacionalização.
- Ampliar a fonte de imagens dos cases sem alterar os originais arquivados.
- Preservar o diretório público otimizado e gerar derivados WebP adequados aos novos enquadramentos.
- Evitar dependências adicionais quando HTML, CSS e a ilha React existente forem suficientes.

## Responsividade e acessibilidade

- Três artes lado a lado no desktop e empilhamento ou rolagem controlada no celular.
- Nenhuma rolagem horizontal global.
- Modal com foco gerenciado, rótulos acessíveis e fechamento previsível.
- Galerias com textos alternativos úteis.
- Movimento reduzido deve desativar animações contínuas e parallax.
- Contraste deve manter os resultados já alcançados na auditoria anterior.

## Validação

- Atualizar testes unitários para conteúdo e conjunto do Laboratório.
- Atualizar testes E2E para abertura e fechamento dos modais.
- Verificar três imagens de abertura em cada projeto.
- Verificar que a expansão apresenta mais imagens do que a versão anterior.
- Verificar ausência de travessões em frases de interface.
- Executar `npm test`, `npm run build`, `npm run test:e2e` e verificação de links.
- Fazer inspeção visual desktop e celular e atualizar a documentação do processo.

## Fora desta rodada

- Escolha ou incorporação da playlist real.
- Publicação da V2.
- Criação completa do blog.
- Criação completa do portfólio de cases de desenvolvimento.
- Aplicação do parallax à home.
