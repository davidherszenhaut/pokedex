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
    <div>
      <input
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
    </div>
  );
};

export default PokeSearch;
