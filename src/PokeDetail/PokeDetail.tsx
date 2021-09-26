import React, { ReactElement, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { BASE_URL } from "../utils";

type SetIsOpen = (isOpen: boolean) => void;

interface Props {
  pokemonNumber: number;
  isOpen: boolean;
  setIsOpen: SetIsOpen;
}

const PokeDetail = ({
  pokemonNumber,
  isOpen,
  setIsOpen,
}: Props): ReactElement => {
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
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="border-2 border-red-800 fixed inset-0 bg-black opacity-80 flex justify-center items-center"
    >
      <Dialog.Overlay />
      <Dialog.Title className="text-red-50">{pokemonName}</Dialog.Title>
      <Dialog.Description>{pokemonSpriteUrl}</Dialog.Description>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </Dialog>
  );
};

export default PokeDetail;
