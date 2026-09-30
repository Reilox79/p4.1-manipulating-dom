/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */

/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */

fetch("./data/heroes.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    console.log(jsondata);
    renderCards(jsondata);
  })
  .catch((e) => {
    console.log(e);
  });

// the place where we are going to insert the cards
const heroesRow = document.getElementById("heroes");

// we use this as a template to replicate
const cardTemplate = document.getElementById("card-template").content;

function renderCards(jsondata) {
  for (let char of jsondata.data.results) {
    // copy of the template, with all its children
    let newCard = cardTemplate.cloneNode(true);

    const img = newCard.querySelector(".card-img-top");
    img.src = char.thumbnail.path + "." + char.thumbnail.extension;
    img.alt = char.name;

    newCard.querySelector(".card-title").textContent = char.name;
    newCard.querySelector(".card-text").textContent = char.description;

    /**
     * the ids of the template are the same in every card, so we add the id of the hero
     * to the panels and to the buttons that control them
     */
    for (let panel of newCard.querySelectorAll(".accordion-collapse")) {
      panel.id = panel.id + "_" + char.id;
    }

    for (let button of newCard.querySelectorAll(".accordion-button")) {
      button.setAttribute(
        "data-bs-target",
        button.getAttribute("data-bs-target") + "_" + char.id
      );
      button.setAttribute(
        "aria-controls",
        button.getAttribute("aria-controls") + "_" + char.id
      );
    }

    heroesRow.append(newCard);
  }
}