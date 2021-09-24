import React, { ReactElement, useEffect, useState } from "react";
import { BASE_URL } from "../utils";

type SetSelectedPokemon = (pokeNumber: number) => void;

interface Props {
  pokeName: string;
  pokeUrl: string;
  pokeNumber: number;
  selectedPokemon: number;
  setSelectedPokemon: SetSelectedPokemon;
}

const PokeListItem = ({
  pokeName,
  pokeUrl,
  pokeNumber,
  selectedPokemon,
  setSelectedPokemon,
}: Props): ReactElement => {
  const [pokemonSpriteURL, setPokemonSpriteURL] = useState<string>("");

  useEffect(() => {
    fetch(`${BASE_URL}pokemon/${pokeNumber}`)
      .then((response) => response.json())
      .then((data) => setPokemonSpriteURL(data.sprites.front_default));
  }, []);

  const handleClick = () => {
    selectedPokemon === pokeNumber
      ? setSelectedPokemon(0)
      : setSelectedPokemon(pokeNumber);
  };

  return (
    <div>
      <p>
        <a href={pokeUrl}>
          #{pokeNumber}. {pokeName}
        </a>
      </p>
      {pokemonSpriteURL ? (
        <img src={pokemonSpriteURL} alt={pokeName} onClick={handleClick}></img>
      ) : null}
    </div>
  );
};

export default PokeListItem;
