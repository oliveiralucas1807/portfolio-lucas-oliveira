const caseCards = document.querySelector("#caseCards");
const caseSections = document.querySelector("#caseSections");
const contactModal = document.querySelector("[data-contact-modal]");
const resumeModal = document.querySelector("[data-resume-modal]");
const lightbox = document.querySelector("[data-lightbox]");
let lastFocusedElement = null;

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderCaseCard(item) {
  const card = createElement("article", "case-card");
  const meta = createElement("p", "case-meta", item.type);
  const title = createElement("h3", "", item.client);
  const details = createElement("p", "case-period", item.period);
  const link = createElement("a", "case-link", "Ver case");
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
    button.setAttribute("aria-label", `Ampliar ${image.alt}`);
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.loading = "lazy";
    img.decoding = "async";

    button.append(img);
    figure.append(button);
    gallery.append(figure);
  });

  return gallery;
}

function renderCaseSection(item) {
  const section = createElement("section", "section case-detail");
  section.id = `case-${item.id}`;

  const header = createElement("div", "case-detail-header");
  const label = createElement("p", "eyebrow", item.client);
  const title = createElement("h2", "", item.title);
  const subtitle = createElement("p", "case-subtitle", item.subtitle);
  const context = createElement("p", "", item.context);
  header.append(label, title, subtitle, context);

  const aside = createElement("aside", "deliveries");
  aside.append(createElement("h3", "", "Entregas prováveis"));
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

    data.cases.forEach((item) => {
      caseCards.append(renderCaseCard(item));
      caseSections.append(renderCaseSection(item));
    });
  } catch (error) {
    caseCards.innerHTML =
      '<p class="load-error">Abra o projeto em um servidor local para carregar os cases.</p>';
  }
}

loadCases();

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
