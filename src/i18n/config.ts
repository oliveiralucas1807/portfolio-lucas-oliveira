export type Locale = 'pt' | 'en';

export const localeMeta = {
  pt: { lang: 'pt-BR', home: '/', lab: '/laboratorio/' },
  en: { lang: 'en', home: '/en/', lab: '/en/lab/' },
} as const;

export const ui = {
  pt: {
    skip: 'Pular para o conteúdo', work: 'Trabalhos', about: 'Sobre', contact: 'Contato', lab: 'Laboratório V2',
    role: 'Designer Gráfico Pleno', heroIntro: 'Campanhas digitais, direção visual e IA aplicada ao design — com clareza, ritmo e repertório de mercado.',
    seeWork: 'Ver trabalhos', resume: 'Currículo', talk: 'Entrar em contato', language: 'View portfolio in English',
    galleryEyebrow: 'Arquivo em movimento', galleryTitle: 'Artes que atravessam campanhas, formatos e segmentos.',
    projectsEyebrow: 'Projetos', projectsTitle: 'Seis recortes de um trabalho contínuo.', projectsIntro: 'Cada projeto reúne decisões visuais aplicadas a uma necessidade real de comunicação.',
    openCase: 'Explorar projeto', roleLabel: 'Minha atuação', deliveries: 'Entregas', more: 'Mais cases em breve', moreText: 'A estrutura está pronta para receber novos clientes e projetos conforme a curadoria avançar.',
    deepTitle: 'Cases de desenvolvimento e processo', deepText: 'Um portfólio separado vai reunir raciocínio, testes, automações, decisões e aprendizados em maior profundidade.', deepAction: 'Conhecer a proposta',
    aboutEyebrow: 'Sobre', aboutTitle: 'Design gráfico com prática de mercado e curiosidade técnica.',
    aboutText: 'Designer gráfico formado pela CEUNI-FAMETRO, com atuação profissional desde 2019 em materiais digitais e impressos, campanhas promocionais, conteúdo para redes sociais, vídeo curto e comunicação visual. Integro IA generativa, Prompt Engineering e automação criativa quando essas ferramentas melhoram o processo e a entrega.',
    experienceTitle: 'Experiência em diferentes ritmos de produção', experienceText: 'Agências, varejo, editorial, gráfica e projetos remotos formaram uma prática orientada por adaptação de formatos, consistência visual e comunicação direta.',
    contactTitle: 'Vamos conversar sobre trabalho, campanha ou projeto.', linkedin: 'Ver perfil no LinkedIn', whatsapp: 'Falar pelo WhatsApp', email: 'Enviar e-mail', spotify: 'Playlist em preparação', spotifyText: 'Uma playlist escolhida por Lucas será conectada aqui depois.',
    footer: 'Design, conteúdo e desenvolvimento por Lucas Oliveira.', backTop: 'Voltar ao topo', theme: 'Alternar tema', cursor: 'Cursor autoral ativo',
  },
  en: {
    skip: 'Skip to content', work: 'Work', about: 'About', contact: 'Contact', lab: 'V2 Laboratory',
    role: 'Mid-level Graphic Designer', heroIntro: 'Digital campaigns, visual direction and AI applied to design — grounded in clarity, rhythm and market experience.',
    seeWork: 'View work', resume: 'Résumé', talk: 'Get in touch', language: 'Ver portfólio em português',
    galleryEyebrow: 'Archive in motion', galleryTitle: 'Artwork across campaigns, formats and industries.',
    projectsEyebrow: 'Projects', projectsTitle: 'Six views into an ongoing body of work.', projectsIntro: 'Each project connects visual decisions to a real communication need.',
    openCase: 'Explore project', roleLabel: 'My role', deliveries: 'Deliverables', more: 'More cases coming soon', moreText: 'The structure is ready for new clients and projects as the curation evolves.',
    deepTitle: 'Development and process cases', deepText: 'A separate portfolio will document reasoning, tests, automation, decisions and learnings in greater depth.', deepAction: 'Read the proposal',
    aboutEyebrow: 'About', aboutTitle: 'Graphic design shaped by market practice and technical curiosity.',
    aboutText: 'Graphic designer educated at CEUNI-FAMETRO and working professionally since 2019 across digital and print materials, promotional campaigns, social content, short-form video and visual communication. I use generative AI, prompt engineering and creative automation when they improve the process and the result.',
    experienceTitle: 'Experience across different production rhythms', experienceText: 'Agencies, retail, editorial, print and remote projects shaped a practice focused on format adaptation, visual consistency and direct communication.',
    contactTitle: 'Let’s talk about a role, campaign or project.', linkedin: 'View LinkedIn profile', whatsapp: 'Talk on WhatsApp', email: 'Send an email', spotify: 'Playlist coming soon', spotifyText: 'A playlist selected by Lucas will be connected here later.',
    footer: 'Design, content and development by Lucas Oliveira.', backTop: 'Back to top', theme: 'Toggle theme', cursor: 'Signature cursor active',
  },
} as const;

export function localePath(locale: Locale, kind: 'home' | 'lab') {
  return localeMeta[locale][kind];
}
