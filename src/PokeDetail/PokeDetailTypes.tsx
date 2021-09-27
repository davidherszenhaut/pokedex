import React, { ReactElement } from "react";

export interface Props {
  /** The types of the Pokémon. */
  pokemonTypes: string[];
}

/**
 * A way to get the matching color of the type.
 * @param type The type to "look up".
 * @returns The matching color of `type`.
 */
const getColor = (type: string): string => {
  switch (type) {
    case "normal":
      return "bg-gray-500";
    case "fighting":
      return "bg-red-500";
    case "flying":
      return "bg-purple-400";
    case "poison":
      return "bg-purple-800";
    case "ground":
      return "bg-yellow-300";
    case "rock":
      return "bg-yellow-500";
    case "bug":
      return "bg-green-400";
    case "ghost":
      return "bg-purple-500";
    case "steel":
      return "bg-gray-400";
    case "fire":
      return "bg-yellow-500";
    case "water":
      return "bg-blue-500";
    case "grass":
      return "bg-green-700";
    case "electric":
      return "bg-yellow-300";
    case "psychic":
      return "bg-pink-400";
    case "ice":
      return "bg-blue-200";
    case "dragon":
      return "bg-purple-900";
    case "dark":
      return "bg-gray-700";
    case "fairy":
      return "bg-pink-300";
    case "unknown":
      return "bg-green-500";
    case "shadow":
      return "bg-gray-700";
    default:
      return "bg-gray-500";
  }
};

const PokeDetailTypes = ({ pokemonTypes }: Props): ReactElement => {
  return (
    <div className="w-full pt-3 flex flex-row justify-items-start">
      {pokemonTypes.map((type) => (
        <p
          key={type}
          className={"mr-3 p-1 font-bold rounded-md " + getColor(type)}
        >
          {type.toUpperCase()}
        </p>
      ))}
    </div>
  );
};

export default PokeDetailTypes;
