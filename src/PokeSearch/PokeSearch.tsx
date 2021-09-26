import React, { ReactElement } from "react";

type SetSearchText = (text: string) => void;

interface Props {
  setSearchText: SetSearchText;
}

const PokeSearch = ({ setSearchText }: Props): ReactElement => {
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
