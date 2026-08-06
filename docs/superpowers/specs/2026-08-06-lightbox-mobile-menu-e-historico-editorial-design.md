# Lightbox, navegação mobile e histórico editorial

## Objetivo

Corrigir a experiência mobile da V2, recuperar a visualização ampliada das artes e substituir o conteúdo provisório do blog por uma linha editorial verificável sobre a construção do portfólio e outros projetos de desenvolvimento com IA.

## Escopo desta rodada

Esta rodada possui duas entregas conectadas:

1. uma revisão funcional e visual da home, com lightbox, hero mobile e menu compacto;
2. um levantamento editorial documentado que abastece o blog atual e prepara narrativas mais completas para o futuro Portfólio de Cases.

O levantamento editorial não autoriza inventar datas, resultados, métricas, imagens ou etapas. Quando a evidência não existir, o material será marcado como lacuna de apuração.

## Lightbox das artes

- Todas as imagens dos cases, tanto as três peças em destaque quanto as galerias expandidas, serão clicáveis.
- A imagem abre em um visualizador modal sobre a página, com fundo escuro, enquadramento amplo e preservação da proporção original.
- O visualizador terá fechar, anterior, próxima, contador e identificação do cliente quando disponível.
- Desktop: suporte a clique, setas do teclado e `Esc`.
- Mobile: suporte a toque, botões com área confortável e gesto horizontal para avançar ou voltar.
- O foco ficará preso no modal enquanto aberto e retornará à imagem de origem ao fechar.
- O scroll da página será bloqueado durante a visualização.
- Imagens serão carregadas sob demanda. A abertura não duplicará arquivos nem mudará os assets existentes.
- Movimento reduzido desativa transições de escala e mantém apenas mudança curta de opacidade.

## Hero mobile

- A fotografia mobile atual será preservada.
- O conjunto `Manaus · Brasil · Desde 2019`, nome, cargo, apresentação e ações será deslocado para cima, ficando abaixo da topbar e fora do centro do rosto.
- O kicker terá aproximadamente 70% da escala atual.
- Nome, cargo, texto de apresentação e botões manterão a hierarquia já aprovada, com ajustes apenas de posição e quebras necessários para caber entre a topbar e a parte inferior.
- O gradiente escuro ficará concentrado na área inferior e intermediária. O topo laranja permanecerá mais limpo e saturado.
- A composição será validada em larguras próximas a 360, 390 e 430 pixels, incluindo alturas reduzidas.

## Topbar e submenu compacto

- `O QUE HÁ DE NOVO` continua como botão laranja sem pulso e abre diretamente o blog.
- Um novo botão circular com símbolo `+` entra no grupo de ações da topbar.
- No tema escuro, o botão recebe um pulso branco discreto. No tema claro, permanece estático.
- O botão `+` abre um submenu flutuante com `TRABALHOS` e `SOBRE`.
- O submenu reutiliza blur, contorno, sombra, raio e cores da topbar.
- O símbolo gira para `×` quando aberto.
- O submenu fecha ao selecionar uma opção, clicar ou tocar fora, apertar `Esc` ou mudar de rota.
- O controle expõe estado com `aria-expanded` e relação com `aria-controls`.
- Desktop mantém os três links centrais quando houver largura suficiente. O botão compacto será usado no breakpoint em que esses links não couberem sem colisão.

## Arquitetura de interface

- `CaseLightbox`: ilha React única, montada uma vez na página e alimentada por uma lista serializável de imagens.
- `Projects`: identifica imagens interativas por atributos de dados e fornece ordem, origem, texto alternativo e cliente.
- `CompactMenu`: ilha React independente responsável apenas por estado, foco e fechamento do submenu.
- `Hero`: continua estático em Astro; a revisão mobile será resolvida por tokens e media queries, sem JavaScript de posicionamento.
- Os componentes não compartilharão estado entre si.

## Histórico editorial

O levantamento será feito por busca dirigida, sem ler indiscriminadamente todo o computador ou o vault. As fontes serão:

- conversas do Codex relacionadas ao portfólio, currículo, LinkedIn, dashboard financeiro, Mivybook e Hermes;
- documentação e histórico Git dos repositórios correspondentes;
- notas canônicas do Obsidian;
- screenshots e assets já preservados nos projetos;
- datas de commits, arquivos e registros verificáveis.

Cada evidência será registrada em um inventário com data, projeto, fonte, evento, decisão, problema, solução, resultado e possível uso editorial.

## Narrativas prioritárias

### 1. Origem e Portfólio V1

- dificuldade de manter o Behance atualizado;
- urgência por um link compartilhável para processos e contatos;
- uso do Codex para reduzir tempo de pesquisa, organização e implementação;
- bifurcação entre uma versão mais ambiciosa e um Portfólio Light publicável rapidamente;
- decisões, problemas técnicos, publicação e aprendizados.

### 2. LinkedIn e reposicionamento

- auditoria do perfil e do currículo;
- lacunas identificadas na apresentação profissional;
- necessidade de evidências públicas de trabalho e processo;
- surgimento da V2 e do Portfólio de Cases como respostas a essas lacunas.

### 3. Portfólio V2

- planejamento, pesquisa de referências e preservação do que funcionava na V1;
- evolução do hero, galeria cinética, cases, temas, blog, contato e Spotify;
- ciclos de crítica visual, responsividade, acessibilidade, testes e publicação;
- incidente do GitHub Pages e estratégia de recuperação.

### 4. Inventário de projetos técnicos

- dashboard financeiro;
- dashboard e fluxos da Mivybook;
- Hermes e integrações associadas;
- outros projetos encontrados que apresentem problema real, aplicação, evidência e resultado.

Projetos incompletos entram como candidatos e não como cases concluídos.

## Modelo editorial do blog

- O blog terá atualizações datadas em ordem cronológica.
- Cada entrada apresentará um acontecimento real, uma decisão ou um marco, não um resumo genérico do projeto inteiro.
- O card mostra data, título, contexto curto e ação para abrir detalhes na própria página.
- O conteúdo expandido poderá combinar texto, imagens, decisões e links internos.
- Datas serão extraídas das fontes; não serão aproximadas apenas por memória.
- A primeira leva prioriza V1, LinkedIn e V2. Projetos externos entram quando o inventário tiver evidência suficiente.

## Preparação para o Portfólio de Cases

Além dos textos curtos do blog, cada narrativa terá um dossiê separado com:

- cenário;
- problema;
- objetivos e restrições;
- alternativas consideradas;
- decisões;
- processo e ferramentas;
- obstáculos e correções;
- resultado verificável;
- aprendizados;
- cronologia e banco de imagens;
- lacunas que precisam de resposta de Lucas.

O blog funciona como diário de evolução. O Portfólio de Cases usará a mesma evidência para construir uma narrativa longa, sem copiar literalmente as atualizações.

## Testes e critérios de aceite

- Lightbox abre por mouse, toque e teclado em imagens destacadas e expandidas.
- Navegação anterior e próxima respeita a ordem do case.
- `Esc`, botão fechar e gesto funcionam sem perder o foco.
- Nenhuma imagem causa overflow horizontal em 360, 390, 430, 768 e 1440 pixels.
- O hero mobile não cobre olhos, nariz ou boca com o nome e o cargo na referência de 390 pixels.
- O topo laranja não recebe a camada escura de mesma intensidade da metade inferior.
- `O QUE HÁ DE NOVO` abre o blog; `+` abre somente `TRABALHOS` e `SOBRE`.
- Tema claro, tema escuro, português, inglês e redução de movimento permanecem funcionais.
- Blog não contém datas ou resultados sem fonte registrada.
- Testes unitários, E2E, `astro check` e build passam antes da publicação.
- A versão publicada será validada em navegador desktop e viewport mobile.

## Fora do escopo imediato

- produzir todos os cases longos do Portfólio de Cases;
- concluir projetos ainda em desenvolvimento;
- reescrever currículo ou LinkedIn;
- trocar a fotografia mobile;
- criar CMS ou painel administrativo para o blog;
- substituir o embed oficial do Spotify por autenticação Web Playback SDK.
