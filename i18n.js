const portfolioTranslations = {
  en: {
    title: "Lucas Oliveira da Silva | Portfolio",
    description: "Portfolio of Lucas Oliveira da Silva, a graphic designer working across promotional campaigns, digital assets, print materials, and visual communication.",
    strings: {
      "Navegação principal": "Main navigation",
      "Idioma": "Language",
      "Portfólio Lucas Oliveira": "Lucas Oliveira Portfolio",
      "Sobre": "About",
      "Contato": "Contact",
      "Designer Gráfico Pleno": "Mid-Level Graphic Designer",
      "Designer gráfico com atuação desde 2019 em agências, gráfica, editorial, redes sociais e campanhas promocionais. Trabalho com criação de peças digitais e impressas, campanhas para varejo, materiais para redes sociais, vídeos curtos e comunicação visual aplicada a marcas e negócios.": "Graphic designer working professionally since 2019 across agencies, print production, editorial design, social media, and promotional campaigns. I create digital and print assets, retail campaigns, social media content, short-form videos, and visual communication for brands and businesses.",
      "Ver cases": "View projects",
      "Currículo": "Résumé",
      "Entrar em contato": "Get in touch",
      "Ações principais": "Main actions",
      "Espaço para imagem principal do portfólio": "Main portfolio image",
      "Apresentação profissional": "Professional introduction",
      "Cases selecionados": "Selected projects",
      "Uma seleção de trabalhos recentes desenvolvidos para diferentes segmentos, reunindo campanhas promocionais, peças para redes sociais, materiais digitais e soluções visuais aplicadas à comunicação de marcas.": "A selection of recent work across different industries, including promotional campaigns, social media assets, digital materials, and visual solutions for brand communication.",
      "Sobre mim": "About me",
      "Design gráfico com visão prática de comunicação": "Graphic design grounded in practical communication",
      "Sou designer gráfico formado pela CEUNI-FAMETRO e atuo profissionalmente na área desde 2019. Tenho experiência com criação de materiais digitais e impressos, campanhas promocionais, peças para redes sociais, vídeos curtos, editorial e comunicação visual para diferentes nichos de clientes. Também venho aplicando recursos de IA em fluxos criativos, geração de imagem e otimização de processos de design.": "I hold a degree in Graphic Design from CEUNI-FAMETRO and have worked professionally in the field since 2019. My experience includes digital and print materials, promotional campaigns, social media assets, short-form videos, editorial design, and visual communication for clients in different industries. I also use AI tools in creative workflows, image generation, and design process optimization.",
      "Fechar opções de contato": "Close contact options",
      "Como você prefere entrar em contato?": "How would you like to get in touch?",
      "Escolha uma das opções abaixo para falar comigo sobre oportunidades, projetos ou propostas profissionais.": "Choose one of the options below to contact me about opportunities, projects, or professional proposals.",
      "Fechar opções de currículo": "Close résumé options",
      "Como você prefere acessar?": "How would you like to view it?",
      "Você pode visualizar o currículo online ou baixar a versão em PDF.": "You can view the résumé online or download the PDF version.",
      "Visualizar online": "View online",
      "Abre o currículo em uma nova aba": "Opens the résumé in a new tab",
      "Baixar PDF": "Download PDF",
      "Fechar imagem ampliada": "Close enlarged image",
      "Portfólio light para processos seletivos.": "Light portfolio for recruitment processes.",
      "Link público": "Public link",
      "Voltar ao topo": "Back to top"
    }
  }
};

const originalText = new WeakMap();
const originalAria = new WeakMap();

function normalizedText(element) {
  return element.textContent.replace(/\s+/g, " ").trim();
}

function applyPortfolioLanguage(language) {
  const english = language === "en";
  const strings = portfolioTranslations.en.strings;

  document.documentElement.lang = english ? "en" : "pt-BR";
  document.title = english ? portfolioTranslations.en.title : "Lucas Oliveira da Silva | Portfólio";
  document.querySelector('meta[name="description"]').content = english
    ? portfolioTranslations.en.description
    : "Portfólio de Lucas Oliveira da Silva, designer gráfico com atuação em campanhas promocionais, peças digitais, materiais impressos e comunicação visual.";
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = english
    ? "Selected work in graphic design, promotional campaigns, social media, and visual communication."
    : "Seleção de trabalhos em design gráfico, campanhas promocionais, redes sociais e comunicação visual.";

  document.querySelectorAll("body *").forEach((element) => {
    if (element.children.length === 0 && normalizedText(element)) {
      if (!originalText.has(element)) originalText.set(element, element.textContent);
      const source = originalText.get(element).replace(/\s+/g, " ").trim();
      element.textContent = english && strings[source] ? strings[source] : originalText.get(element);
    }

    if (element.hasAttribute("aria-label")) {
      if (!originalAria.has(element)) originalAria.set(element, element.getAttribute("aria-label"));
      const source = originalAria.get(element);
      element.setAttribute("aria-label", english && strings[source] ? strings[source] : source);
    }
  });

  const languageAction = document.querySelector("[data-language-action]");
  if (languageAction) {
    languageAction.dataset.language = english ? "pt-BR" : "en";
    languageAction.querySelector("[data-language-label]").textContent = english
      ? "Ver portfólio em português"
      : "View portfolio in English";
    languageAction.setAttribute(
      "aria-label",
      english ? "Ver portfólio em português" : "View portfolio in English"
    );
  }

  document.querySelectorAll('a[href*="github.io/curriculo/"]').forEach((link) => {
    if (link.href.endsWith(".pdf") || link.href.includes(".pdf?")) {
      link.href = english
        ? "https://oliveiralucas1807.github.io/curriculo/curriculo-lucas-oliveira-en.pdf"
        : "https://oliveiralucas1807.github.io/curriculo/curriculo-lucas-oliveira.pdf";
      const filename = link.querySelector("strong");
      if (filename) filename.textContent = english ? "curriculo-lucas-oliveira-en.pdf" : "curriculo-lucas-oliveira.pdf";
    } else {
      const url = new URL(link.href);
      if (english) url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      link.href = url.toString();
    }
  });

  const nextUrl = new URL(window.location.href);
  if (english) nextUrl.searchParams.set("lang", "en");
  else nextUrl.searchParams.delete("lang");
  history.replaceState({}, "", nextUrl);
  localStorage.setItem("portfolio-language", english ? "en" : "pt-BR");
  window.portfolioLanguage = english ? "en" : "pt-BR";
  document.dispatchEvent(new CustomEvent("portfolio-language-change"));
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-language]");
  if (button) applyPortfolioLanguage(button.dataset.language);
});

window.portfolioLanguage =
  new URLSearchParams(window.location.search).get("lang") === "en" ||
  localStorage.getItem("portfolio-language") === "en"
    ? "en"
    : "pt-BR";

document.addEventListener("DOMContentLoaded", () => applyPortfolioLanguage(window.portfolioLanguage));
