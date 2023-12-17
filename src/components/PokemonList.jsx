import PokemonCard from "./PokemonCard";

/* eslint-disable react/prop-types */
const PokemonList = ({ pokemons }) => {
  return (
    <div className=" mx-auto  grid grid-cols-2 gap-4 md:max-w-2xl md:grid-cols-3  lg:max-w-[800px] mt-8">
      <PokemonCard pokemons={pokemons} />
    </div>
  );
};

export default PokemonList;
