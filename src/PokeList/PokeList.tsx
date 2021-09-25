import React, { ReactElement, useEffect, useState } from "react";
import PokeDetail from "../PokeDetail/PokeDetail";
import PokeListItem from "../PokeListItem/PokeListItem";
import { BASE_URL, NUMBER_OF_POKEMON_TOTAL, BasicPokemon } from "../utils";

interface Props {
  searchText: string;
}

const PokeList = ({ searchText }: Props): ReactElement => {
  const [pokemonList, setPokemonList] = useState<BasicPokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<number>(0);

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
      pokemonName={pokemon.name}
      pokemonNumber={index + 1}
      selectedPokemon={selectedPokemon}
      setSelectedPokemon={setSelectedPokemon}
      searchText={searchText}
    />
  ));

  return (
    <div className="grid grid-cols-2 gap-4 pt-8 px-4 md:grid-cols-3 lg:grid-cols-4">
      {/**
       * @todo Move PokeDetail up to App.
       */}
      {selectedPokemon !== 0 ? (
        <PokeDetail pokemonNumber={selectedPokemon} />
      ) : null}
      {listPokemon}
    </div>
  );
};

export default PokeList;
