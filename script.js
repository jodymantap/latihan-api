let card_container = document.getElementById("card-container");
let role = "admin";
let data = [
  {
    card_title: "Card 1",
    card_image:
      "https://images.unsplash.com/photo-1707655096648-1655344fc4d5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    card_title: "Card 1",
    card_image:
      "https://images.unsplash.com/photo-1708348244831-07e906ded4ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function createCard(card_title, card_image) {
  return `
        <div class="card" style="width: 18rem">
        <img
          src="${card_image}"
          class="card-img-top"
          style="height: 200px"
          id="img-1"
          alt="..."
        />
        <div class="card-body">
          <h5 id="title-1" class="card-title">${card_title}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button id="button-1" type="button" class="btn btn-primary">
            Go Somewhere
          </button>
        </div>
      </div>`;
}

function generateCards() {
  data.forEach((item) => {
    const cardHTML = createCard(item.card_title, item.card_image);
    card_container.innerHTML += cardHTML;
  });
}

generateCards();
