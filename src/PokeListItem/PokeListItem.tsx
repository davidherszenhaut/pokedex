import React, { ReactElement, useEffect, useState } from "react";
import { BASE_URL, capitalize } from "../utils";

type SetSelectedPokemon = (pokemonNumber: number) => void;

interface Props {
  pokemonName: string;
  pokemonUrl: string;
  pokemonNumber: number;
  selectedPokemon: number;
  setSelectedPokemon: SetSelectedPokemon;
  searchText: string;
}

const PokeListItem = ({
  pokemonName,
  pokemonUrl,
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
    <div>
      <p>
        <a href={pokemonUrl}>
          #{pokemonId}. {capitalize(pokemonName)}
        </a>
      </p>
      {pokemonSpriteURL ? (
        <img
          src={pokemonSpriteURL}
          alt={pokemonName}
          onClick={handleClick}
        ></img>
      ) : null}
    </div>
  ) : (
    <></>
  );
};

export default PokeListItem;
