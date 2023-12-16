export const getPokemons = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
