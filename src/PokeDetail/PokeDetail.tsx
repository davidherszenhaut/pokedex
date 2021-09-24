import React, { ReactElement, useEffect, useState } from "react";
import { BASE_URL } from "../utils";

interface Props {
  pokeNumber: number;
}

const PokeDetail = ({ pokeNumber }: Props): ReactElement => {
  const [pokeName, setPokeName] = useState<string>("");
  const [pokeSpriteUrl, setPokeSpriteUrl] = useState<string>("");

  useEffect(() => {
    fetch(`${BASE_URL}pokemon/${pokeNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setPokeSpriteUrl(data.sprites.front_default);
        setPokeName(data.name);
      });
  }, [pokeNumber]);

  return (
    <div>
      {pokeName} - {pokeSpriteUrl}
    </div>
  );
};

export default PokeDetail;
