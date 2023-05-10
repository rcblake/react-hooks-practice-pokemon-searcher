import { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then((res) => res.json())
      .then((pokemonDBData) => setPokemonData(pokemonDBData));
  }, []);

  function handleFormData(newPokemon) {
    console.log(newPokemon);
    setPokemonData([...pokemonArray, newPokemon]);
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((res) => res.json())
      .then((postedPoke) => console.log(postedPoke));
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleFormData={handleFormData} />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemonArray={pokemonArray} />
    </Container>
  );
}

export default PokemonPage;
