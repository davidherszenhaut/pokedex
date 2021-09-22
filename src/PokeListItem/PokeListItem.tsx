import React, { ReactElement, useEffect, useState } from "react";
import { BASE_URL } from "../utils";

const PokeListItem = (props: {
  name: string;
  url: string;
  number: number;
}): ReactElement => {
  const [pokemonSpriteURL, setPokemonSpriteURL] = useState<string>("");

  useEffect(() => {
    fetch(`${BASE_URL}pokemon/${props.number}`)
      .then((response) => response.json())
      .then((data) => setPokemonSpriteURL(data.sprites.front_default));
  }, []);

  return (
    <div>
      <p>
        <a href={props.url}>
          #{props.number}. {props.name}
        </a>
      </p>
      {pokemonSpriteURL ? (
        <img src={pokemonSpriteURL} alt={props.name}></img>
      ) : null}
    </div>
  );
};

export default PokeListItem;
