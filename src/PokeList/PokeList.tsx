import React, { ReactElement, useEffect, useState } from "react";
import PokeListItem from "../PokeListItem/PokeListItem";
import { BASE_URL, NUMBER_OF_POKEMON_TOTAL, BasicPokemon } from "../utils";

const PokeList = (): ReactElement => {
  const [pokemonList, setPokemonList] = useState<BasicPokemon[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}pokemon?limit=${NUMBER_OF_POKEMON_TOTAL}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      });
  }, []);

  const listPokemon = pokemonList.map((pokemon, index) => (
    <PokeListItem
      key={pokemon.name}
      pokeName={pokemon.name}
      pokeUrl={pokemon.url}
      pokeNumber={index + 1}
    />
  ));

  return <div>{listPokemon}</div>;
};

export default PokeList;
