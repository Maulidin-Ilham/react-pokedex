import { useEffect, useState } from "react";
import { getPokemons } from "../utils/api";

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
      <div className="text-center font-semibold text-3xl">
        Hello this is home page
      </div>
      {pokemons.map((pokemon, index) => (
        <h1 key={index}>{pokemon.name}</h1>
      ))}
    </>
  );
};

export default Home;
