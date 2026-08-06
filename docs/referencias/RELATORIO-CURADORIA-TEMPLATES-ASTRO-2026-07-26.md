# Curadoria de templates Astro para o Portfólio Lite V2

**Data da pesquisa:** 26 de julho de 2026  
**Escopo:** templates gratuitos e open source, relatos de usuários, saúde técnica, licenças e publicação no GitHub Pages  
**Objetivo:** identificar uma base que permita a Lucas aprender Astro, preservar sua identidade como designer gráfico e criar cases mais fortes sem transformar o portfólio em um projeto de desenvolvimento excessivamente complexo.

## Executive Summary

A principal conclusão é que **não existe um único “melhor template” para o Portfólio Lite V2**. A solução mais adequada é uma composição controlada: usar uma base pequena e compreensível, aproveitar a direção visual de um tema mais elaborado e adotar uma estrutura narrativa de case separada. Isso é coerente com o que usuários de Astro relatam: templates aceleram o começo, mas ficam frustrantes quando escondem muitas dependências, estão desatualizados ou são personalizados antes de a pessoa entender componentes, rotas, conteúdo e build [11][16][17][18].

Se fosse obrigatório escolher apenas um tema completo, **Maria** seria o melhor ponto de partida visual. Ele oferece grade de trabalhos, páginas institucionais, imagens responsivas e um exemplo de case, mas foi escrito para UX/Product Design; portanto, sua linguagem profissional não pode ser reaproveitada literalmente [22]. Para construir o projeto de forma didática, a base mais segura é o **starter oficial Portfolio**, que usa Astro e Content Collections sem acrescentar React ou uma biblioteca extensa de interface [4]. Para a estrutura dos cases, o melhor modelo é **Case**, cuja arquitetura cobre problema, contexto, restrições, abordagem, decisões e resultados [23].

Minha recomendação é: **base técnica simples + gramática visual inspirada em Maria + modelo de case adaptado de Case**. O resultado pode continuar gratuito no GitHub Pages. Astro gera arquivos estáticos, e a documentação oficial mantém uma Action própria para publicar o conteúdo compilado [3]. A V2 não precisa ser hospedada “na Astro”, nem requer Vercel, Netlify ou plano pago.

## Introduction

Foram cruzados quatro tipos de evidência:

1. documentação oficial do Astro e do GitHub, usada para componentes, conteúdo, imagens e deploy [1][2][3][21][27];
2. código, README, licença e estrutura de repositórios de templates;
3. relatos de pessoas que começaram projetos reais, abandonaram templates antigos ou tiveram problemas após atualizações [11][13][14][16][17][20];
4. discussões comunitárias sobre simplicidade, personalização e o papel do portfólio [12][15][19].

O catálogo de temas do Astro foi usado como descoberta, não como selo de qualidade. O próprio catálogo aceita submissões de qualquer pessoa [26]. Assim, presença no catálogo não prova manutenção, documentação, acessibilidade ou adequação ao perfil de Lucas.

### Critérios de avaliação

| Critério | Peso | O que foi observado |
|---|---:|---|
| Adequação visual ao portfólio de design | 25 | espaço para campanhas, direção de arte, peças e imagens grandes |
| Arquitetura de case | 20 | capacidade de explicar contexto, papel, processo, decisões e resultados |
| Facilidade de aprendizado | 15 | número de conceitos adicionais além de HTML/CSS/Astro |
| Saúde e manutenção | 15 | versão atual, documentação, atividade e risco de abandono |
| GitHub Pages | 10 | compatibilidade estática e esforço de configuração de `site`/`base` |
| Licença | 10 | liberdade de adaptar para uso pessoal e profissional |
| Evidência comunitária | 5 | relatos reais, adoção e problemas publicamente documentados |

As notas não representam “qualidade universal”. Elas representam **adequação ao momento atual de Lucas**, que conhece fundamentos de HTML, CSS, Git e GitHub, quer aprender Astro sem se posicionar como desenvolvedor e precisa valorizar trabalho visual.

## Main Analysis

### O que usuários de Astro dizem sobre templates

### 2.1 Templates funcionam melhor como andaime

O conselho mais consistente é entender a estrutura básica do Astro antes de modificar profundamente um template. Em uma discussão específica sobre valer a pena comprar ou usar temas, uma resposta resumiu: “You have to understand Astro.js first before using any template” [11]. A frase não significa estudar todo o framework antes de começar. Significa localizar:

- onde estão páginas e rotas;
- o que é um componente `.astro`;
- onde ficam estilos e tokens;
- como projetos/cases são armazenados;
- como imagens são importadas;
- o que acontece em `npm run build`.

Componentes Astro são blocos reutilizáveis que geram HTML [1]. Essa correspondência direta ajuda quem já conhece HTML e CSS. A dificuldade cresce quando o template adiciona simultaneamente Tailwind, TypeScript, React, Radix UI, MDX, ferramentas de lint e configurações de deploy.

### 2.2 Manutenção importa mais do que a aparência da demo

Um usuário relatou ter comprado um template que não era atualizado desde 2022 e abandoná-lo depois de um dia de tentativa [11]. Issues do AstroPaper mostram dificuldade semelhante ao incorporar atualizações do tema em uma cópia já personalizada [16]. No AstroWind, uma atualização principal do Astro expôs erro de compatibilidade [17].

O aprendizado prático é simples: antes de trocar cor, tipografia e imagens, o template deve passar por:

1. instalação limpa;
2. execução local;
3. build de produção;
4. preview do build;
5. teste de todas as rotas;
6. teste em largura móvel;
7. deploy de ensaio no GitHub Pages.

Se falhar antes da personalização, o problema pertence à base. Se falhar depois, a comparação com o estado inicial será muito mais fácil.

### 2.3 Dependências são custo de aprendizado

Usuários reclamam de temas com muitas dependências [11]. Isso não torna React, Tailwind ou TypeScript ruins. O problema é aprender várias camadas ao mesmo tempo sem uma necessidade do projeto.

Para Lucas, a pergunta correta não é “qual template tem mais recursos?”, mas “quais recursos melhoram a apresentação do trabalho?”. Um portfólio estático não precisa, por padrão, de uma biblioteca React, sistema de componentes corporativo, CMS remoto, autenticação ou JavaScript de aplicação.

Tailwind pode acelerar temas prontos, mas adiciona uma forma própria de estilizar. A comunidade e a documentação registraram que a relação entre Tailwind e conteúdo Markdown nem sempre é óbvia [18]. Se a V2 usar Tailwind, ele deve ser tratado como uma decisão consciente, não como requisito do Astro.

### 2.4 O tema não pode aparecer mais do que o autor

Em feedback sobre portfólios, aparece a recomendação de transformar o tema e adicionar identidade própria [12]. Outra discussão defende que um layout básico que não distraia já cumpre o papel [19]. Para um designer, isso é especialmente importante: copiar uma estética popular pode comunicar domínio técnico, mas também pode fazer o portfólio parecer um clone.

O visual laranja/preto atual pode continuar como ponto de reconhecimento. A evolução deveria vir de:

- tipografia mais editorial;
- melhor ritmo entre texto e imagem;
- capa e metadados consistentes para cada case;
- grid mais flexível;
- páginas de projeto com raciocínio, não apenas galeria;
- microinterações discretas;
- sistema responsivo e legível.

## 3. Ranking para o Portfólio Lite V2

| Posição | Candidato | Nota | Melhor uso | Principal risco |
|---:|---|---:|---|---|
| 1 | Maria | 87/100 | referência visual e possível base integral | linguagem e estrutura herdadas de UX/Product |
| 2 | Portfolio oficial do Astro | 84/100 | base didática e técnica | visual genérico e cases superficiais |
| 3 | Case | 81/100 | arquitetura narrativa dos cases | estética e semântica voltadas a engenharia |
| 4 | Monolume | 77/100 | referência editorial/brutalista | estética pode dominar os trabalhos |
| 5 | Letter | 76/100 | deploy e configuração para GitHub Pages | estrutura maior e visual pouco expressivo |
| 6 | Polaris | 74/100 | referência visual e cases MDX | React, Radix, TypeScript e Tailwind aumentam a complexidade |
| 7 | AstroWind | 69/100 | biblioteca de padrões e referência técnica | amplo demais para um portfólio Lite |
| 8 | BracoZS Starter | 68/100 | esqueleto técnico moderno | projeto novo, com pouca prova comunitária |

### Verificação técnica complementar

Uma subamostra foi instalada e compilada em Windows para diferenciar aparência de funcionamento. **Dante** gerou o build completo sem falha; **AstroWind** também compilou corretamente. **AstroPaper** gerou 45 páginas, sitemap e índice Pagefind, mas o script terminou com erro porque o `package.json` usa o comando Unix `cp`, indisponível no CMD do Windows. Isso é uma fricção cross-platform corrigível, não uma falha do Astro ou do conteúdo. **Gothsec** instalou o lockfile, mas o pnpm atual bloqueou scripts nativos até aprovação explícita, uma exigência de segurança/tooling. **Astrofy** apresentou lockfile antigo incompatível com pnpm atual, reforçando o sinal de envelhecimento. Todos os oito demos inspecionados responderam HTTP 200 na data da pesquisa.

Esse teste reforça dois princípios do ranking: saúde técnica deve incluir build real, e um projeto “funcionando na demo” pode ainda exigir correções específicas no ambiente de Lucas. Ele também mostra que Dante é tecnicamente mais sólido do que sua posição no ranking sugere; a posição inferior decorre de licença GPL e foco editorial, não de qualidade de código.

### 3.1 Maria — melhor base visual

**Veredito:** melhor candidato se a intenção for começar de um tema completo.

Maria foi criado como portfólio para UI/UX e Product Designers. Inclui página inicial trabalhada, listagem paginada de projetos, About, Resume, modos claro/escuro, MDX, sitemap, metadados sociais e imagens responsivas processadas pelo Astro [22]. A hierarquia editorial, as miniaturas grandes e a separação de páginas combinam com campanhas, direção de arte e projetos multimodais.

O ponto positivo é que a estrutura visual aceita bem uma adaptação para design gráfico. O ponto crítico é semântico: o tema foi construído para outra especialidade. Textos, nomes de seções, descrições e exemplos devem ser removidos, não apenas “ajustados”. O repositório informa que existe somente um case plenamente montado; outros cards são placeholders [22]. Isso significa que ele oferece um modelo, não uma biblioteca completa de cases.

**O que vale aproveitar:**

- página Work e grid de projetos;
- ritmo de imagens;
- cabeçalho persistente;
- estrutura About/Resume;
- tratamento responsivo;
- SEO e imagens sociais;
- um esqueleto inicial de case.

**O que deve ser retirado ou refeito:**

- linguagem de UX/Product;
- cookie banner, se nenhum analytics/cookie não essencial for usado;
- páginas legais genéricas não verificadas;
- textos de ferramentas e competências do autor fictício;
- demo de case como conteúdo final;
- configurações exclusivas de Vercel/Netlify, se o alvo for apenas GitHub Pages.

### 3.2 Portfolio oficial — melhor para aprender

**Veredito:** base recomendada se a prioridade for entender o que está sendo construído.

O starter oficial é mais próximo da proposta original do Astro: componentes simples, CSS e coleção de projetos [4]. Content Collections são apropriadas para manter vários cases com a mesma estrutura e validar campos obrigatórios [2]. Isso permitiria cadastrar, por exemplo:

- título;
- cliente ou contexto;
- ano;
- papel de Lucas;
- entregáveis;
- ferramentas;
- uso de IA;
- desafio;
- processo;
- resultado;
- imagens;
- destaque na home.

A vantagem é didática. Lucas pode olhar a pasta e entender o caminho entre arquivo de conteúdo, página dinâmica e componente. A desvantagem é que a direção visual precisará ser criada. Isso não é necessariamente ruim: para um designer, construir a camada visual a partir de uma base pequena pode resultar em identidade mais autoral e menos “cara de template”.

### 3.3 Case — melhor estrutura para cases

**Veredito:** não usar visualmente como está; adaptar seu modelo editorial.

Case é o candidato mais forte para explicar raciocínio. Ele organiza projetos em problema, contexto, restrições, abordagem, decisões, alternativas, resultados e aprendizados [23]. Embora tenha sido escrito para engenheiros, a estrutura pode ser traduzida para design:

| No tema original | Adaptação para Lucas |
|---|---|
| problema técnico | desafio de comunicação ou campanha |
| restrições arquiteturais | prazo, formatos, marcas, verba, canais |
| decisões técnicas | direção visual, conceito, hierarquia, linguagem |
| alternativas | rotas criativas exploradas e descartadas |
| impacto mensurável | volume entregue, eficiência, aprovação, alcance disponível |
| aprendizados | evolução do fluxo, IA aplicada e próximos passos |

Essa adaptação aumenta a credibilidade sem transformar cada trabalho em uma tese. Um case curto pode usar apenas contexto, papel, solução e resultado. Um case principal pode mostrar decisões e processo.

### 3.4 Monolume — melhor referência editorial

**Veredito:** bom para retirar padrões visuais, não precisa ser a fundação.

Monolume combina tipografia forte, páginas de projetos e componentes separados [24]. Sua estrutura possui Hero, Cards, Header, Projects e Content Collections. Isso facilita estudar peças isoladas. A estética brutalista/editorial pode conversar com o preto e laranja atual, mas deve ser moderada para não competir com as campanhas.

É um candidato melhor para um “moodboard de código” do que para clonagem integral. Vale observar escala tipográfica, contraste, bordas, grid e ritmo. Não é necessário importar blog ou formulário de contato. Em GitHub Pages, um formulário funcional dependeria de serviço externo; um botão de e-mail/LinkedIn é mais simples e suficiente para a V2.

### 3.5 Letter — melhor prova de GitHub Pages

**Veredito:** tecnicamente interessante, visualmente insuficiente para ser a base final.

Letter documenta `BASE_URL` para publicação em subdiretório e demonstra deploy no GitHub Pages [25]. Isso é útil porque um projeto publicado em `usuario.github.io/repositorio` precisa tratar o caminho-base corretamente. O tema também agrega TypeScript, MDX, internacionalização, lint, formatação e Lighthouse CI. São bons recursos, mas aumentam o volume de configuração.

Se houver intenção real de ter portfólio em português e inglês no curto prazo, Letter sobe no ranking. Caso contrário, vale usar sua configuração de deploy como referência e manter a base menor.

### 3.6 Polaris — visual forte, complexidade prematura

**Veredito:** excelente para inspeção e inspiração; não é a melhor primeira base.

Polaris tem páginas de projeto em MDX, imagem otimizada e apresentação moderna [6]. Porém, sua versão atual combina Astro 7, React, Radix UI, TypeScript, Tailwind, MDX, Sharp e ferramentas adicionais. O resultado é tecnicamente rico, mas cada ajuste pode atravessar mais camadas.

Isso o torna interessante para uma fase futura, quando Lucas já souber distinguir quais partes realmente precisam de React. Na V2 inicial, a mesma aparência pode ser reproduzida com componentes Astro e CSS, reduzindo dependências e custo de manutenção.

### 3.7 AstroWind — popular, maduro e grande demais

AstroWind é citado positivamente por iniciantes e por usuários que lançaram projetos reais. Há relato de que o template deixou o primeiro projeto mais fluido, além de recomendações recorrentes para sites com blog e landing pages. Ao mesmo tempo, issues registram problemas após atualização e até diferenças em instalação nova [17]. Seu próprio escopo é amplo [7].

Para uma empresa, landing page com muitas seções ou site de conteúdo, AstroWind pode ser excelente. Para o Portfólio Lite V2, traz componentes e decisões que Lucas talvez precise remover. A melhor utilização é consultar seus padrões de SEO, navegação e organização, não herdar o projeto inteiro.

## 4. Templates que eu não escolheria como base principal

### Dante

Dante é maduro e interessante para escrita longa, blog e portfólio [8]. Porém, é editorial/blog-first e usa licença GPL-3.0. Não é proibido usar, mas MIT oferece uma adaptação mais simples para este caso. Serve como referência de artigos e legibilidade, não como primeira escolha.

### Gothsec Astro Portfolio

Possui boa presença visual, React, TypeScript e Tailwind [9]. O efeito tecnológico pode combinar superficialmente com IA, mas tende a posicionar o autor como desenvolvedor e pode envelhecer rápido. Para Lucas, a tecnologia deve apoiar as campanhas, não substituir a identidade de designer gráfico.

### Starfolio

Centraliza conteúdo em um arquivo tipado e facilita atualização [10]. Porém, sua semântica é de currículo de desenvolvedor, com stack e carreira técnica no centro. Essa organização pode ser estudada, mas o posicionamento não corresponde ao perfil desejado.

### AstroPaper e Astrofy

AstroPaper é respeitado para blog minimalista, mas os relatos de atualização manual mostram o custo de manter uma cópia altamente customizada [16]. Astrofy possui caso documentado de uso real [20], mas a apresentação típica também é fortemente associada a portfólio de desenvolvedor. Ambos são mais úteis como estudo de organização do que como base visual.

## Synthesis

### Recomendação para Lucas: uma V2 modular

### Arquitetura recomendada

```text
Starter oficial do Astro
|-- componentes simples e compreensíveis
|-- Content Collection "cases"
|-- deploy oficial no GitHub Pages
|-- referências visuais de Maria
|   |-- grid de trabalhos
|   |-- proporção e ritmo das imagens
|   |-- páginas Work / About
|   `-- tratamento responsivo
`-- estrutura editorial adaptada de Case
    |-- contexto
    |-- desafio
    |-- papel e entregáveis
    |-- direção visual e processo
    |-- IA aplicada, quando real
    |-- resultados disponíveis
    `-- aprendizados
```

Esse arranjo reduz o risco de:

- aprender Astro, React, Tailwind e uma biblioteca de UI ao mesmo tempo;
- herdar um posicionamento de UX/UI ou engenharia;
- depender de componentes que o portfólio não usa;
- ficar preso a uma demo;
- dificultar upgrades futuros.

### Modelo de conteúdo para cada case

Um schema inicial pode usar os seguintes campos:

| Campo | Obrigatório? | Função |
|---|---|---|
| `title` | sim | nome do projeto/campanha |
| `summary` | sim | explicação curta para o card |
| `year` | sim | contexto temporal |
| `role` | sim | papel real de Lucas |
| `deliverables` | sim | peças, formatos e canais |
| `cover` | sim | imagem principal otimizada |
| `challenge` | sim | problema de comunicação |
| `solution` | sim | conceito e direção adotada |
| `process` | não | processo apenas quando acrescentar prova |
| `aiUsage` | não | IA aplicada de forma específica e verificável |
| `results` | não | métricas, ganhos ou resultado observável |
| `gallery` | sim | conjunto de imagens do projeto |
| `featured` | sim | controla destaque na home |

O uso de Content Collections traz estrutura, validação e consistência [2][15]. O objetivo não é tecnicizar o portfólio, mas impedir que um case fique sem papel, contexto ou resultado.

## 6. GitHub Pages: o que muda e o que permanece

A hospedagem pode permanecer exatamente no GitHub Pages. O fluxo muda apenas na origem dos arquivos:

1. Lucas edita componentes, CSS, conteúdo e imagens no repositório;
2. a Action oficial executa o build do Astro;
3. o Astro gera o diretório estático;
4. o GitHub Pages publica esse resultado.

Astro não é uma hospedagem obrigatória. É a ferramenta que transforma o projeto em HTML, CSS, JavaScript e imagens finais. A documentação confirma que GitHub Pages aceita sites Astro estáticos e pré-renderizados [3]. O GitHub Pages não executa linguagens de servidor [21], mas isso não limita um portfólio convencional.

Para endereço em subpasta, será necessário configurar:

- `site`: URL pública;
- `base`: nome do repositório, quando a URL for `usuario.github.io/repositorio`;
- links e assets respeitando o caminho-base;
- workflow oficial de deploy.

Não há custo obrigatório. Continuam opcionais:

- domínio próprio;
- analytics;
- formulário externo;
- CMS remoto;
- hospedagem alternativa.

## 7. Armadilhas práticas e como evitá-las

### Alterar o visual antes de validar o build

Faça um commit do template limpo, execute `npm run build` e publique uma prévia técnica. Isso cria um ponto de comparação e isola problemas.

### Copiar a profissão do autor da demo

Maria fala de UX/Product, Polaris de UI/Frontend e vários temas exibem stacks de desenvolvedor. Nenhum desses termos deve permanecer por conveniência. O portfólio deve sustentar Designer Gráfico Pleno, campanhas digitais, direção de arte, design para redes sociais, IA generativa, Prompt Engineering e automação criativa.

### Importar recursos sem necessidade

Blog, formulário, cookies, analytics, internacionalização e modo escuro só devem entrar se resolverem uma necessidade definida. Cada recurso aumenta teste e manutenção.

### Usar imagens em `public/` esperando otimização

Arquivos em `public/` são copiados sem processamento [27]. As imagens principais dos cases devem usar a pipeline de imagens do Astro quando a intenção for gerar tamanhos e formatos responsivos.

### Tratar o template como atualização automática

Depois de copiar ou criar a partir de um tema, o projeto passa a ser uma base própria. Atualizações do autor não se incorporam automaticamente e merges podem conflitar com personalizações [16]. Por isso, quanto menor e mais entendida a base, menor a dependência.

### Construir todos os cases de uma vez

A V2 deve começar com um único case completo e dois ou três cards menores. Isso testa o schema, o ritmo visual e o deploy antes de migrar todo o portfólio. Usuários relatam que começar de uma base simples ajudou a finalmente publicar, em vez de continuar redesenhando [14].

## 8. Plano de teste recomendado

### Fase 1 — laboratório técnico

- criar uma branch ou repositório de V2;
- instalar o starter oficial;
- manter uma página inicial e um case fictício;
- configurar GitHub Pages;
- validar build e caminhos;
- documentar onde ficam componentes, conteúdo e estilos.

### Fase 2 — direção visual

- comparar Maria, Monolume e Polaris como referências;
- definir tokens: cores, tipografia, espaçamento, bordas e grid;
- preservar sinais reconhecíveis do portfólio atual;
- construir apenas Header, Hero, Project Card e Footer;
- testar desktop e celular.

### Fase 3 — case real

- escolher um projeto com boa documentação;
- adaptar o modelo de Case para linguagem de design;
- inserir imagens processadas pelo Astro;
- explicar uso de IA somente onde houve aplicação real;
- testar leitura curta e longa.

### Fase 4 — decisão de continuidade

Após a primeira publicação, avaliar:

- foi possível editar conteúdo sem mexer no layout?
- um novo case pode ser criado copiando apenas um arquivo?
- o build permanece simples?
- o site ficou mais rápido e claro?
- o visual parece de Lucas ou do template?
- recrutadores entendem o papel e os resultados?

Se as respostas forem positivas, migrar os demais trabalhos. Se a camada de Tailwind estiver dificultando mais do que ajudando, manter CSS convencional. Se a estrutura simples limitar recursos realmente necessários, então avaliar Polaris ou partes do AstroWind em uma fase posterior.

## Recommendations

**Decisão recomendada:** não instalar imediatamente o tema mais completo. Primeiro criar uma prova de conceito com o Portfolio oficial. Em seguida, reconstruir quatro componentes com referência em Maria e usar o schema editorial de Case.

**Se Lucas quiser experimentar um tema pronto integralmente:** Maria.

**Se quiser aprender Astro com menos distrações:** Portfolio oficial.

**Se quiser melhorar a apresentação dos cases:** copiar a lógica editorial de Case.

**Se quiser explorar uma direção visual mais ousada:** estudar Monolume.

**Se quiser provar GitHub Pages com configuração já documentada:** estudar Letter.

**O que eu evitaria agora:** Polaris ou AstroWind como fundação, não por falta de qualidade, mas porque entregam mais camadas do que o Portfólio Lite V2 precisa.

O benefício central da Astro para Lucas não é “ter um template bonito”. É transformar o portfólio em um sistema reutilizável: componentes visuais consistentes, cases estruturados, imagens otimizadas e publicação automática. Esse aprendizado poderá ser reaproveitado no case maior no futuro sem obrigar uma mudança de hospedagem.

## Claims-Evidence Table

| Conclusão central | Evidência principal | Confiança |
|---|---|---|
| A V2 pode permanecer no GitHub Pages | documentação oficial do Astro e GitHub [3][21] | alta |
| Uma base pequena é mais apropriada ao aprendizado atual | componentes oficiais e relatos sobre dependências/customização [1][11][18] | alta |
| Maria é o melhor candidato visual integral | recursos, estrutura e case demonstrados no repositório [22] | média-alta |
| Case oferece a melhor narrativa de projeto | schema explícito de problema, decisões e resultados [23] | alta |
| Content Collections são adequadas aos cases | documentação oficial e experiência comunitária [2][15] | alta |
| AstroWind é bom, mas amplo demais para esta V2 | escopo do projeto, relatos positivos e issues de upgrade [7][17] | média-alta |
| O template deve ser transformado visualmente | feedback comunitário sobre identidade e não distração [12][19] | média |

## Counterevidence Register

- **AstroWind pode funcionar para iniciantes.** Há relatos positivos de pessoas com pouco JavaScript. Portanto, ele não foi classificado como “difícil demais” em termos absolutos; foi classificado como maior do que a necessidade desta V2.
- **Polaris entrega uma apresentação mais pronta.** Seu conjunto React/Radix/TypeScript/Tailwind pode ser vantajoso para quem já domina essas ferramentas. A nota menor reflete o custo de aprendizado de Lucas, não falta de qualidade.
- **Dante é tecnicamente forte.** O build local limpo e a manutenção recente contradizem qualquer leitura de que GPL ou foco editorial significam projeto inferior. A restrição é de adequação e licença.
- **Um starter simples exige mais trabalho visual.** A recomendação do Portfolio oficial troca velocidade visual inicial por compreensão e autoria. Se a prioridade mudar para publicar a V2 no menor prazo possível, Maria passa a ser a base integral preferida.
- **Estrelas e comunidade pequena não invalidam temas novos.** Maria possui menos histórico que AstroWind, mas seu código e documentação são atuais. Por isso, recebeu confiança média-alta e ainda exige laboratório local.

## Limitations

- Relatos comunitários são evidência de experiência, não testes controlados.
- Popularidade por estrelas não mede adequação profissional nem qualidade visual.
- Temas novos como Maria e Polaris possuem menos histórico comunitário que AstroWind ou AstroPaper.
- Algumas demos usam Vercel, mas isso não implica dependência técnica de Vercel; a compatibilidade com GitHub Pages decorre da saída estática e da configuração correta.
- O ranking foi feito para o perfil, conhecimento e objetivo de Lucas. Um desenvolvedor React ou uma empresa com CMS teria outro ranking.
- Foi feita instalação comparativa de uma subamostra, não de todos os finalistas. Maria, Case, Monolume, Letter e Polaris foram avaliados por repositório, documentação e demo, mas ainda precisam de um laboratório local antes de qualquer adoção.

## Methodology

A pesquisa foi realizada como curadoria comparativa, não como benchmark exaustivo de performance. As evidências foram registradas em arquivos JSONL separados para fontes, trechos e claims. A avaliação priorizou fontes oficiais para comportamento técnico e fontes comunitárias para dificuldades de uso, manutenção e personalização. Afirmações sobre adequação ao portfólio são inferências explícitas a partir da arquitetura dos temas e do contexto profissional informado por Lucas.

## Bibliography

[1] (2026). [Astro Components](https://docs.astro.build/en/basics/astro-components/)

[2] (2026). [Content collections](https://docs.astro.build/en/guides/content-collections/)

[3] (2026). [Deploy your Astro Site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

[4] (2026). [Portfolio — official Astro starter](https://astro.build/themes/details/portfolio/)

[5] (2026). [BracoZS astro-starter-portfolio](https://github.com/BracoZS/astro-starter-portfolio)

[6] (2026). [Polaris](https://github.com/educlopez/Polaris)

[7] (2026). [AstroWind](https://github.com/arthelokyo/astrowind)

[8] (2026). [Dante Astro Theme](https://github.com/JustGoodUI/dante-astro-theme)

[9] (2026). [Gothsec Astro Portfolio](https://github.com/Gothsec/Astro-portfolio)

[10] (2026). [Starfolio](https://github.com/webrating/starfolio)

[11] (2026). [Are Astro Templates worth it?](https://www.reddit.com/r/astrojs/comments/1qxsgik/are_astro_templates_worth_it/)

[12] (2024). [Built My First Portfolio Website with Astro](https://www.reddit.com/r/astrojs/comments/1hfhqb8/built_my_first_portfolio_website_with_astro/)

[13] (2026). [Built my portfolio website using Astro 6](https://www.reddit.com/r/astrojs/comments/1sy3pmx/built_my_portfolio_website_using_astro_6_cf_and/)

[14] (2026). [I stopped redesigning and finally shipped my Astro portfolio](https://www.reddit.com/r/astrojs/comments/1tkxt5p/i_stopped_redesigning_and_finally_shipped_my/)

[15] (2026). [What's the advantage of using content collections?](https://www.reddit.com/r/astrojs/comments/1qg6tlz/whats_the_advantage_of_using_content_collections/)

[16] (2024). [AstroPaper — Guide on how to upgrade versions](https://github.com/satnaing/astro-paper/issues/220)

[17] (2024). [AstroWind currentPage error after Astro 5 update](https://github.com/arthelokyo/astrowind/issues/575)

[18] (2023). [Styling rendered Markdown using Tailwind](https://github.com/withastro/docs/issues/4367)

[19] (2024). [Ask HN: How to create a portfolio without design skills?](https://news.ycombinator.com/item?id=41094187)

[20] (2023). [How I Build This Site with Astrofy](https://www.zxning.com/blog/about-this-site/)

[21] (2026). [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

[22] (2026). [Maria — Astro Portfolio Template](https://github.com/xocothemes/maria)

[23] (2026). [Case — Portfolio Theme for Astro](https://github.com/erlandv/case)

[24] (2026). [Monolume](https://github.com/heshify/monolume)

[25] (2026). [Letter Portfolio](https://github.com/riceball-tw/letter)

[26] (2026). [Astro Themes](https://astro.build/themes/)

[27] (2026). [Images — Astro documentation](https://docs.astro.build/en/guides/images/)
