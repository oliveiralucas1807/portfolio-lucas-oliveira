# QA: lightbox, mobile e histórico editorial

## Escopo validado

- lightbox em todas as imagens destacadas e expandidas dos seis cases;
- navegação por botões, teclado e gesto horizontal;
- fechamento por botão, fundo e `Esc`, com retorno de foco;
- bloqueio de scroll durante a visualização;
- botão circular com ícone SVG de menu e submenu `TRABALHOS` / `SOBRE`;
- pulso somente no tema escuro e desativação com movimento reduzido;
- hero mobile com kicker menor, bloco de identidade deslocado para cima, fotografia no eixo original e gradiente concentrado na base;
- oito atualizações bilíngues baseadas em fontes;
- três dossiês e um inventário para o futuro Portfólio de Cases.

## Evidência automatizada

Rodada final em 06/08/2026:

- Vitest: 5 arquivos, 11 testes, zero falhas;
- Playwright: 20 testes em projetos desktop e mobile, zero falhas;
- Astro check: 45 arquivos, zero erros, zero avisos e zero sugestões;
- Astro build: quatro páginas estáticas geradas;
- `git diff --check`: sem erros de whitespace.

## Evidência visual

- `screenshots/2026-08-06-mobile-hero-390.png`
- `screenshots/2026-08-06-mobile-submenu-390.png`

A inspeção em 390 × 844 confirmou:

- nome e cargo acima do centro do rosto;
- topo laranja mais limpo;
- topbar sem overflow;
- botão de menu com três barras separado do acesso ao blog;
- submenu alinhado ao controle e com identidade da topbar.

## Correção visual do hero e do menu

Na revisão mobile de 06/08/2026, o deslocamento aplicado à fotografia foi removido porque criava uma faixa laranja artificial abaixo da topbar. A composição original da imagem, da introdução, dos botões e do link em inglês foi preservada. Somente o conjunto `Manaus · Brasil · Desde 2019`, `Lucas Oliveira` e `Designer Gráfico Pleno` passou a receber deslocamento visual para cima.

O caractere tipográfico `+` do acionador do submenu foi substituído pelo SVG fornecido `menu-principal.svg`, com três barras e dimensões controladas dentro do botão circular. O comportamento de abertura, fechamento, foco, `Esc` e pulso no tema escuro permaneceu inalterado.

## Curadoria da galeria da Ótica Murano

Na revisão de 06/08/2026, a primeira linha expandida concentrava quatro peças da campanha `O Diabo Veste Prada`, incluindo a capa já usada nos destaques. A ordem foi revisada sem alterar os três destaques do case. As posições 1, 2 e 4 passaram a exibir, respectivamente, `Dia do Consumidor`, `Cuidados` e `Abril Marrom`; a posição 3 preserva uma peça editorial de `O Diabo Veste Prada`. As demais peças continuam disponíveis nas linhas seguintes e no visualizador ampliado, tanto no desktop quanto no mobile.

Uma segunda revisão visual identificou que a campanha ainda ocupava quatro posições no conjunto completo. As peças individuais de Miranda Priestly e Emily Charlton foram então substituídas por duas artes abertas e conferidas na pasta histórica `F:\SERV INSPIRA\ÓTICA MURANO\2025`: `Black das Black`, de novembro de 2025, e `Aniversário de Manaus`, de outubro de 2025. O case passou a manter somente a capa e a peça de Andrea Sachs da campanha `O Diabo Veste Prada`.

## Contrato editorial

Cada entrada publicada possui `sourceRef`. O blog não contém posts marcados como “em breve”. Projetos ainda incompletos são descritos como pesquisa ou candidato a case, sem resultados inventados.
