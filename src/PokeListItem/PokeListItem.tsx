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
    <section className="border-2 rounded-md shadow-md flex justify-center flex-col items-center">
      {pokemonSpriteURL ? (
        <img
          src={pokemonSpriteURL}
          alt={pokemonName}
          onClick={handleClick}
        ></img>
      ) : null}
      <p>
        #{pokemonId}. {capitalize(pokemonName)}
      </p>
    </section>
  ) : (
    <></>
  );
};

export default PokeListItem;
