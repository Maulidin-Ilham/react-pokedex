import { useState } from "react";
import Modal from "./Modal";

/* eslint-disable react/prop-types */
const PokemonCard = ({ pokemons }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const openModal = (pokemonName) => {
    setIsOpen(true);
    setSelectedPokemon(pokemonName);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setIsOpen(false);
  };

  return (
    <>
      {pokemons.map((pokemon, index) => (
        <div
          key={index}
          className="border rounded  h-[200px] shadow p-2 flex flex-col justify-center items-center md:w-[220px] lg:w-[250px] lg:h-[220px]"
        >
          <h1 className="font-semibold text-lg">{pokemon.name}</h1>

          <img
            src={`https://img.pokemondb.net/sprites/black-white/normal/${pokemon.name}.png`}
            alt={pokemon.name}
            className="object-cover"
          />
          <div className="mt-3">
            <button
              className="px-4 py-2 bg-black text-white rounded hover:opacity-80 transition duration-150 ease-in-out font-semibold text-base"
              onClick={() => openModal(pokemon.name)}
            >
              Detail
            </button>
          </div>
        </div>
      ))}

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          selectedPokemon={selectedPokemon}
        />
      )}
    </>
  );
};

export default PokemonCard;
