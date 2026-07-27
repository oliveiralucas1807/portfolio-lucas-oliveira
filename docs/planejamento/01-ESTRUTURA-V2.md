# Estrutura proposta para a V2

## Mapa da página

1. Topbar
2. Hero
3. Projetos selecionados
4. Faixa visual de trabalhos
5. Sobre
6. Competências e experiência resumida
7. Currículo
8. Contato
9. Rodapé

## Topbar

- flutuante e compacta;
- fundo branco translúcido;
- `backdrop-blur`;
- links para Projetos, Sobre e Contato;
- acesso ao currículo;
- comportamento móvel simples;
- sem modo escuro na primeira versão.

Referência principal: Gothsec/Oscar, reinterpretada na identidade de Lucas.

## Hero

Conteúdo grande, direto e legível:

- nome;
- cargo;
- especialidades;
- apresentação curta;
- botão Projetos;
- botão Currículo;
- localização/disponibilidade de forma discreta.

Referências: DevPortfolio para escala e leitura; Fuwari para atmosfera clara.

## Projetos selecionados

Manter os seis projetos atuais como fonte, mas revisar a prioridade visual.

Cada entrada deve conseguir exibir:

- capa;
- título;
- cliente ou contexto;
- categoria;
- ano/período;
- papel de Lucas;
- entregáveis;
- resumo curto;
- imagens principais;
- link futuro para case completo, quando existir.

Referência principal: Maria.

## Faixa horizontal

- uma faixa contínua de imagens;
- velocidade lenta;
- pausa no hover/foco;
- imagens clicáveis;
- respeito a `prefers-reduced-motion`;
- sem duplicar o peso de todas as 120 imagens;
- seleção curta e otimizada.

## Sobre

- foto;
- atuação desde 2019;
- posicionamento profissional;
- setores de interesse;
- uso real de IA generativa e Prompt Engineering;
- transição técnica descrita como fundamentos, sem exagero.

## Experiência e currículo

- resumo moderno integrado à página;
- empresas, cargos e períodos;
- pontos de maior impacto;
- link para currículo HTML;
- link para PDF tradicional.

## Contato

Primeira entrega:

- e-mail;
- LinkedIn;
- currículo;
- WhatsApp somente se Lucas decidir mantê-lo publicamente.

Resend ou formulário com backend ficam para avaliação posterior.

## Movimento

Permitido:

- `fade` e deslocamento vertical curto ao entrar na viewport;
- hover discreto;
- marquee horizontal;
- transição suave da topbar.

Evitar:

- parallax agressivo;
- cursor customizado;
- animação que bloqueia leitura;
- movimento automático rápido;
- objeto 3D antes de validar desempenho.

