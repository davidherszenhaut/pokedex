import React, { ReactElement, useEffect, useState } from "react";
import { BASE_URL, capitalize } from "../utils";

type SetSelectedPokemon = (pokemonNumber: number) => void;
type SetIsOpen = (isOpen: boolean) => void;

interface Props {
  pokemonName: string;
  pokemonNumber: number;
  setSelectedPokemon: SetSelectedPokemon;
  searchText: string;
  setIsOpen: SetIsOpen;
}

const PokeListItem = ({
  pokemonName,
  pokemonNumber,
  setSelectedPokemon,
  searchText,
  setIsOpen,
}: Props): ReactElement => {
  const [pokemonSpriteURL, setPokemonSpriteURL] = useState<string>("");
  const [pokemonId, setPokemonId] = useState<number>(pokemonNumber);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${BASE_URL}pokemon/${pokemonNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonSpriteURL(data.sprites.front_default);
        setPokemonId(data.id);
        setIsLoading(false);
      });
  }, []);

  const handleClick = () => {
    setSelectedPokemon(pokemonNumber);
    setIsOpen(true);
  };

  return isLoading ? (
    <img
      src={process.env.PUBLIC_URL + "/logo64.png"}
      alt="Loading..."
      className="animate-spin"
    ></img>
  ) : pokemonName.includes(searchText) ? (
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
        <span className="text-gray-500">#{pokemonId}</span>{" "}
        {capitalize(pokemonName)}
      </p>
    </section>
  ) : (
    <></>
  );
};

export default PokeListItem;
