import { cases } from './cases';

const caseItems = cases.flatMap((item) => item.images.slice(0, 2).map((image, index) => ({
  id: `${item.id}-${index + 1}`,
  client: item.client,
  src: `/assets/gallery-cases/${item.id}/${image.src.split('/').at(-1)}`,
  alt: image.alt,
})));

const externalItems = [
  { id: 'coven-dia-dos-pais', client: 'Coven', src: '/assets/gallery/coven-dia-dos-pais.webp', alt: 'Campanha promocional de Dia dos Pais da Coven' },
  { id: 'ecoforte-reciclagem', client: 'Ecoforte', src: '/assets/gallery/ecoforte-reciclagem.webp', alt: 'Campanha sobre saco reciclável da Ecoforte' },
  { id: 'sushi-sakai-special', client: 'Sushi Sakai', src: '/assets/gallery/sushi-sakai-special.webp', alt: 'Campanha Special Promo do Sushi Sakai' },
  { id: 'trocados-saldo', client: 'Trocados', src: '/assets/gallery/trocados-saldo.webp', alt: 'Peça de produto sobre saldo em tempo real do Trocados' },
  { id: 'brasa-os-fonas', client: 'Brasa 105', src: '/assets/gallery/brasa-os-fonas.webp', alt: 'Divulgação de show da banda Os Fonas no Brasa 105' },
  { id: 'habanero-taco-tuesday', client: 'Habanero', src: '/assets/gallery/habanero-taco-tuesday.webp', alt: 'Campanha Taco Tuesday do Habanero' },
  { id: 'amazonea-when-to-visit', client: 'Amazonea Travel', src: '/assets/gallery/amazonea-when-to-visit.webp', alt: 'Conteúdo editorial When to Visit da Amazonea Travel' },
  { id: 'arranha-ceus-vantagens', client: 'Arranha Céus', src: '/assets/gallery/arranha-ceus-vantagens.webp', alt: 'Conteúdo sobre vantagens da Arranha Céus' },
  { id: 'mivybook-destaque', client: 'Mivybook', src: '/assets/gallery/mivybook-destaque.webp', alt: 'Conteúdo digital da plataforma Mivybook' },
  { id: 'tacaca-tia-socorro', client: 'Tacacá Tia Socorro', src: '/assets/gallery/tacaca-tia-socorro-promo.webp', alt: 'Campanha promocional do Tacacá Tia Socorro' },
  { id: 'beklins-3-erros', client: 'Beklins', src: '/assets/gallery/beklins-3-erros.webp', alt: 'Conteúdo educativo da Beklins' },
  { id: 'copamart-destaque', client: 'Copamart', src: '/assets/gallery/copamart-destaque.webp', alt: 'Peça de comunicação da Copamart' },
  { id: 'quintal-consumidor', client: 'Quintal Gastronômico', src: '/assets/gallery/quintal-dia-consumidor.webp', alt: 'Campanha de Dia do Consumidor do Quintal Gastronômico' },
  { id: 'vitali-prancheta', client: 'Restaurante Vitali', src: '/assets/gallery/vitali-prancheta.webp', alt: 'Peça gastronômica do Restaurante Vitali' },
];

export const galleryItems = [...caseItems, ...externalItems];
