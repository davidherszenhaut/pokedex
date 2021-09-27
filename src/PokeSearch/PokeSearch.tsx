import React, { ReactElement } from "react";

/** A function to lift the state of the text input. */
export type SetSearchText = (text: string) => void;

export interface Props {
  /** A function to lift the state of the text input. */
  setSearchText: SetSearchText;
}

/**
 * A component containing the search bar.
 * @param setSearchText A function to lift the state of the text input.
 * @returns A component containing the search bar.
 */
const PokeSearch = ({ setSearchText }: Props): ReactElement => {
  /**
   * A way to update the site's state of the text input contents.
   * @param e The onChange event of the text input.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <form className="my-0 mx-auto flex justify-center items-center">
      <label className="text-gray-500 font-bold pr-3 dark:text-white">
        Search for a pokémon!
      </label>
      <input
        className="bg-gray-200 border-2 border-gray-200 rounded-md text-gray-700 px-2 focus:outline-none focus:border-purple-500 leading-tight py-2"
        type="text"
        placeholder="Pikachu"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
    </form>
  );
};

export default PokeSearch;
