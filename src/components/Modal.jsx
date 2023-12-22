/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { getPokemonDetails } from "../utils/api";

const Modal = ({ isOpen, onClose, selectedPokemon }) => {
  const [pokemonDetail, setPokemonDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isOpen) {
          const data = await getPokemonDetails(selectedPokemon);
          setPokemonDetail(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isOpen, selectedPokemon]);

  const stats = pokemonDetail.stats;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900 "
                  >
                    {pokemonDetail.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="flex flex-row ">
                      {pokemonDetail.sprites &&
                        pokemonDetail.sprites.front_default && (
                          <img
                            src={pokemonDetail.sprites.front_default}
                            alt={pokemonDetail.name}
                          />
                        )}

                      {pokemonDetail.sprites &&
                        pokemonDetail.sprites.front_shiny && (
                          <img
                            src={pokemonDetail.sprites.front_shiny}
                            alt={pokemonDetail.name}
                          />
                        )}
                    </div>
                    <div className="mt-2">
                      <div>
                        <h1 className="font-semibold">Abilities</h1>
                      </div>
                      <div className="mt-1">
                        {pokemonDetail.abilities &&
                          pokemonDetail.abilities.map((ability, index) => (
                            <h1 key={index} className="capitalize">
                              {ability.ability.name}
                            </h1>
                          ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <div>
                        <h1 className="font-semibold">Stats</h1>
                      </div>
                      <div className="mt-1">
                        {stats &&
                          stats.map((stat, index) => (
                            <div key={index}>
                              <h1>
                                {stat.stat.name} : {stat.base_stat}
                              </h1>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded border border-transparent bg-black text-white p-2 hover:opacity-80 transiton duration-150 ease-in-out font-semibold"
                      onClick={onClose}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
