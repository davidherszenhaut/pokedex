import React, { ReactElement, useEffect, useState } from "react";
import { BASE_URL } from "../utils";

interface Props {
  pokemonNumber: number;
}

const PokeDetail = ({ pokemonNumber }: Props): ReactElement => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonSpriteUrl, setPokeSpriteUrl] = useState<string>("");

  useEffect(() => {
    fetch(`${BASE_URL}pokemon/${pokemonNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setPokeSpriteUrl(data.sprites.front_default);
        setPokemonName(data.name);
      });
  }, [pokemonNumber]);

  return (
    <div>
      {pokemonName} - {pokemonSpriteUrl}
    </div>
  );
};

export default PokeDetail;
