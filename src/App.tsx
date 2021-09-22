import React, { ReactElement, useEffect, useState } from "react";
import "./App.css";
import PokeHeader from "./PokeHeader/PokeHeader";

function App(): ReactElement {
  /**
   * @todo Move final constants to utilities file.
   */
  const BASE_URL = "https://pokeapi.co/api/v2/";
  const NUMBER_OF_POKEMON = 898;

  /**
   * @todo Create interface to remove `any`.
   */
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}pokemon?limit=${NUMBER_OF_POKEMON}`)
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
      <ul>{listPokemon}</ul>
    </div>
  );
}

export default App;
