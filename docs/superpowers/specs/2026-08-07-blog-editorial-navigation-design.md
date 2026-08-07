# Blog Editorial Navigation Design

## Objetivo

Transformar “O que há de novo” em um histórico recente, navegável e sustentado por evidências, sem publicar conteúdo ou imagens sem revisão humana.

## Ordem e atalhos

- Publicações aparecem da data mais recente para a mais antiga.
- A área entre o hero e a lista recebe atalhos laranja com texto branco.
- Cada atalho leva à publicação mais recente do tema, sem ocultar as demais.
- Temas iniciais com conteúdo publicado: Portfólio, Bancada de criação, IA aplicada e Pesquisa.
- Dashboard financeiro permanece oculto até existir uma publicação real.
- No mobile, a faixa pode rolar horizontalmente sem quebrar os rótulos.

## Evidências visuais

- Cada publicação aceita de zero a seis imagens.
- Imagens só entram quando documentam o assunto; não haverá preenchimento decorativo obrigatório.
- Screenshots e registros reais têm prioridade. Ilustrações ou imagens geradas só entram quando identificadas e quando ajudarem a explicar um assunto sem registro visual.
- As imagens serão otimizadas para web em qualidade intermediária.
- Cada imagem do blog abre no visualizador acessível, com navegação dentro da publicação.

## Hero mobile

- Os três CTAs devem permanecer em uma única linha no viewport de referência de 360 px.
- Se necessário, a redução adicional será de 10% sobre o tamanho mobile atual, somente nesses três botões.

## Automação editorial

- Toda segunda-feira às 11:00, horário de Manaus, uma revisão percorre conversas recentes, projetos em andamento, Git e notas canônicas do Obsidian.
- A revisão produz candidatos a atualização com fonte, estado verificado, evidências disponíveis, riscos de exposição e sugestão de reaproveitamento para case e LinkedIn.
- A automação não publica no site nem no LinkedIn; entrega uma proposta para revisão de Lucas.
- Nenhuma credencial, dado financeiro pessoal ou material confidencial de cliente pode entrar no resultado.

## Validação

- Testes verificam ordem decrescente, atalhos, destino da âncora, ausência do dashboard financeiro, limite de seis imagens, lightbox e CTAs mobile em uma linha.
- Build estático e verificação pública do GitHub Pages encerram a entrega.
