import { sitePath } from '@/utils/paths';

export type Locale = 'pt' | 'en';

export const localeMeta = {
  pt: { lang: 'pt-BR', home: sitePath('/'), blog: sitePath('/blog/') },
  en: { lang: 'en', home: sitePath('/en/'), blog: sitePath('/en/blog/') },
} as const;

export const ui = {
  pt: {
    skip: 'Pular para o conteúdo', work: 'Trabalhos', about: 'Sobre', contact: 'Contato', blog: 'O que há de novo',
    role: 'Designer Gráfico Pleno', heroIntro: 'Campanhas digitais, direção visual e IA aplicada ao design com clareza, ritmo e repertório de mercado.',
    seeWork: 'Ver trabalhos', resume: 'Currículo', talk: 'Entrar em contato', language: 'View portfolio in English',
    galleryEyebrow: 'Trabalhos em movimento', galleryTitle: 'Seleção de campanhas e peças gráficas.',
    projectsEyebrow: 'Cases', projectsTitle: 'Projetos e campanhas', projectsIntro: '',
    openCase: 'Explorar projeto', roleLabel: 'Minha atuação', deliveries: 'Entregas', more: 'Mais cases em breve', moreText: 'A estrutura está pronta para receber novos clientes e projetos conforme a curadoria avançar.',
    deepTitle: 'Design, IA e processos em construção.', deepText: 'Este futuro ambiente vai reunir estudos, testes, automações e decisões por trás dos projetos. Uma visão mais completa de como cada solução é construída.', deepAction: 'Acessar cases',
    aboutEyebrow: 'Sobre', aboutTitle: 'Design gráfico, campanhas digitais e direção de arte.',
    aboutText: 'Designer Gráfico Pleno com atuação em campanhas digitais, Direção de Arte e comunicação visual. Minha experiência combina criação para marcas, varejo e conteúdo com IA generativa, Prompt Engineering e automação criativa aplicadas ao processo de design.',
    experienceTitle: 'Foco profissional', experienceText: 'Desenvolvo sistemas visuais e campanhas capazes de se adaptar a diferentes formatos sem perder clareza, consistência ou personalidade de marca.',
    contactTitle: 'Vamos conversar.', linkedin: 'Ver perfil no LinkedIn', whatsapp: 'Falar pelo WhatsApp', email: 'Enviar e-mail', spotify: 'Playlist em preparação', spotifyText: 'Uma playlist escolhida por Lucas será conectada aqui depois.',
    footer: 'Design, conteúdo e desenvolvimento por Lucas Oliveira.', backTop: 'Voltar ao topo', theme: 'Alternar tema', cursor: 'Cursor autoral ativo',
  },
  en: {
    skip: 'Skip to content', work: 'Work', about: 'About', contact: 'Contact', blog: 'What’s new',
    role: 'Mid-level Graphic Designer', heroIntro: 'Digital campaigns, visual direction and AI applied to design with clarity, rhythm and market experience.',
    seeWork: 'View work', resume: 'Résumé', talk: 'Get in touch', language: 'Ver portfólio em português',
    galleryEyebrow: 'Work in motion', galleryTitle: 'A selection of campaigns and graphic pieces.',
    projectsEyebrow: 'Cases', projectsTitle: 'Projects and campaigns', projectsIntro: '',
    openCase: 'Explore project', roleLabel: 'My role', deliveries: 'Deliverables', more: 'More cases coming soon', moreText: 'The structure is ready for new clients and projects as the curation evolves.',
    deepTitle: 'Design, AI and processes in progress.', deepText: 'This future space will bring together studies, tests, automation and the decisions behind the projects. A fuller view of how each solution is built.', deepAction: 'Access cases',
    aboutEyebrow: 'About', aboutTitle: 'Graphic design, digital campaigns and art direction.',
    aboutText: 'Mid-level Graphic Designer working across digital campaigns, art direction and visual communication. My practice combines brand, retail and content design with generative AI, prompt engineering and creative automation applied to the design process.',
    experienceTitle: 'Professional focus', experienceText: 'I develop visual systems and campaigns that adapt to different formats without losing clarity, consistency or brand personality.',
    contactTitle: 'Let’s talk.', linkedin: 'View LinkedIn profile', whatsapp: 'Talk on WhatsApp', email: 'Send an email', spotify: 'Playlist coming soon', spotifyText: 'A playlist selected by Lucas will be connected here later.',
    footer: 'Design, content and development by Lucas Oliveira.', backTop: 'Back to top', theme: 'Toggle theme', cursor: 'Signature cursor active',
  },
} as const;

export function localePath(locale: Locale, kind: 'home' | 'blog') {
  return localeMeta[locale][kind];
}
