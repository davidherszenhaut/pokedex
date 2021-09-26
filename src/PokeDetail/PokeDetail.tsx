import React, { ReactElement, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { BASE_URL, capitalize } from "../utils";

type SetIsOpen = (isOpen: boolean) => void;

interface Props {
  pokemonNumber: number;
  isOpen: boolean;
  setIsOpen: SetIsOpen;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: Record<string, string>;
  version: Record<string, string>;
}

interface FlavorText {
  version: string;
  text: string;
}

const PokeDetail = ({
  pokemonNumber,
  isOpen,
  setIsOpen,
}: Props): ReactElement => {
  const [pokemonName, setPokemonName] = useState<string>("");
  // const [pokemonSpriteUrl, setPokemonSpriteUrl] = useState<string>("");
  const [pokemonFlavorTexts, setPokemonFlavorTexts] = useState<FlavorText[]>(
    []
  );
  const [pokemonGenus, setPokemonGenus] = useState<string>("");
  const [pokemonGeneration, setPokemonGeneration] = useState<string>("");
  const [pokemonHabitat, setPokemonHabitat] = useState<string>("");

  useEffect(() => {
    fetch(`${BASE_URL}pokemon/${pokemonNumber}`)
      .then((response) => response.json())
      .then((data) => {
        // setPokemonSpriteUrl(data.sprites.front_default);
        setPokemonName(data.name);
      });
    fetch(`${BASE_URL}pokemon-species/${pokemonNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonFlavorTexts(
          data.flavor_text_entries
            .filter((entry: FlavorTextEntry) => entry.language.name === "en")
            .map((entry: FlavorTextEntry) => ({
              version: entry.version.name,
              text: entry.flavor_text,
            }))
        );
        setPokemonGenus(
          data.genera.filter(
            (entry: FlavorTextEntry) => entry.language.name === "en"
          )[0].genus
        );
        setPokemonGeneration(data.generation.name.split("-")[1].toUpperCase());
        data.habitat && data.habitat.name
          ? setPokemonHabitat(data.habitat.name)
          : setPokemonHabitat("N/A");
      });
  }, [pokemonNumber]);

  return (
    <Dialog
      as="div"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-10 overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0" />
      <Dialog.Title>{capitalize(pokemonName)}</Dialog.Title>
      {pokemonFlavorTexts.length > 0 ? (
        <p>{pokemonFlavorTexts[0].text}</p>
      ) : null}
      <p>{pokemonGenus}</p>
      <p>{pokemonGeneration}</p>
      <p>{pokemonHabitat}</p>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </Dialog>
  );
};

export default PokeDetail;
