# Ajuste de ícones, respiro e movimento

Data: 06 de agosto de 2026

## Objetivo

Refinar quatro pontos da home sem alterar sua estrutura: simplificar o anúncio de novos cases, padronizar os ícones de contato, dar movimento ao acesso do blog e aproximar o carrossel do hero.

## Design aprovado

- O card `MAIS CASES EM BREVE` mantém apenas o índice `07+` e o título. A tagline é removida em português e inglês.
- Os desenhos fornecidos em `email_3631344.svg` e `whatsapp_2111774.svg` tornam-se a referência única para e-mail e WhatsApp no rodapé e no modal.
- `O QUE HÁ DE NOVO` recebe o mesmo parallax magnético suave dos demais controles da topbar. O efeito continua desativado quando o sistema solicita redução de movimento.
- A faixa cinza entre hero e carrossel é reduzida em aproximadamente 35%. O carrossel avança visualmente sobre a transição sem tocar nos controles do hero nem criar overflow horizontal.
- A inclinação aprovada de `-3deg` permanece inalterada.

## Responsividade e acessibilidade

- O ajuste de respiro terá valores específicos para desktop e telas de até 800 px.
- Os SVGs usam `currentColor`, preservando contraste nos temas claro e escuro.
- Nomes acessíveis e destinos dos links permanecem inalterados.
- O parallax não interfere em teclado e é removido por `prefers-reduced-motion`.

## Validação

- Contratos unitários para ausência da tagline.
- Teste de navegador para parallax no blog, novos ícones e ausência de overflow.
- Capturas desktop e mobile da junção hero/carrossel.
- Build Astro e verificação de links internos.
