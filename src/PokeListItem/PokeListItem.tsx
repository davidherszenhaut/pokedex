import React, { ReactElement, useEffect, useState } from "react";
import { BASE_URL } from "../utils";

const PokeListItem = (props: {
  name: string;
  url: string;
  number: number;
}): ReactElement => {
  const [pokemonSpriteURL, setPokemonSpriteURL] = useState<string>("");
  /**
   * @todo Move selectedPokemon state up to PokeList.
   */
  const [selectedPokemon, setSelectedPokemon] = useState<number>(0);

  useEffect(() => {
    fetch(`${BASE_URL}pokemon/${props.number}`)
      .then((response) => response.json())
      .then((data) => setPokemonSpriteURL(data.sprites.front_default));
  }, []);

  const handleClick = () => {
    console.log(`#${props.number}. ${props.name}`);
    selectedPokemon > 0
      ? setSelectedPokemon(0)
      : setSelectedPokemon(props.number);
  };

  /**
   * @todo Move details to new component.
   */
  return (
    <div>
      <p>
        <a href={props.url}>
          #{props.number}. {props.name}
        </a>
      </p>
      {pokemonSpriteURL ? (
        <img
          src={pokemonSpriteURL}
          alt={props.name}
          onClick={handleClick}
        ></img>
      ) : null}
      {selectedPokemon > 0 ? "details" : "no details"}
    </div>
  );
};

export default PokeListItem;
