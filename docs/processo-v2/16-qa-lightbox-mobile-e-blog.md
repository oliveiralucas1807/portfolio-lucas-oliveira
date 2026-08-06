# QA: lightbox, mobile e histórico editorial

## Escopo validado

- lightbox em todas as imagens destacadas e expandidas dos seis cases;
- navegação por botões, teclado e gesto horizontal;
- fechamento por botão, fundo e `Esc`, com retorno de foco;
- bloqueio de scroll durante a visualização;
- botão circular `+` e submenu `TRABALHOS` / `SOBRE`;
- pulso somente no tema escuro e desativação com movimento reduzido;
- hero mobile com kicker menor, texto deslocado para cima, foto deslocada para baixo e gradiente concentrado na base;
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
- botão `+` separado do acesso ao blog;
- submenu alinhado ao controle e com identidade da topbar.

## Contrato editorial

Cada entrada publicada possui `sourceRef`. O blog não contém posts marcados como “em breve”. Projetos ainda incompletos são descritos como pesquisa ou candidato a case, sem resultados inventados.

