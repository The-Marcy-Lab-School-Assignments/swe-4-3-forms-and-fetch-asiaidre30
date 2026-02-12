const FORM_ENDPOINT = "https://formspree.io/f/xeeleegy";

export async function getRandomPokemon() {
  try {
    const id = Math.floor(Math.random() * 150) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    return {
      data: {
        name: data.name,
        types: data.types.map((t) => t.type.name).join(", "),
        sprite: data.sprites.front_default,
      },
      error: null,
    };
  } catch (error) {
    return { data: null, error };
  }
}

export async function postDiscoveredPokemon(data) {
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    return { data: await res.json(), error: null };
  } catch (error) {
    return { data: null, error };
  }
}
