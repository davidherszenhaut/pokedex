import React, { ReactElement, useEffect, useState } from "react";
import { BASE_URL } from "../utils";

interface Props {
  pokeName: string;
  pokeUrl: string;
  pokeNumber: number;
}

const PokeListItem = ({
  pokeName,
  pokeUrl,
  pokeNumber,
}: Props): ReactElement => {
  const [pokemonSpriteURL, setPokemonSpriteURL] = useState<string>("");
  /**
   * @todo Move selectedPokemon state up to PokeList.
   */
  const [selectedPokemon, setSelectedPokemon] = useState<number>(0);

  useEffect(() => {
    fetch(`${BASE_URL}pokemon/${pokeNumber}`)
      .then((response) => response.json())
      .then((data) => setPokemonSpriteURL(data.sprites.front_default));
  }, []);

  const handleClick = () => {
    console.log(`#${pokeNumber}. ${pokeName}`);
    selectedPokemon > 0
      ? setSelectedPokemon(0)
      : setSelectedPokemon(pokeNumber);
  };

  /**
   * @todo Move details to new component.
   */
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
      {selectedPokemon > 0 ? "details" : "no details"}
    </div>
  );
};

export default PokeListItem;
