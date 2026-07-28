const caseCards = document.querySelector("#caseCards");
const caseSections = document.querySelector("#caseSections");
const contactModal = document.querySelector("[data-contact-modal]");
const resumeModal = document.querySelector("[data-resume-modal]");
const lightbox = document.querySelector("[data-lightbox]");
let lastFocusedElement = null;
let casesData = [];

const caseTranslations = {
  coimbra: {
    type: "Retail, promotional campaigns, and social media",
    title: "Promotional campaigns for technical retail",
    subtitle: "Ongoing campaigns for offers, products, and seasonal activations.",
    context: "A promotional communication project for a retail chain specializing in equipment, tools, and technical products. The assets supported recurring campaigns, offers, products, and seasonal activations across digital channels, with a focus on commercial clarity, visual impact, and format adaptation.",
    deliveries: ["social media posts", "promotional stories", "digital banners", "offer assets", "seasonal campaigns"],
    period: "March to June 2026",
    note: "The selection prioritizes product variety, promotional messaging, and assets with direct commercial readability."
  },
  tacolibre: {
    type: "Food, visual campaigns, and social media",
    title: "Digital communication for food and hospitality",
    subtitle: "Product-led visual communication for campaigns and digital presence.",
    context: "A project focused on digital assets for visual communication, social media, and recurring campaigns. The selection showcases different formats, clear visual hierarchy, and adaptation to varied communication needs.",
    deliveries: ["promotional posts", "stories", "social media assets", "product promotion", "recurring campaigns"],
    period: "March to June 2026",
    note: "The selection balances promotional assets, product-led messaging, and a visual language tailored to food and hospitality."
  },
  natura: {
    type: "Beauty, retail, and digital campaigns",
    title: "Digital assets for beauty campaigns",
    subtitle: "Assets for seasonal campaigns, products, and ongoing communication.",
    context: "A project focused on creating and adapting digital assets for beauty campaigns, retail dates, and ongoing communication. The selection emphasizes products, visual composition, and alignment with the brand's publishing rhythm.",
    deliveries: ["campaign posts", "social media assets", "product promotion", "promotional materials", "format variations"],
    period: "December to June 2026",
    note: "The project highlights campaign variety, strong product presence, and compositions created for digital communication."
  },
  "cultura-inglesa": {
    type: "Education, institutional communication, and social media",
    title: "Visual communication for education",
    subtitle: "Digital materials for courses, campaigns, and institutional presence.",
    context: "A visual communication project for an educational institution, bringing together campaign assets, institutional content, courses, and relationship initiatives. The selection emphasizes brand consistency, message clarity, and adaptation across themes.",
    deliveries: ["institutional posts", "social media posts", "campaign assets", "informational materials", "digital formats"],
    period: "March to May 2026",
    note: "The selection combines educational campaigns, brand content, and assets with an institutional visual language."
  },
  "otica-murano": {
    type: "Eyewear, retail, and social media",
    title: "Digital assets for eyewear retail",
    subtitle: "Assets for campaigns, products, and optical retail content.",
    context: "A digital communication project for optical retail, including campaign assets, informational content, products, and seasonal activations. The selection shows visual variety, commercial appeal, and careful presentation of offers.",
    deliveries: ["product posts", "stories", "promotional campaigns", "social media assets", "retail communication"],
    period: "March to June 2026",
    note: "The selection prioritizes retail campaigns, product compositions, and quick-to-read social media content."
  },
  "la-pizza": {
    type: "Food, retail, and social media",
    title: "Visual communication for food and hospitality",
    subtitle: "Assets for offers, products, and a strong digital presence.",
    context: "A project focused on digital assets for food and hospitality, promotional campaigns, and ongoing communication. The selection highlights products, offers, and consumption occasions through direct messaging and engaging visuals.",
    deliveries: ["promotional posts", "product posts", "stories", "recurring campaigns", "digital materials"],
    period: "March to June 2026",
    note: "The selection combines product campaigns, promotional messaging, and relationship-focused content."
  }
};

function localizedCase(item) {
  return window.portfolioLanguage === "en" ? { ...item, ...caseTranslations[item.id] } : item;
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderCaseCard(sourceItem) {
  const item = localizedCase(sourceItem);
  const card = createElement("article", "case-card");
  const meta = createElement("p", "case-meta", item.type);
  const title = createElement("h3", "", item.client);
  const details = createElement("p", "case-period", item.period);
  const link = createElement("a", "case-link", window.portfolioLanguage === "en" ? "View project" : "Ver case");
  link.href = `#case-${item.id}`;

  card.append(meta, title, details, link);
  return card;
}

function renderGallery(images) {
  const gallery = createElement("div", "gallery");

  images.forEach((image) => {
    const figure = createElement("figure", "gallery-item");
    const button = document.createElement("button");
    button.className = "gallery-button";
    button.type = "button";
    const imageAlt = window.portfolioLanguage === "en"
      ? image.alt.replace(/^Arte para /, "Campaign artwork for ")
      : image.alt;
    button.setAttribute("aria-label", `${window.portfolioLanguage === "en" ? "Enlarge" : "Ampliar"} ${imageAlt}`);
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = imageAlt;
    img.loading = "lazy";
    img.decoding = "async";

    button.append(img);
    figure.append(button);
    gallery.append(figure);
  });

  return gallery;
}

function renderCaseSection(sourceItem) {
  const item = localizedCase(sourceItem);
  const section = createElement("section", "section case-detail");
  section.id = `case-${item.id}`;

  const header = createElement("div", "case-detail-header");
  const label = createElement("p", "eyebrow", item.client);
  const title = createElement("h2", "", item.title);
  const subtitle = createElement("p", "case-subtitle", item.subtitle);
  const context = createElement("p", "", item.context);
  header.append(label, title, subtitle, context);

  const aside = createElement("aside", "deliveries");
  aside.append(createElement("h3", "", window.portfolioLanguage === "en" ? "Key deliverables" : "Principais entregas"));
  const list = createElement("ul");
  item.deliveries.forEach((delivery) => {
    const li = createElement("li", "", delivery);
    list.append(li);
  });
  aside.append(list);

  const note = createElement("p", "process-note", item.note);
  section.append(header, aside, renderGallery(item.images), note);
  return section;
}

async function loadCases() {
  try {
    const response = await fetch("data/cases.json");
    if (!response.ok) throw new Error("Não foi possível carregar os cases.");
    const data = await response.json();

    caseCards.innerHTML = "";
    caseSections.innerHTML = "";

    casesData = data.cases;
    renderCases();
  } catch (error) {
    caseCards.innerHTML =
      `<p class="load-error">${window.portfolioLanguage === "en" ? "Open the project through a local server to load the projects." : "Abra o projeto em um servidor local para carregar os cases."}</p>`;
  }
}

function renderCases() {
  caseCards.innerHTML = "";
  caseSections.innerHTML = "";
  casesData.forEach((item) => {
      caseCards.append(renderCaseCard(item));
      caseSections.append(renderCaseSection(item));
  });
}

loadCases();
document.addEventListener("portfolio-language-change", renderCases);

function openContactModal() {
  lastFocusedElement = document.activeElement;
  contactModal.hidden = false;
  document.body.classList.add("modal-open");
  contactModal.querySelector("[data-contact-close]").focus();
}

function closeContactModal() {
  contactModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

function openResumeModal() {
  lastFocusedElement = document.activeElement;
  resumeModal.hidden = false;
  document.body.classList.add("modal-open");
  resumeModal.querySelector("[data-resume-close]").focus();
}

function closeResumeModal() {
  resumeModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

function openLightbox(image) {
  const lightboxImage = lightbox.querySelector("img");
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.hidden = false;
  document.body.classList.add("modal-open");
  lightbox.querySelector("[data-lightbox-close]").focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightbox.querySelector("img").src = "";
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (event) => {
  const contactButton = event.target.closest("[data-contact-open]");
  if (contactButton) openContactModal();

  const resumeButton = event.target.closest("[data-resume-open]");
  if (resumeButton) openResumeModal();

  if (event.target.matches("[data-contact-close]") || event.target === contactModal) {
    closeContactModal();
  }

  if (event.target.matches("[data-resume-close]") || event.target === resumeModal) {
    closeResumeModal();
  }

  const galleryButton = event.target.closest(".gallery-button");
  if (galleryButton) {
    const image = galleryButton.querySelector("img");
    openLightbox(image);
  }

  if (event.target.matches("[data-lightbox-close]") || event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!contactModal.hidden) closeContactModal();
  if (!resumeModal.hidden) closeResumeModal();
  if (!lightbox.hidden) closeLightbox();
});
