# Curadoria visual do blog “O que há de novo”

## Objetivo

Substituir imagens genéricas ou desatualizadas por evidências visuais diretamente relacionadas a cada publicação do blog. Uma publicação pode ficar sem imagem quando não existir registro útil.

## Hierarquia editorial

1. Screenshot ou registro real do processo descrito.
2. Evidência visual do projeto mencionado.
3. Nenhuma imagem quando o visual não acrescentar informação.
4. Imagem produzida especificamente para a publicação somente quando o tema for abstrato e a imagem ajudar a compreendê-lo.

Cada publicação aceita de zero a seis imagens. Os arquivos serão preparados em WebP, com qualidade intermediária e dimensões adequadas ao lightbox do blog.

## Matriz por publicação

### Um portfólio publicável antes de um portfólio perfeito

- Priorizar captura ou registro preservado da V1.
- Mostrar a transformação de acervo disperso em link compartilhável.
- Não usar artes de clientes apenas como decoração.

### Publicar foi o começo: a primeira grande rodada mobile

- Usar screenshots reais da V1 em telas móveis.
- Quando houver registros suficientes, apresentar antes e depois de enquadramento, galeria ou hero.
- Não reutilizar a fotografia do hero sem contexto comparativo.

### Do ajuste do LinkedIn à necessidade de provar processo

- Usar evidência sanitizada da auditoria de posicionamento.
- Ocultar notificações, mensagens, contatos e informações de sessão.
- Manter legíveis apenas as áreas necessárias para entender a decisão profissional.

### Hermes: quando uma pesquisa já revela um futuro case

- Priorizar diagrama ou trecho visual do relatório técnico.
- Se não houver registro suficientemente claro, produzir uma única ilustração explicativa da arquitetura `Telegram → roteador → Kanban → perfis → catálogo`.
- Identificar visualmente o conteúdo como pesquisa, não como produto concluído.

### Mivybook: a automação produz, o olhar humano finaliza

- Usar screenshots reais da bancada de acabamento e do dashboard.
- Mostrar interface e resultado editável, não artes aleatórias da marca.
- Sanitizar caminhos internos, dados de cliente e controles que não devam ser publicados.

### A V2 saiu do planejamento e virou um sistema bilíngue

- Mostrar a interface inicial da V2 e evidência da estrutura bilíngue.
- Dar preferência a registros do sistema funcionando em vez de imagens de código sem contexto.

### A interface evoluiu por crítica visual em contexto real

- Usar comparações que demonstrem mudanças de topbar, hero, transição diagonal, carrossel ou cases.
- Legendas devem explicar o aspecto revisado.

### Publicar a V2 também virou parte do case

- Mostrar a versão pública, o player oficial do Spotify e uma evidência compreensível da publicação.
- Não expor tokens, identificadores privados ou dados de autenticação.

## Fontes permitidas

- histórico Git e documentação do Portfólio V1 e V2;
- screenshots fornecidos por Lucas durante as revisões;
- notas e dossiês canônicos do Obsidian;
- relatório do Hermes;
- arquivos e registros do dashboard Mivybook;
- capturas novas de páginas locais ou públicas pertencentes ao projeto.

## Segurança e privacidade

- Não publicar credenciais, cookies, tokens, mensagens privadas ou dados financeiros.
- Recortar ou ocultar elementos alheios ao assunto da publicação.
- Não inventar telas, métricas ou estados de projetos.
- Não apresentar pesquisa ou protótipo como solução concluída.

## Implementação

- Organizar os arquivos em `public-site/assets/blog/<slug>/`.
- Manter os metadados em `src/data/blog.ts` com textos alternativos em português e inglês.
- Usar o lightbox já existente, sem criar outro componente de galeria.
- Registrar origem e justificativa de cada imagem em `docs/processo-v2/`.

## Validação

- Todas as imagens correspondem ao assunto do artigo.
- Artigos sem evidência adequada não recebem preenchimento decorativo.
- Nenhuma publicação utiliza arte aleatória de cliente.
- Cada artigo contém no máximo seis imagens.
- Todos os arquivos carregam no endereço público e abrem no lightbox.
- Desktop e mobile não apresentam overflow ou deformação.
