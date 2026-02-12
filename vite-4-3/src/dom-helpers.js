const list = document.getElementById("discovered-list");
const errorEl = document.getElementById("error");
const successEl = document.getElementById("success");

export function renderPokemon(p) {
  const li = document.createElement("li");
  li.innerHTML = `
    <h3>${p.name}</h3>
    <p>Types: ${p.types}</p>
    <img src="${p.sprite}" />
  `;
  list.appendChild(li);
}

export const renderError = (msg) => (errorEl.textContent = msg);
export const renderSuccess = (msg) => (successEl.textContent = msg);
