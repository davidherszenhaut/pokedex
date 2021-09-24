export const BASE_URL = "https://pokeapi.co/api/v2/";
export const NUMBER_OF_POKEMON_TOTAL = 898;
export const NUMBER_OF_POKEMON_GEN1 = 151;
export const NUMBER_OF_POKEMON_GEN2 = 100;
export const NUMBER_OF_POKEMON_GEN3 = 135;
export const NUMBER_OF_POKEMON_GEN4 = 107;
export const NUMBER_OF_POKEMON_GEN5 = 156;
export const NUMBER_OF_POKEMON_GEN6 = 72;
export const NUMBER_OF_POKEMON_GEN7 = 88;
export const NUMBER_OF_POKEMON_GEN8 = 89;

export interface BasicPokemon {
  name: string;
  url: string;
}

/**
 * Capitalizes a string by uppercasing the first letter and
 * lowercasing the rest. Returns an empty string if given
 * an empty string.
 * @param text A word or string to be capitalized.
 * @returns A capitalized version of the input string.
 */
export const capitalize = (text: string): string => {
  if (text === "") return "";
  if (text.length === 1) return text.toUpperCase();
  return (
    text.slice(0, 1).toUpperCase() + text.slice(1, text.length).toLowerCase()
  );
};
