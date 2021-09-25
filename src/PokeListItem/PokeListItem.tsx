import React, { ReactElement, useEffect, useState } from "react";
import { BASE_URL, capitalize } from "../utils";

type SetSelectedPokemon = (pokemonNumber: number) => void;

interface Props {
  pokemonName: string;
  pokemonNumber: number;
  selectedPokemon: number;
  setSelectedPokemon: SetSelectedPokemon;
  searchText: string;
}

const PokeListItem = ({
  pokemonName,
  pokemonNumber,
  selectedPokemon,
  setSelectedPokemon,
  searchText,
}: Props): ReactElement => {
  const [pokemonSpriteURL, setPokemonSpriteURL] = useState<string>("");
  const [pokemonId, setPokemonId] = useState<number>(pokemonNumber);

  useEffect(() => {
    fetch(`${BASE_URL}pokemon/${pokemonNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonSpriteURL(data.sprites.front_default);
        setPokemonId(data.id);
      });
  }, []);

  const handleClick = () => {
    selectedPokemon === pokemonNumber
      ? setSelectedPokemon(0)
      : setSelectedPokemon(pokemonNumber);
  };

  return pokemonName.includes(searchText) ? (
    <section className="border-2 rounded-md shadow-md flex justify-center flex-col items-center hover:border-purple-500 transition-colors">
      <div className="relative w-28 h-28 flex justify-center items-center">
        <div className="w-24 h-24 rounded-full bg-gray-200 absolute"></div>
        {pokemonSpriteURL ? (
          <img
            src={pokemonSpriteURL}
            alt={pokemonName}
            onClick={handleClick}
            className="absolute w-24 h-24"
          ></img>
        ) : null}
      </div>
      <p>
        <span className="text-gray-400">#{pokemonId}</span>{" "}
        {capitalize(pokemonName)}
      </p>
    </section>
  ) : (
    <></>
  );
};

export default PokeListItem;
