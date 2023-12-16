/* eslint-disable react/prop-types */
const PokemonCard = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon, index) => (
        <div
          key={index}
          className="border rounded h-[200px] shadow p-2 flex flex-col md:w-[220px] lg:w-[250px] "
        >
          <h1>{pokemon.name}</h1>
          <img
            src={`https://img.pokemondb.net/sprites/black-white/normal/${pokemon.name}.png`}
            alt={pokemon.name}
            className="object-contain"
          />
          <button className="px-4 py-2 bg-black text-white">Catch</button>
        </div>
      ))}
    </>
  );
};

export default PokemonCard;
