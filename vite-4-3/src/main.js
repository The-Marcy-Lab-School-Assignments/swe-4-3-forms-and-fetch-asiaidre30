//used js bin to write code

import { getRandomPokemon, postDiscoveredPokemon } from "./fetch-helpers.js";
import { renderPokemon, renderError, renderSuccess } from "./dom-helpers.js";

const button = document.getElementById("discover-button");
const form = document.getElementById("capture-form");

async function loadPokemon() {
  const { data, error } = await getRandomPokemon();

  if (error) {
    renderSuccess("");
    return renderError("Error fetching pokemon");
  }

  renderError("");
  renderPokemon(data);
  renderSuccess(`${data.name} was discovered!`);
}

loadPokemon();
button.addEventListener("click", loadPokemon);

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form));
  data.isFavorite = !!data.isFavorite;

  const { error } = await postDiscoveredPokemon(data);

  if (error) {
    renderSuccess("");
    return renderError("Error capturing pokemon");
  }

  renderError("");
  renderSuccess(`${data.name} captured!`);
  form.reset();
});
