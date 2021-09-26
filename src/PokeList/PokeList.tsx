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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch(`${BASE_URL}pokemon?limit=${NUMBER_OF_POKEMON_TOTAL}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    selectedPokemon !== 0 ? setIsOpen(true) : setIsOpen(false);
  }, [selectedPokemon]);

  const listPokemon = pokemonList.map((pokemon, index) => (
    <PokeListItem
      key={pokemon.name}
      pokemonName={pokemon.name}
      pokemonNumber={index + 1}
      setSelectedPokemon={setSelectedPokemon}
      searchText={searchText}
      setIsOpen={setIsOpen}
    />
  ));

  return isLoading ? (
    <img
      src={process.env.PUBLIC_URL + "/logo192.png"}
      alt="Loading..."
      className="animate-spin m-auto py-40"
    ></img>
  ) : (
    <div>
      {selectedPokemon !== 0 ? (
        <PokeDetail
          pokemonNumber={selectedPokemon}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : null}
      <div className="grid grid-cols-2 gap-4 pt-8 px-4 md:grid-cols-3 lg:grid-cols-6">
        {listPokemon}
      </div>
    </div>
  );
};

export default PokeList;
