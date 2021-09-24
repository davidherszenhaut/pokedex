import React, { ReactElement, useEffect, useState } from "react";
import { BASE_URL, capitalize } from "../utils";

type SetSelectedPokemon = (pokeNumber: number) => void;

interface Props {
  pokeName: string;
  pokeUrl: string;
  pokeNumber: number;
  selectedPokemon: number;
  setSelectedPokemon: SetSelectedPokemon;
  searchText: string;
}

const PokeListItem = ({
  pokeName,
  pokeUrl,
  pokeNumber,
  selectedPokemon,
  setSelectedPokemon,
  searchText,
}: Props): ReactElement => {
  const [pokemonSpriteURL, setPokemonSpriteURL] = useState<string>("");
  const [pokemonNumber, setPokemonNumber] = useState<number>(pokeNumber);

  useEffect(() => {
    fetch(`${BASE_URL}pokemon/${pokeNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonSpriteURL(data.sprites.front_default);
        setPokemonNumber(data.id);
      });
  }, []);

  const handleClick = () => {
    selectedPokemon === pokeNumber
      ? setSelectedPokemon(0)
      : setSelectedPokemon(pokeNumber);
  };

  return pokeName.includes(searchText) ? (
    <div>
      <p>
        <a href={pokeUrl}>
          #{pokemonNumber}. {capitalize(pokeName)}
        </a>
      </p>
      {pokemonSpriteURL ? (
        <img src={pokemonSpriteURL} alt={pokeName} onClick={handleClick}></img>
      ) : null}
    </div>
  ) : (
    <></>
  );
};

export default PokeListItem;
