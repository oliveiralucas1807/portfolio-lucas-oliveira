import type { Locale } from '@/i18n/config';
import { sitePath } from '@/utils/paths';

type Localized = Record<Locale, string>;

export type BlogPost = {
  slug: string;
  date: string;
  category: Localized;
  title: Localized;
  excerpt: Localized;
  body: Record<Locale, string[]>;
  images: { src: string; alt: Localized }[];
  status: 'published' | 'preparing';
};

const posts: BlogPost[] = [
  {
    slug: 'portfolio-v2-em-movimento', date: '05 AGO 2026', status: 'published',
    category: { pt: 'Desenvolvimento', en: 'Development' },
    title: { pt: 'Como o Portfólio V2 ganhou movimento sem perder leitura', en: 'How Portfolio V2 gained motion without losing readability' },
    excerpt: { pt: 'Decisões de direção, código e curadoria que transformaram uma página estática em uma experiência mais fluida.', en: 'Direction, code and curation decisions that turned a static page into a more fluid experience.' },
    body: {
      pt: ['A V2 começou com uma pergunta prática: como mostrar mais repertório sem atrasar a chegada aos cases? A resposta uniu uma abertura direta, duas faixas de trabalhos e uma transição diagonal que conduz a leitura.', 'O movimento foi aplicado como orientação. Elementos entram conforme a rolagem, galerias revelam materiais em sequência e pequenos deslocamentos respondem ao cursor sem competir com as peças gráficas.'],
      en: ['V2 began with a practical question: how could more range be shown without delaying the cases? The answer combines a direct opening, two work streams and a diagonal transition guiding the reading flow.', 'Motion works as orientation. Elements enter during scrolling, galleries reveal materials in sequence and small cursor responses support the work without competing with it.'],
    },
    images: [
      { src: '/assets/hero/foto-lucas-desktop.webp', alt: { pt: 'Hero do Portfólio V2', en: 'Portfolio V2 hero' } },
      { src: '/assets/gallery/mivybook-destaque.webp', alt: { pt: 'Peça gráfica usada na galeria em movimento', en: 'Graphic piece used in the moving gallery' } },
    ],
  },
  {
    slug: 'ia-no-processo-criativo', date: 'EM BREVE', status: 'preparing',
    category: { pt: 'IA aplicada', en: 'Applied AI' },
    title: { pt: 'IA como ferramenta de processo, não como assinatura visual', en: 'AI as a process tool, not a visual signature' },
    excerpt: { pt: 'Um registro sobre prompting, automação e os pontos em que a direção humana continua decidindo o resultado.', en: 'Notes on prompting, automation and the moments when human direction still decides the outcome.' },
    body: {
      pt: ['IA entra no processo como apoio para pesquisar, organizar variações e acelerar tarefas repetitivas. O conceito, a seleção e a coerência visual continuam dependendo de direção.', 'O objetivo não é produzir uma estética reconhecível como “feita por IA”. É ampliar a capacidade de testar caminhos e reservar mais tempo para decisões que realmente alteram a qualidade da entrega.'],
      en: ['AI supports research, variation management and repetitive tasks. Concept, selection and visual coherence still depend on direction.', 'The goal is not to create an aesthetic recognizable as AI-made. It is to test more paths and reserve time for decisions that materially improve the work.'],
    },
    images: [
      { src: '/assets/gallery/mivybook-destaque.webp', alt: { pt: 'Projeto Mivybook', en: 'Mivybook project' } },
      { src: '/assets/gallery/beklins-3-erros.webp', alt: { pt: 'Peça digital da Beklins', en: 'Beklins digital artwork' } },
    ],
  },
  {
    slug: 'campanhas-em-escala', date: 'EM BREVE', status: 'preparing',
    category: { pt: 'Processos', en: 'Processes' },
    title: { pt: 'Como manter consistência quando uma campanha precisa virar dezenas de peças', en: 'Keeping consistency when one campaign becomes dozens of assets' },
    excerpt: { pt: 'Estrutura visual, hierarquia e decisões práticas para desdobrar formatos sem perder personalidade.', en: 'Visual structure, hierarchy and practical decisions for expanding formats without losing personality.' },
    body: {
      pt: ['Uma campanha em escala precisa de regras simples o bastante para serem repetidas e flexíveis o bastante para receber produtos, preços e chamadas diferentes.', 'Hierarquia, contraste e áreas de respiro formam a base. A partir dela, cada peça pode mudar sem parecer parte de outra campanha.'],
      en: ['A campaign at scale needs rules simple enough to repeat and flexible enough to receive different products, prices and calls.', 'Hierarchy, contrast and breathing room form the base. From there, each asset can change without looking like it belongs to another campaign.'],
    },
    images: [
      { src: '/assets/cases/coimbra/01-23-escalcao-campea-feed-copa-cta1.webp', alt: { pt: 'Campanha Escalação Campeã', en: 'Escalação Campeã campaign' } },
      { src: '/assets/cases/cultura-inglesa/07-pascoa-feed0504pascoa.webp', alt: { pt: 'Campanha de Páscoa da Cultura Inglesa', en: 'Cultura Inglesa Easter campaign' } },
    ],
  },
];

export const blogPosts = posts.map((post) => ({
  ...post,
  images: post.images.map((image) => ({ ...image, src: sitePath(image.src) })),
}));
