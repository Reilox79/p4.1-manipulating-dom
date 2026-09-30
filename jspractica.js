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

function renderCards(jsondata) {
  for (let char of jsondata.data.results) {
    // column
    const col = document.createElement("div");
    col.classList.add("col-sm-6", "col-md-4", "col-xl-3", "d-flex", "mt-3");

    // card
    const card = document.createElement("div");
    card.classList.add("card", "flex-fill");

    // card body with the name
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h4");
    title.classList.add("card-title");
    title.textContent = char.name;

    cardBody.append(title);
    card.append(cardBody);
    col.append(card);
    heroesRow.append(col);
  }
}