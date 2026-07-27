# Requisitos técnicos e dependências

## Estado de partida

O Portfólio Light atual é um site estático em HTML, CSS e JavaScript, publicado
no GitHub Pages. A V2 pode continuar no GitHub Pages: usar Astro não exige
migrar de hospedagem nem contratar uma plataforma.

## Direção técnica preferida

- Astro com saída estática;
- Tailwind CSS para o sistema visual, se o protótipo confirmar ganho real;
- GitHub Pages como hospedagem;
- GitHub Actions para gerar e publicar a pasta de saída;
- conteúdo dos projetos separado da apresentação;
- JavaScript apenas onde houver interação necessária.

Astro, Tailwind e os templates estudados são ferramentas ou códigos que rodam
no projeto. Eles não são uma hospedagem e não exigem assinatura para esse uso.

## Dependências candidatas

Instalar somente na fase de implementação:

- `astro`;
- `tailwindcss`;
- `@tailwindcss/vite`;
- `@astrojs/sitemap`, se o endereço e a estrutura final estiverem definidos.

Não adicionar inicialmente:

- React ou outro framework de interface;
- GSAP;
- Three.js ou Spline;
- CMS;
- ferramenta paga de analytics;
- Resend ou outro serviço de e-mail.

## Conteúdo

Antes da migração, decidir entre:

1. arquivos JSON simples, adequados à quantidade atual de projetos; ou
2. Content Collections do Astro, melhores se os mini-cases crescerem e
   passarem a ter páginas próprias.

Não migrar todo o conteúdo antes de validar um único projeto piloto.

## Imagens

- inventariar as imagens realmente usadas;
- manter originais fora da pasta pública quando possível;
- gerar versões WebP ou AVIF e fallback compatível;
- definir largura, altura e carregamento tardio;
- preservar uma imagem de compartilhamento social por página relevante.

## Movimento

Primeira escolha:

- transições CSS;
- `IntersectionObserver` para entradas suaves;
- respeito a `prefers-reduced-motion`;
- uma única faixa contínua de imagens, se o teste de desempenho aprovar.

Bibliotecas de animação só entram se CSS e JavaScript nativo não resolverem o
efeito aprovado.

## GitHub Pages

Na implementação com Astro será necessário:

- configurar `site` e, se aplicável, `base`;
- criar ou adaptar o workflow de build;
- validar links e assets no endereço real do GitHub Pages;
- manter a V1 disponível para rollback até a aprovação final.

## Serviços externos

Nenhum serviço pago é necessário para a V2 planejada. Framer e Webflow ficam
como laboratórios e referências, não como dependências de produção. Resend só
seria relevante no futuro para formulário ou newsletter e exigiria uma função
segura no servidor; nenhuma chave pode ficar no código público.

## Ferramentas locais previstas

- Node.js e npm;
- Git;
- navegador com inspeção responsiva;
- Lighthouse;
- verificação de links;
- teste de teclado e redução de movimento.

## Decisões pendentes antes de instalar qualquer coisa

- Astro será adotado na V2 ou apenas no portfólio de cases?
- Tailwind melhora a manutenção sem descaracterizar o projeto?
- quais projetos entram na seleção principal?
- haverá página individual na V2 ou apenas ponte para o portfólio de cases?
- a faixa de imagens melhora a leitura em celular?

