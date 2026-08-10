# Dashboard financeiro em construção — Design editorial

## Objetivo

Adicionar ao blog “O que há de novo” uma atualização curta e bilíngue, datada de 10 de agosto de 2026, apresentando o dashboard financeiro como projeto em desenvolvimento. O artigo deve falar sobre problema, direção e aprendizado sem publicar valores, contas, dívidas, instituições ou telas com dados pessoais.

## Abordagem aprovada

O dashboard será apresentado como um sistema em construção para explicar decisões financeiras, e não apenas exibir números. O texto deve mostrar que planejamento, histórico, simulações e registro do que realmente aconteceu estão sendo reunidos em uma interface privada e testável.

O artigo não é um anúncio de produto pronto nem um case concluído. Ele registra um marco de processo verificável.

## Estrutura editorial

**Categoria:** Projeto em desenvolvimento

**Título:** Um dashboard financeiro para entender decisões, não apenas mostrar números

**Resumo:** Um projeto pessoal em construção reúne planejamento, histórico e testes para transformar números dispersos em decisões explicáveis.

**Corpo:**

1. Apresentar o problema de organizar informações financeiras espalhadas e distinguir previsão do que realmente aconteceu.
2. Explicar que o dashboard está sendo construído para conectar planejamento, histórico, simulações e registro de decisões.
3. Mencionar que regras financeiras estão sendo transformadas em testes para reduzir inconsistências e preservar a origem dos números.
4. Informar que a aplicação permanece privada enquanto evolui.
5. Encerrar dizendo que o processo será documentado e poderá virar um case aprofundado depois de concluído e sanitizado.

## Tom e posicionamento

- Profissional, acessível e direto.
- Falar em exploração e desenvolvimento assistido por IA, sem apresentar Lucas como desenvolvedor profissional.
- Não usar travessões editoriais.
- Não sugerir aconselhamento financeiro, produto comercial ou sistema pronto para terceiros.
- Não inventar métricas de economia, produtividade ou precisão.

## Privacidade

Esta primeira atualização não usará screenshots do dashboard real. Pode ser publicada sem imagem.

São proibidos no artigo e nos ativos públicos:

- saldos, rendimentos, dívidas e despesas pessoais;
- nomes de instituições, credores ou contrapartes;
- datas e descrições de movimentações reais;
- banco SQLite, CSVs, logs ou endereços privados;
- URL, hostname ou configuração da rede privada.

## Regra para o futuro case

Antes de produzir qualquer case, print, vídeo ou demonstração pública, será criada uma duplicata independente do dashboard. Essa versão demonstrativa terá:

- contas e instituições fictícias;
- valores, datas, compromissos e movimentações inventados;
- banco de dados separado do ambiente pessoal;
- nenhuma credencial, histórico ou referência reutilizada da versão real;
- cenários suficientes para demonstrar planejamento, realização, parcelamento, histórico e conciliação.

Toda evidência visual pública será produzida apenas nessa duplicata.

## Fontes verificáveis

- `C:\Users\prov1\Documents\Estudo\dashboard-financeiro-lucas\docs\superpowers\specs\2026-08-10-livro-razao-baixa-planejamento-tailscale-design.md`.
- `C:\Users\prov1\Documents\Estudo\dashboard-financeiro-lucas\docs\superpowers\plans\2026-08-10-livro-razao-baixa-planejamento-tailscale.md`.
- Testes locais aprovados em 10 de agosto de 2026: 3 arquivos e 12 testes.
- Build TypeScript e Vite aprovado em 10 de agosto de 2026.

## Implementação editorial

- Criar um artigo novo em `src/data/blog.ts`, posterior às publicações atuais.
- Usar os tópicos `creative-workbench` e `applied-ai`.
- Manter `images: []` nesta primeira versão.
- Produzir português e inglês completos.
- Preservar todos os artigos e filtros atuais.

## Verificação

- O artigo aparece como atualização mais recente.
- Nenhum dado financeiro pessoal aparece no HTML, nos assets ou no texto alternativo.
- A ausência de imagem não quebra o layout nem o lightbox.
- As versões portuguesa e inglesa estão completas.
- Testes unitários, build Astro e testes do blog passam.

## Fora do escopo

- Duplicar ou sanitizar o dashboard agora.
- Publicar o dashboard ou seu acesso privado.
- Produzir o case aprofundado nesta etapa.
- Alterar o artigo de QA pós-deploy já especificado.
