import { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonData] = useState([]);
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then((res) => res.json())
      .then((pokemonDBData) => setPokemonData(pokemonDBData));
  }, []);

  function handleFormData(newPokemon) {
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

  const handleSearchBy = (e) => {
    setSearchBy(e.target.value);
  };

  const filteredPokeArray = pokemonArray.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchBy.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleFormData={handleFormData} />
      <br />
      <Search handleSearchBy={handleSearchBy} />
      <br />
      <PokemonCollection pokemonArray={filteredPokeArray} />
    </Container>
  );
}

export default PokemonPage;
