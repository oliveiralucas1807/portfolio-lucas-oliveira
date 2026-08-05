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
];

export const galleryItems = [...caseItems, ...externalItems];
