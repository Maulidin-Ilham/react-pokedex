import { useEffect, useState } from "react";
import { getPokemons } from "../utils/api";
import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemons();
        setPokemons(data.results);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4 my-3 ">
        <PokemonList pokemons={pokemons} />
      </div>
    </>
  );
};

export default Home;
