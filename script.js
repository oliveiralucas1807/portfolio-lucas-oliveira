const caseCards = document.querySelector("#caseCards");
const caseSections = document.querySelector("#caseSections");

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
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.loading = "lazy";
    img.decoding = "async";

    figure.append(img);
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
