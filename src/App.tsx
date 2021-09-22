import React, { ReactElement, useEffect, useState } from "react";
import "./App.css";
import PokeHeader from "./PokeHeader/PokeHeader";
import { BASE_URL, NUMBER_OF_POKEMON_TOTAL, BasicPokemon } from "./utils";

function App(): ReactElement {
  const [pokemonList, setPokemonList] = useState<BasicPokemon[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}pokemon?limit=${NUMBER_OF_POKEMON_TOTAL}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemonList(data.results);
      });
  }, []);

  /**
   * @todo Move `listPokemon` to new component.
   */
  const listPokemon = pokemonList.map((pokemon) => (
    <li key={pokemon.name}>{pokemon.name}</li>
  ));

  return (
    <div className="App">
      <PokeHeader />
      {pokemonList.length > 0 ? <ul>{listPokemon}</ul> : null}
    </div>
  );
}

export default App;
