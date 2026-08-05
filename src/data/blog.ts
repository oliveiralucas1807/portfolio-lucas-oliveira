import type { Locale } from '@/i18n/config';

type Localized = Record<Locale, string>;

export type BlogPost = {
  slug: string;
  date: string;
  category: Localized;
  title: Localized;
  excerpt: Localized;
  status: 'published' | 'preparing';
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'portfolio-v2-em-movimento', date: '05 AGO 2026', status: 'published',
    category: { pt: 'Desenvolvimento', en: 'Development' },
    title: { pt: 'Como o Portfólio V2 ganhou movimento sem perder leitura', en: 'How Portfolio V2 gained motion without losing readability' },
    excerpt: { pt: 'Decisões de direção, código e curadoria que transformaram uma página estática em uma experiência mais fluida.', en: 'Direction, code and curation decisions that turned a static page into a more fluid experience.' },
  },
  {
    slug: 'ia-no-processo-criativo', date: 'EM BREVE', status: 'preparing',
    category: { pt: 'IA aplicada', en: 'Applied AI' },
    title: { pt: 'IA como ferramenta de processo, não como assinatura visual', en: 'AI as a process tool, not a visual signature' },
    excerpt: { pt: 'Um registro sobre prompting, automação e os pontos em que a direção humana continua decidindo o resultado.', en: 'Notes on prompting, automation and the moments when human direction still decides the outcome.' },
  },
  {
    slug: 'campanhas-em-escala', date: 'EM BREVE', status: 'preparing',
    category: { pt: 'Processos', en: 'Processes' },
    title: { pt: 'Como manter consistência quando uma campanha precisa virar dezenas de peças', en: 'Keeping consistency when one campaign becomes dozens of assets' },
    excerpt: { pt: 'Estrutura visual, hierarquia e decisões práticas para desdobrar formatos sem perder personalidade.', en: 'Visual structure, hierarchy and practical decisions for expanding formats without losing personality.' },
  },
];
