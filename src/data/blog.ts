import type { Locale } from '@/i18n/config';
import { sitePath } from '@/utils/paths';

type Localized = Record<Locale, string>;
type Image = { src: string; alt: Localized };

export type BlogPost = {
  slug: string;
  date: string;
  dateISO: string;
  topics: BlogTopic[];
  category: Localized;
  title: Localized;
  excerpt: Localized;
  body: Record<Locale, string[]>;
  images: Image[];
  status: 'published';
  sourceRef: string;
};

export type BlogTopic = 'portfolio' | 'creative-workbench' | 'applied-ai' | 'research';

const posts: BlogPost[] = [
  {
    slug: 'primeiro-link-publico', date: '13 JUN 2026', dateISO: '2026-06-13', topics: ['portfolio'], status: 'published',
    category: { pt: 'Portfólio V1', en: 'Portfolio V1' }, sourceRef: 'git:7b797f4; obsidian:deep-projeto-portfolio-lucas-coimbra',
    title: { pt: 'Um portfólio publicável antes de um portfólio perfeito', en: 'A publishable portfolio before a perfect portfolio' },
    excerpt: { pt: 'A urgência por um link compartilhável transformou um acervo disperso em uma primeira versão online.', en: 'The need for a shareable link turned a scattered body of work into a first online version.' },
    body: {
      pt: ['Atualizar o Behance exigia um tempo que não estava disponível. O problema imediato era mais direto: reunir trabalhos, currículo e contato em um endereço que pudesse ser enviado rapidamente.', 'O Codex entrou como apoio de pesquisa, organização e desenvolvimento. A primeira decisão importante foi reduzir o escopo e publicar uma versão Light, reservando a proposta mais ambiciosa para uma etapa posterior.'],
      en: ['Updating Behance required time that was not available. The immediate problem was more direct: bring work, résumé and contact into one address that could be shared quickly.', 'Codex supported research, organization and development. The first important decision was to reduce scope and publish a Light version, leaving the more ambitious proposal for a later stage.'],
    }, images: [
      { src: '/assets/blog/primeiro-link-publico/v1-desktop.webp', alt: { pt: 'Primeira versão pública do portfólio em desktop', en: 'First public desktop version of the portfolio' } },
    ],
  },
  {
    slug: 'refino-mobile-v1', date: '15 JUN 2026', dateISO: '2026-06-15', topics: ['portfolio'], status: 'published',
    category: { pt: 'Responsividade', en: 'Responsive design' }, sourceRef: 'git:ad201d4,63e7db0,dff5c98,a0cb483,04897be,fbf02e3,8611117',
    title: { pt: 'Publicar foi o começo: a primeira grande rodada mobile', en: 'Publishing was the beginning: the first major mobile pass' },
    excerpt: { pt: 'Hero, proporção das galerias, contato e currículo foram corrigidos em uma sequência curta de testes reais.', en: 'Hero, gallery proportions, contact and résumé were corrected through a short sequence of real tests.' },
    body: {
      pt: ['O primeiro deploy revelou problemas que a tela de desenvolvimento não mostrava com a mesma clareza. A composição mobile, a qualidade das imagens e o enquadramento das artes pediram várias correções no mesmo dia.', 'A galeria terminou com recortes 3:4 para manter o grid organizado e visualização completa no lightbox. Essa separação entre miniatura e imagem ampliada virou uma regra durável do projeto.'],
      en: ['The first deployment revealed issues that were less visible during development. Mobile composition, image quality and artwork framing required several corrections on the same day.', 'The gallery settled on 3:4 crops for an organized grid and complete images in the lightbox. Separating thumbnails from enlarged artwork became a lasting project rule.'],
    }, images: [
      { src: '/assets/blog/refino-mobile-v1/v1-mobile.webp', alt: { pt: 'Hero da primeira versão do portfólio adaptado para celular', en: 'First portfolio hero adapted for mobile' } },
      { src: '/assets/blog/refino-mobile-v1/v1-cases-mobile.webp', alt: { pt: 'Seção de cases da primeira versão em tela mobile', en: 'First version case section on a mobile screen' } },
    ],
  },
  {
    slug: 'auditoria-e-novo-posicionamento', date: '26 JUL 2026', dateISO: '2026-07-26', topics: ['portfolio', 'applied-ai'], status: 'published',
    category: { pt: 'Posicionamento', en: 'Positioning' }, sourceRef: 'thread:019fa054-98e4-7761-882a-7dcbcbb0686e; git:5b798c5,617887d',
    title: { pt: 'Do ajuste do LinkedIn à necessidade de provar processo', en: 'From a LinkedIn review to the need to prove process' },
    excerpt: { pt: 'A revisão do perfil mostrou que listar competências não bastava. Era preciso construir evidências públicas de raciocínio e execução.', en: 'The profile review showed that listing skills was not enough. Public evidence of reasoning and execution was needed.' },
    body: {
      pt: ['A auditoria do LinkedIn organizou competências por experiência e removeu associações que não tinham comprovação suficiente. O mesmo critério passou a orientar o portfólio: posicionamento precisava estar apoiado por trabalhos, decisões e resultados verificáveis.', 'Dessa discussão surgiram dois caminhos complementares. A V2 continuaria rápida e visual. Um segundo portfólio, separado, explicaria processos, IA aplicada, automações, testes, erros e revisão humana.'],
      en: ['The LinkedIn review organized skills by experience and removed associations without enough evidence. The same standard began guiding the portfolio: positioning needed support from work, decisions and verifiable outcomes.', 'Two complementary paths emerged. V2 would remain fast and visual. A separate portfolio would explain processes, applied AI, automation, tests, errors and human review.'],
    }, images: [
      { src: '/assets/blog/auditoria-e-novo-posicionamento/perfil-linkedin-auditado.webp', alt: { pt: 'Perfil do LinkedIn revisado durante a auditoria de posicionamento', en: 'LinkedIn profile reviewed during the positioning audit' } },
      { src: '/assets/blog/auditoria-e-novo-posicionamento/competencias-antes.webp', alt: { pt: 'Competências associadas ao perfil antes da organização', en: 'Skills associated with the profile before organization' } },
      { src: '/assets/blog/auditoria-e-novo-posicionamento/competencias-depois.webp', alt: { pt: 'Competências reorganizadas após a auditoria', en: 'Skills reorganized after the audit' } },
    ],
  },
  {
    slug: 'hermes-como-candidato-a-case', date: '26 JUL 2026', dateISO: '2026-07-26', topics: ['research', 'applied-ai'], status: 'published',
    category: { pt: 'Pesquisa aplicada', en: 'Applied research' }, sourceRef: 'obsidian:projeto-hermes-multiagente-bibliotecario-conteudos',
    title: { pt: 'Hermes: quando uma pesquisa já revela um futuro case', en: 'Hermes: when research already reveals a future case' },
    excerpt: { pt: 'Uma arquitetura para transformar Telegram, agentes especializados e memória em uma biblioteca de conhecimento.', en: 'An architecture for turning Telegram, specialized agents and memory into a knowledge library.' },
    body: {
      pt: ['A pesquisa mapeou uma arquitetura com roteamento, perfis especializados, Kanban e catálogo separado da memória pessoal. O objetivo é receber conteúdos, analisar, classificar e recuperar referências úteis para projetos reais.', 'O projeto ainda não é um case concluído. Ele entra no histórico como pesquisa aplicada e candidato, com problemas, riscos, fontes e próximos testes já documentados.'],
      en: ['The research mapped an architecture with routing, specialized profiles, Kanban and a catalog separate from personal memory. The goal is to receive, analyze, classify and retrieve references useful to real projects.', 'The project is not a completed case yet. It enters the history as applied research and a candidate, with problems, risks, sources and next tests already documented.'],
    }, images: [
      { src: '/assets/blog/hermes-como-candidato-a-case/hermes-resumo-pesquisa.webp', alt: { pt: 'Resumo executivo da pesquisa do projeto Hermes', en: 'Executive summary of the Hermes project research' } },
      { src: '/assets/blog/hermes-como-candidato-a-case/hermes-arquitetura.webp', alt: { pt: 'Trecho da arquitetura multiagente recomendada para o Hermes', en: 'Excerpt from the recommended multi-agent architecture for Hermes' } },
    ],
  },
  {
    slug: 'mivybook-bancada-de-acabamento', date: '29 JUL 2026', dateISO: '2026-07-29', topics: ['creative-workbench', 'applied-ai'], status: 'published',
    category: { pt: 'Creative technology', en: 'Creative technology' }, sourceRef: 'obsidian:portfolio-case-mivybook-megazord-dashboard',
    title: { pt: 'Mivybook: a automação produz, o olhar humano finaliza', en: 'Mivybook: automation produces, human judgment finishes' },
    excerpt: { pt: 'O dashboard nasceu para editar o HTML e CSS real dos carrosséis, sem tentar substituir uma ferramenta gráfica completa.', en: 'The dashboard was created to edit the actual HTML and CSS of carousels without trying to replace a full graphic tool.' },
    body: {
      pt: ['Uma primeira abordagem foi descartada por baixa usabilidade. A nova direção separou geração e acabamento: a automação cria a base e uma bancada controlada permite ajustes finos, persistentes e reversíveis.', 'O material já possui inventário de decisões e uma estrutura inicial de case. Ainda faltam seleção final de screenshots, medições de ganho de tempo e confirmação de quais materiais podem ser publicados.'],
      en: ['An initial approach was discarded because of poor usability. The new direction separated generation and finishing: automation creates the base and a controlled workbench enables fine, persistent and reversible adjustments.', 'The project already has a decision inventory and an initial case structure. Final screenshots, time measurements and confirmation of publishable materials are still required.'],
    }, images: [
      { src: '/assets/blog/mivybook-bancada-de-acabamento/dashboard-home.webp', alt: { pt: 'Dashboard da bancada de conteúdo Mivybook', en: 'Mivybook content workbench dashboard' } },
      { src: '/assets/blog/mivybook-bancada-de-acabamento/editor-canvas.webp', alt: { pt: 'Editor visual da bancada de acabamento Mivybook', en: 'Visual editor in the Mivybook finishing workbench' } },
      { src: '/assets/blog/mivybook-bancada-de-acabamento/project-slides.webp', alt: { pt: 'Visão dos slides de um projeto na bancada Mivybook', en: 'Project slide overview in the Mivybook workbench' } },
    ],
  },
  {
    slug: 'fundacao-da-v2', date: '04 AGO 2026', dateISO: '2026-08-04', topics: ['portfolio', 'applied-ai'], status: 'published',
    category: { pt: 'Portfólio V2', en: 'Portfolio V2' }, sourceRef: 'git:74990c9,5aa9856,b565c66,88d183d,b457535,2189d67,db40afd',
    title: { pt: 'A V2 saiu do planejamento e virou um sistema bilíngue', en: 'V2 moved from planning into a bilingual system' },
    excerpt: { pt: 'Astro, conteúdo estruturado, animações e testes deram forma à evolução do Portfólio Light.', en: 'Astro, structured content, motion and tests shaped the evolution of the Light Portfolio.' },
    body: {
      pt: ['A implementação preservou a força do hero e substituiu a seção redundante de atalhos por duas faixas cinéticas de trabalhos. Os seis cases ganharam dados estruturados, conteúdo em português e inglês e expansão progressiva.', 'A V2 nasceu animada, mas com movimento reduzido respeitado desde a base. Testes automatizados passaram a verificar conteúdo, responsividade, temas, modais e integridade das galerias.'],
      en: ['The implementation preserved the strength of the hero and replaced the redundant shortcut section with two kinetic streams of work. Six cases gained structured data, Portuguese and English content and progressive expansion.', 'V2 was built with motion from the start while respecting reduced-motion preferences. Automated tests began checking content, responsiveness, themes, modals and gallery integrity.'],
    }, images: [
      { src: '/assets/blog/fundacao-da-v2/v2-home-desktop.webp', alt: { pt: 'Home publicada do Portfólio V2 em português', en: 'Published Portfolio V2 home page in Portuguese' } },
      { src: '/assets/blog/fundacao-da-v2/v2-home-english.webp', alt: { pt: 'Versão em inglês da home do Portfólio V2', en: 'English version of the Portfolio V2 home page' } },
    ],
  },
  {
    slug: 'critica-visual-em-ciclos', date: '05 AGO 2026', dateISO: '2026-08-05', topics: ['portfolio'], status: 'published',
    category: { pt: 'Direção visual', en: 'Visual direction' }, sourceRef: 'git:f631eae,d7c8d2f,0c39da5,fc109ba,d54ee35',
    title: { pt: 'A interface evoluiu por crítica visual em contexto real', en: 'The interface evolved through visual critique in real context' },
    excerpt: { pt: 'Topbar, transição diagonal, galerias, Sobre e blog foram refinados a partir da página em uso.', en: 'Topbar, diagonal transition, galleries, About and blog were refined from the page in use.' },
    body: {
      pt: ['As decisões não vieram de uma única entrega fechada. Cada revisão apontou problemas de ritmo, alinhamento, contraste, viúvas, hierarquia e clareza das interações.', 'A transição diagonal conectou hero e galeria, as peças ganharam mais altura, os cases passaram a mostrar três destaques e galerias completas, e o blog entrou como espaço para registrar o desenvolvimento.'],
      en: ['The decisions did not come from one closed delivery. Each review revealed issues with rhythm, alignment, contrast, widows, hierarchy and interaction clarity.', 'The diagonal transition connected hero and gallery, artwork gained height, cases received three highlights and complete galleries, and the blog became a space for documenting development.'],
    }, images: [
      { src: '/assets/blog/critica-visual-em-ciclos/anotacao-topbar.webp', alt: { pt: 'Anotação visual usada para ajustar a largura da topbar', en: 'Visual annotation used to adjust the topbar width' } },
      { src: '/assets/blog/critica-visual-em-ciclos/anotacao-transicao-carrossel.webp', alt: { pt: 'Anotação visual da transição diagonal entre hero e carrossel', en: 'Visual annotation of the diagonal transition between hero and carousel' } },
      { src: '/assets/blog/critica-visual-em-ciclos/v2-interface-publicada.webp', alt: { pt: 'Interface da V2 após os ciclos de crítica visual', en: 'V2 interface after the visual critique cycles' } },
    ],
  },
  {
    slug: 'publicacao-recuperacao-e-spotify', date: '06 AGO 2026', dateISO: '2026-08-06', topics: ['portfolio'], status: 'published',
    category: { pt: 'Publicação', en: 'Deployment' }, sourceRef: 'git:0c43de7,9069b66,72e52e7,de9b091,b0d2c7d',
    title: { pt: 'Publicar a V2 também virou parte do case', en: 'Publishing V2 also became part of the case' },
    excerpt: { pt: 'A release reuniu GitHub Pages, recuperação de fila e o embed oficial da playlist do Spotify.', en: 'The release combined GitHub Pages, queue recovery and the official Spotify playlist embed.' },
    body: {
      pt: ['Depois de validar quatro rotas, temas, modais e galerias, a V2 substituiu a versão anterior no mesmo endereço público. O player provisório foi trocado pelo embed oficial do Spotify, sem autoplay e com controle do visitante.', 'O backend do Pages reteve deployments em fila. A recuperação exigiu cancelar registros órfãos pela API e publicar o build estático pela branch gh-pages. O incidente foi documentado porque operação, verificação e recuperação também fazem parte do trabalho.'],
      en: ['After validating four routes, themes, modals and galleries, V2 replaced the previous version at the same public address. The provisional player was replaced by the official Spotify embed, without autoplay and under visitor control.', 'The Pages backend retained deployments in its queue. Recovery required canceling orphaned records through the API and publishing the static build from the gh-pages branch. The incident was documented because operation, verification and recovery are also part of the work.'],
    }, images: [
      { src: '/assets/blog/publicacao-recuperacao-e-spotify/spotify-player-oficial.webp', alt: { pt: 'Player oficial do Spotify incorporado ao Portfólio V2', en: 'Official Spotify player embedded in Portfolio V2' } },
      { src: '/assets/blog/publicacao-recuperacao-e-spotify/github-pages-historico.webp', alt: { pt: 'Histórico de commits usados na publicação pelo GitHub Pages', en: 'Commit history used for the GitHub Pages deployment' } },
    ],
  },
];

export const blogPosts = posts.map((post) => ({ ...post, images: post.images.map((image) => ({ ...image, src: sitePath(image.src) })) }));
