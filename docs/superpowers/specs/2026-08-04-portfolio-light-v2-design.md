# Portfólio Light V2 — especificação de design

## Objetivo

Evoluir o portfólio publicado de Lucas Oliveira para uma apresentação bilíngue,
mais clara, expressiva e fácil de ampliar. A V2 preserva a força da hero atual,
elimina a navegação redundante dos atalhos de cases, melhora o conteúdo dos seis
mini-cases e introduz movimento desde a primeira implementação.

O desenvolvimento ocorre exclusivamente em
`D:\portfolio site git hub online\portfolio-v2-lucas-oliveira`. A versão
publicada permanece intocada até aprovação explícita de Lucas.

## Posicionamento profissional

A página apresenta Lucas como profissional de design gráfico e digital,
campanhas, direção visual, IA aplicada ao design, Prompt Engineering e
automação criativa. Fundamentos técnicos e experiência com interfaces podem
aparecer como competências complementares, sem posicioná-lo como UX/UI ou
Product Designer, engenheiro de software ou desenvolvedor profissional.

Antes da redação final, currículo e perfil atual do LinkedIn serão tratados
como fontes de verdade. Nenhuma métrica, cliente, função ou resultado será
inventado.

## Arquitetura técnica

A V2 usará:

- Astro com saída estática para rotas, conteúdo, SEO e internacionalização;
- Tailwind CSS para tokens e composição do sistema visual;
- React apenas em ilhas interativas que realmente precisem de estado;
- JavaScript nativo e CSS para interações simples e movimento leve;
- conteúdo de cases separado dos componentes de apresentação;
- GitHub Pages como destino possível, sem configurar publicação nesta etapa.

A decisão evita tanto prolongar a estrutura monolítica atual quanto transformar
todo o portfólio em uma aplicação React desnecessária.

## Estrutura da home

### Topbar

Topbar flutuante, compacta e translúcida, com navegação para Trabalhos, Sobre,
Contato e Laboratório durante o desenvolvimento. Inclui controles de idioma,
tema e acesso ao LinkedIn. No celular, a navegação deve continuar simples,
operável por toque e teclado e sem cobrir a hero.

### Hero

A apresentação visual existente em desktop e celular é preservada como ponto
de partida. Nome, cargo e posicionamento devem ser entendidos rapidamente. As
ações de projetos, currículo e contato permanecem na primeira composição e
serão reorganizadas por hierarquia, sem remoção antecipada. O acesso à versão
inglesa continua abaixo das ações principais.

### Galeria cinética

A seção redundante de atalhos chamada “Cases selecionados” será removida. Em seu
lugar, imediatamente após a hero, entram duas faixas contínuas de artes:

- primeira faixa em movimento horizontal para a direita;
- segunda faixa em movimento horizontal para a esquerda;
- mistura de imagens fortes dos cases atuais e trabalhos de outros clientes;
- seleção curta, curada e otimizada, sem carregar as 120 imagens existentes;
- pausa em hover e foco;
- interação por teclado onde houver links;
- versão estática equivalente para `prefers-reduced-motion`;
- comportamento responsivo sem cortes que prejudiquem a leitura das artes.

As fontes candidatas incluem os assets já usados nos cases e trabalhos
permitidos encontrados nas pastas de origem `F:\SERV INSPIRA\COIMBRA` e nas
fontes SERV TH indicadas por Lucas. A implementação começa por inventário,
permissão de uso, qualidade e diversidade visual; arquivos de origem não serão
alterados.

### Mini-cases atuais

Os seis projetos existentes serão mantidos inicialmente na mesma ordem. Cada
mini-case deve apresentar informação concreta, evitando texto genérico:

- cliente ou contexto;
- problema ou necessidade;
- papel real de Lucas;
- direção ou solução aplicada;
- principais entregáveis;
- imagens selecionadas;
- resultado verificável, quando houver evidência;
- chamada para visualizar o projeto.

Nenhum case será removido. Ao final da listagem haverá um card “Mais cases em
breve”, preparado para expansão posterior. O portfólio aprofundado de cases
continua sendo um projeto separado e recebe uma chamada própria; os mini-cases
da V2 não serão confundidos com os futuros estudos de caso completos.

### Sobre, experiência e contato

O Sobre deve refletir o posicionamento confirmado no currículo e LinkedIn. A
experiência será resumida com clareza e sem transformar a home em um currículo
integral. A área de contato mantém currículo, e-mail, WhatsApp e LinkedIn. O
LinkedIn também recebe um botão ou ícone acessível na navegação.

### Rodapé

A frase “Portfólio Light para processos seletivos” será removida. O rodapé terá
somente informações úteis, navegação essencial, autoria e estado de idioma.

## Sistema visual

### Cores

A paleta inicial do protótipo será:

- branco principal `#FFFFFF`;
- branco acinzentado `#F5F6F7`;
- cinza muito claro de controles `#E7E9EC`;
- cinza profundo `#24262B`;
- laranja vivo `#FF6A00`;
- fundo escuro `#121316`.

O laranja dessaturado atual não será usado nos botões. Variações necessárias
para hover, bordas e texto serão derivadas desses tokens e só serão aceitas
depois da validação de contraste WCAG.

### Tipografia

- Arial será removida da pilha visual deliberada;
- Inter será usada para leitura, interface e textos funcionais;
- Montserrat será usada para títulos e estrutura;
- Archivo Black será testada com uso restrito em assinaturas editoriais da
  galeria ou dos projetos, sem competir com Montserrat nos títulos principais;
- Poppins não será usada junto com Inter apenas por semelhança; só entra se o
  protótipo demonstrar uma função tipográfica própria.

### Movimento

O movimento faz parte da primeira entrega:

- entrada coordenada da hero;
- duas faixas horizontais em sentidos opostos;
- revelação curta de seções na rolagem;
- microinterações de cards, links e topbar;
- transição de tema;
- cursor personalizado em dispositivos compatíveis;
- desligamento ou simplificação sob `prefers-reduced-motion`.

A animação deve reforçar a apresentação das artes e nunca bloquear leitura,
navegação ou carregamento.

## Internacionalização

Português e inglês serão rotas completas e indexáveis, com:

- `lang`, canonical e `hreflang` coerentes;
- textos fixos, mini-cases, metadados e textos alternativos traduzidos;
- links corretos para currículo online e PDF em cada idioma;
- controle de idioma disponível na hero e na topbar;
- preferência preservada durante a navegação;
- nenhuma dependência de tradução automática do navegador.

## Laboratório V2

O Laboratório será uma rota isolada, disponível como `/laboratorio/` em
português e com equivalente em inglês. Durante o desenvolvimento local, seu
acesso ficará destacado na topbar. Ele demonstra recursos sem interferir na
home:

- modo escuro;
- cursor personalizado;
- integração futura de playlist do Spotify;
- estrutura editorial de blog;
- captura de newsletter;
- demonstração de conteúdo gerenciável por CMS;
- demonstração de formulário que poderia usar Resend;
- objeto 3D funcional e com fallback;
- filtros experimentais;
- variações adicionais de carrossel;
- parallax mais intenso em área controlada.

Cada demonstração terá explicação curta sobre função, implementação, custo,
dependências, acessibilidade e risco. Blog, newsletter, CMS, Resend e 3D serão
protótipos isolados; nenhum serviço pago, banco de dados, credencial ou envio
real será ativado nesta etapa.

Se houver uma URL de desenvolvimento, ela será separada do portfólio publicado,
marcada como versão em desenvolvimento e configurada com `noindex`. A
publicação desse ambiente também exige aprovação explícita.

## Spotify e áudio

O layout reservará um componente para uma playlist escolhida futuramente por
Lucas. Sem URL aprovada, o componente apresenta um estado explicativo e não
carrega mídia. O embed do Spotify terá controle manual porque reprodução
automática não é garantida pelos navegadores ou pela API incorporada.

Se futuramente Lucas fornecer um arquivo de áudio próprio e autorizado, poderá
ser testado o início em volume baixo após a primeira interação do visitante,
sempre com pausa, volume e estado persistente acessíveis.

## Conteúdo e dados

- cases e traduções ficam separados da camada visual;
- o inventário de imagens registra cliente, origem, autorização, proporção,
  texto alternativo e uso pretendido;
- originais permanecem fora da pasta pública quando possível;
- derivados WebP/AVIF são gerados sem sobrescrever as fontes;
- URLs de LinkedIn, WhatsApp, currículo e Spotify ficam em configuração única;
- estados ausentes têm fallback explícito, sem links vazios.

## Documentação do processo e futuro case

O desenvolvimento produzirá documentação reutilizável para um futuro case de
desenvolvimento do portfólio, mantida dentro de `docs/processo-v2/`. O registro
será organizado por etapa e não como transcrição de conversa.

Serão preservados:

- diagnóstico da V1 e problemas que motivaram cada mudança;
- decisões de arquitetura e alternativas descartadas, com justificativas;
- inventário e critérios de curadoria das imagens;
- evolução dos wireframes, tokens e componentes;
- screenshots comparativas em desktop e celular;
- decisões e versões dos textos dos mini-cases;
- implementação de movimento, tema, cursor e Laboratório;
- problemas técnicos relevantes e respectivas soluções;
- resultados de build, links, acessibilidade, Lighthouse e peso de página;
- checklist de publicação e rollback quando essa fase for autorizada;
- créditos, fontes e permissões de assets ou códigos externos.

O material do processo deve distinguir claramente intenção, protótipo,
implementação validada e publicação. Dados sensíveis, credenciais, conversa
bruta e métricas não verificadas não entram na documentação.

## Acessibilidade, desempenho e falhas

- navegação completa por teclado;
- foco visível;
- contraste validado em temas claro e escuro;
- `prefers-reduced-motion` respeitado;
- cursor padrão preservado quando o cursor personalizado falhar;
- imagens com dimensões, carregamento tardio e textos alternativos;
- falha do Spotify não bloqueia a página;
- JavaScript desativado ainda permite acessar conteúdo principal e links;
- Laboratório não aumenta o peso inicial da home;
- erros de mídia e embeds exibem orientação em vez de espaços quebrados.

## Validação

A entrega será construída em fluxo contínuo, mas verificada por componentes:

- build de produção;
- desktop e celular;
- português e inglês;
- teclado e foco;
- temas claro e escuro;
- redução de movimento;
- links e imagens;
- ausência de erros no console;
- Lighthouse e inspeção de peso;
- screenshots comparativas com a V1;
- revisão dos textos dos seis cases;
- confirmação de que a V1 publicada não foi modificada.

## Limites desta implementação

- não publicar nem configurar remote sem autorização específica;
- não ativar serviços externos, envios, banco de dados ou credenciais;
- não alterar as pastas de origem das artes;
- não criar resultados fictícios para os cases;
- não fundir o Light V2 com o portfólio aprofundado de cases;
- não remover nenhum dos seis projetos atuais.
