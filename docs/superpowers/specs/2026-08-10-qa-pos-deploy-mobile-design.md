# QA pós-deploy em dispositivo real — Design editorial

## Objetivo

Adicionar ao blog “O que há de novo” uma atualização datada de 7 de agosto de 2026 sobre a rodada de QA realizada depois da publicação do Portfólio V2. O texto deve mostrar que o uso em um Samsung S24 FE revelou problemas de composição, escala e repetição que não apareciam com a mesma clareza no ambiente de desenvolvimento.

## Escopo aprovado

- Criar um artigo novo, bilíngue, posterior ao artigo de publicação da V2.
- Relatar somente correções verificáveis por commits, documentação e screenshots.
- Destacar três aprendizados: teste em dispositivo real, separação entre destaque e galeria, e refinamento progressivo depois do deploy.
- Preservar todos os artigos atuais e a ordem cronológica do blog.
- Manter lightbox, filtros temáticos e limite de seis imagens.

## Fora do escopo

- Não publicar o dashboard financeiro nem qualquer dado financeiro pessoal.
- Não criar um artigo separado sobre a curadoria de imagens ou a atualização do LinkedIn.
- Não alterar hero, cases, currículo, navegação ou componentes que não sejam necessários ao novo conteúdo.
- Não inventar métricas de desempenho, recrutamento ou impacto profissional.

## Estrutura editorial

**Categoria:** QA e responsividade

**Título:** Depois do deploy: o que o celular real revelou sobre o Portfólio V2

**Resumo:** A publicação expôs diferenças de enquadramento, escala e ritmo que levaram a uma rodada de ajustes mobile, revisão das galerias e testes automatizados.

**Corpo:**

1. Explicar que o modo responsivo do navegador não reproduziu integralmente a experiência observada no Samsung S24 FE.
2. Registrar os ajustes no hero, espaçamento da topbar, botões, menu compacto e fotografia do currículo.
3. Explicar a auditoria das galerias: uma imagem usada entre os três destaques não pode reaparecer no conteúdo expandido do mesmo case.
4. Encerrar com o aprendizado de que publicação é um marco de validação, não o fim do processo.

O texto deve ser direto, profissional e acessível. Não usar travessões editoriais nem linguagem que posicione Lucas como UX/UI/Product Designer ou desenvolvedor profissional.

## Evidências visuais

Usar de três a seis registros, escolhidos nesta ordem de prioridade:

1. captura do hero mobile antes do reposicionamento;
2. captura do hero mobile depois do reposicionamento;
3. currículo mobile antes da correção da fotografia;
4. currículo mobile depois da correção;
5. exemplo seguro de destaque repetido na galeria;
6. exemplo do mesmo case após a substituição.

As capturas devem ser recortadas para excluir notificações, endereço do navegador, dados privados e elementos sem função editorial. Se um antes/depois não puder ser comprovado com segurança, ele não será substituído por imagem decorativa.

## Fontes verificáveis

- Commits de refinamento mobile: `6ffcd89`, `20a77e1`, `d063fee`, `ab4c5c4` e `39b9398`.
- Auditoria e substituição das galerias: `bfa43cd`.
- Navegação editorial e QA do blog: `9d756c7`.
- `docs/processo-v2/16-qa-lightbox-mobile-e-blog.md`.
- `docs/cases/2026-08-07-auditoria-galerias.md`.

## Implementação

- Adicionar o artigo em `src/data/blog.ts`, com português, inglês, tópicos e referências.
- Criar uma pasta própria em `public-site/assets/blog/<slug>/`.
- Converter capturas selecionadas para WebP em qualidade intermediária.
- Adicionar textos alternativos bilíngues específicos.
- Atualizar o inventário editorial de imagens.

## Verificação

- O artigo aparece antes das publicações mais antigas e respeita a ordenação por data.
- Todas as imagens pertencem à pasta do novo slug e totalizam no máximo seis.
- O lightbox abre, navega e fecha em desktop e mobile.
- O conteúdo em inglês está completo.
- Testes unitários, build Astro e teste de navegador do blog passam.
- A publicação só ocorre depois de integração e verificação do build de produção.

## Risco operacional identificado

O arquivo `src/data/blog.ts` da pasta canônica `portfolio-v2-lucas-oliveira` está atrás da release publicada. A implementação deve partir de `portfolio-v2-release-spotify`, que contém a curadoria editorial e a captura atual do LinkedIn, evitando regressão do conteúdo já online.
