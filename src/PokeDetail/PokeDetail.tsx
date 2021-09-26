import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
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
  const [pokemonSpriteUrl, setPokemonSpriteUrl] = useState<string>("");
  const [pokemonFlavorTexts, setPokemonFlavorTexts] = useState<FlavorText[]>(
    []
  );
  const [pokemonGenus, setPokemonGenus] = useState<string>("");
  const [pokemonGeneration, setPokemonGeneration] = useState<string>("");
  const [pokemonHabitat, setPokemonHabitat] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${BASE_URL}pokemon/${pokemonNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonSpriteUrl(data.sprites.front_default);
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
          : setPokemonHabitat("");
        setIsLoading(false);
      });
  }, [pokemonNumber]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center"
      >
        <div className="min-h-screen px-4 text-left">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 dark:text-white shadow-xl rounded-2xl">
              {isLoading ? (
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/logo64.png"}
                    alt="Loading..."
                    className="animate-spin"
                  ></img>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 mt-6"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    {capitalize(pokemonName)}, the {pokemonGenus}
                  </Dialog.Title>
                  <div className="mt-2 text-left flex flex-col justify-center items-center">
                    <img src={pokemonSpriteUrl}></img>
                    {pokemonFlavorTexts.length > 0 ? (
                      <p>{pokemonFlavorTexts[0].text}</p>
                    ) : null}
                    <p className="w-full pt-3">
                      Generation {pokemonGeneration}
                    </p>
                    <p className="w-full pt-3">
                      Habitat:{" "}
                      {pokemonHabitat.length > 0
                        ? capitalize(pokemonHabitat)
                        : "N/A"}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PokeDetail;
