import source from '../../data/cases.json';
import type { Locale } from '@/i18n/config';
import { sitePath } from '@/utils/paths';

type Localized = Record<Locale, string>;
type SourceCase = (typeof source.cases)[number];

const copy: Record<string, { title: Localized; summary: Localized; role: Localized; solution: Localized; result: Localized }> = {
  coimbra: {
    title: { pt: 'Campanhas promocionais para varejo técnico', en: 'Promotional campaigns for technical retail' },
    summary: { pt: 'Conjunto de campanhas promocionais e conteúdos de produto criados para comunicar ofertas, datas comerciais e o universo técnico da Coimbra com leitura rápida e presença de marca.', en: 'Promotional campaigns and product content created to communicate offers, retail dates and Coimbra’s technical universe with fast reading and strong brand presence.' },
    role: { pt: 'Criação e adaptação de peças digitais, organização da hierarquia comercial e desdobramento de formatos.', en: 'Digital asset creation and adaptation, commercial hierarchy and multi-format rollout.' },
    solution: { pt: 'Produto, preço e chamada foram tratados como uma sequência visual consistente, permitindo variar campanhas sem perder reconhecimento.', en: 'Product, price and callout follow a consistent visual sequence, allowing campaigns to change without losing recognition.' },
    result: { pt: 'Conjunto curado de campanhas sazonais, ofertas e conteúdos de produto para diferentes formatos digitais.', en: 'A curated set of seasonal campaigns, offers and product content across digital formats.' },
  },
  tacolibre: {
    title: { pt: 'Gastronomia com apelo de produto', en: 'Food communication built around product appeal' },
    summary: { pt: 'Peças promocionais que colocam textura, produto e ocasião de consumo no centro da leitura.', en: 'Promotional pieces that put texture, product and dining occasion at the center.' },
    role: { pt: 'Criação de cards, stories e variações de campanha para presença recorrente nas redes sociais.', en: 'Creation of cards, stories and campaign variations for an ongoing social presence.' },
    solution: { pt: 'Close de produto, contraste e chamadas curtas estruturam uma linguagem direta, sem perder o clima da marca.', en: 'Product close-ups, contrast and concise calls create a direct language without losing the brand mood.' },
    result: { pt: 'Série de peças de produto, datas sazonais e relacionamento organizada em uma mesma direção visual.', en: 'A series of product, seasonal and relationship assets organized under one visual direction.' },
  },
  natura: {
    title: { pt: 'Campanhas digitais para beleza e cuidado', en: 'Digital campaigns for beauty and care' },
    summary: { pt: 'Composições que equilibram produto, atmosfera e informação promocional em diferentes campanhas.', en: 'Compositions balancing product, atmosphere and promotional information across campaigns.' },
    role: { pt: 'Desenvolvimento de materiais de campanha, variações de formato e peças de divulgação de produtos.', en: 'Campaign asset development, format variations and product communication.' },
    solution: { pt: 'A direção adapta cor, textura e ritmo a cada linha sem abandonar clareza de oferta e presença do produto.', en: 'Color, texture and rhythm adapt to each product line while keeping the offer and product clear.' },
    result: { pt: 'Seleção de campanhas sazonais e materiais recorrentes para comunicação digital.', en: 'A selection of seasonal campaigns and recurring digital communication assets.' },
  },
  'cultura-inglesa': {
    title: { pt: 'Comunicação educacional com energia de campanha', en: 'Educational communication with campaign energy' },
    summary: { pt: 'Conteúdos institucionais e promocionais com linguagem acessível para cursos, datas e presença de marca.', en: 'Institutional and promotional content with an approachable language for courses, dates and brand presence.' },
    role: { pt: 'Criação de cards institucionais, informativos e peças para campanhas educacionais.', en: 'Creation of institutional cards, information pieces and educational campaign assets.' },
    solution: { pt: 'Tipografia, personagens e blocos de informação são combinados para manter leveza sem comprometer a mensagem.', en: 'Typography, characters and information blocks keep the work light without compromising the message.' },
    result: { pt: 'Conjunto de materiais para campanhas, cursos e conteúdos de marca em redes sociais.', en: 'A body of materials for campaigns, courses and brand content on social media.' },
  },
  'otica-murano': {
    title: { pt: 'Varejo óptico com leitura rápida', en: 'Fast-reading communication for optical retail' },
    summary: { pt: 'Campanhas que transformam produto, benefício e ocasião em peças diretas para redes sociais.', en: 'Campaigns turning product, benefit and occasion into direct social assets.' },
    role: { pt: 'Criação de peças de produto, campanhas promocionais, stories e adaptações para varejo.', en: 'Product assets, promotional campaigns, stories and retail adaptations.' },
    solution: { pt: 'Enquadramento de produto, contraste tipográfico e chamadas objetivas conduzem o olhar em poucos segundos.', en: 'Product framing, typographic contrast and concise calls guide the eye in a few seconds.' },
    result: { pt: 'Curadoria de campanhas comerciais, produto e relacionamento para comunicação digital.', en: 'A curation of commercial, product and relationship campaigns for digital communication.' },
  },
  'la-pizza': {
    title: { pt: 'Produto e ocasião na comunicação gastronômica', en: 'Product and occasion in food communication' },
    summary: { pt: 'Peças que usam produto, proximidade e chamadas comerciais para manter presença recorrente.', en: 'Assets using product, familiarity and commercial calls to sustain an ongoing presence.' },
    role: { pt: 'Criação de posts, stories, campanhas promocionais e materiais de relacionamento.', en: 'Creation of posts, stories, promotional campaigns and relationship content.' },
    solution: { pt: 'A imagem do produto assume o protagonismo, apoiada por composição simples e mensagens adequadas a cada ocasião.', en: 'Product imagery takes the lead, supported by simple composition and occasion-specific messaging.' },
    result: { pt: 'Série de conteúdos promocionais, sazonais e de produto para redes sociais.', en: 'A series of promotional, seasonal and product-led social content.' },
  },
};

const deliveriesEn: Record<string, string[]> = {
  coimbra: ['social media cards', 'promotional stories', 'digital banners', 'offer assets', 'seasonal campaigns'],
  tacolibre: ['promotional cards', 'stories', 'social media assets', 'product promotion', 'recurring campaigns'],
  natura: ['campaign cards', 'social media assets', 'product promotion', 'promotional materials', 'format variations'],
  'cultura-inglesa': ['institutional cards', 'social posts', 'campaign assets', 'informational materials', 'digital formats'],
  'otica-murano': ['product cards', 'stories', 'promotional campaigns', 'social media assets', 'retail communication'],
  'la-pizza': ['promotional cards', 'product posts', 'stories', 'recurring campaigns', 'digital materials'],
};

const featuredIndexes: Record<string, number[]> = {
  coimbra: [0, 12, 16],
  'cultura-inglesa': [0, 6, 2],
  'otica-murano': [0, 13, 11],
};

const imageOrderIndexes: Record<string, number[]> = {
  'otica-murano': [0, 13, 18, 3, 16, 5, 6, 7, 8, 9, 10, 11, 12, 1, 14, 15, 4, 17, 2, 19],
};

export const cases = source.cases.map((item: SourceCase, index) => {
  const sourceImages = item.images.map((image) => ({ ...image, src: sitePath(`/${image.src.replace(/\.[^.]+$/, '.webp')}`) }));
  const images = (imageOrderIndexes[item.id] ?? sourceImages.map((_, imageIndex) => imageIndex)).map((imageIndex) => sourceImages[imageIndex]);
  const selectedIndexes = featuredIndexes[item.id] ?? [0, 1, 2];
  return {
    ...item,
    order: index + 1,
    cover: images[0].src,
    featured: selectedIndexes.map((imageIndex) => images[imageIndex]),
    images,
    deliveriesLocalized: { pt: item.deliveries, en: deliveriesEn[item.id] },
    copy: copy[item.id],
  };
});

export type PortfolioCase = (typeof cases)[number];
