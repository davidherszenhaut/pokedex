import React, { ReactElement, useState } from "react";
import solrock from "../images/solrock.png";
import solrockSilhouette from "../images/solrock-silhouette.png";
import lunatone from "../images/lunatone.png";
import lunatoneSilhouette from "../images/lunatone-silhouette.png";

const PokeHeader = (): ReactElement => {
  const [isLightMode, setIsLightMode] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setIsLightMode(false) : setIsLightMode(true);
  };

  return (
    <header className="text-4xl text-center py-6 grid grid-cols-3">
      <div></div>
      <h1 className="self-center">Pokédex</h1>
      <div className="flex justify-end items-center space-x-2">
        <span className="text-sm text-gray-800 dark:text-gray-500">
          <img
            src={isLightMode ? solrock : solrockSilhouette}
            alt="Light"
            height={64}
            width={64}
          ></img>
        </span>
        <div>
          <input
            type="checkbox"
            onChange={(e) => handleChange(e)}
            className="hidden"
            id="theme-toggle"
          ></input>
          <label htmlFor="theme-toggle">
            <div className="w-9 h-5 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1">
              <div className="toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out"></div>
            </div>
          </label>
        </div>
        <span className="text-sm text-gray-400 dark:text-gray-100">
          <img
            src={isLightMode ? lunatoneSilhouette : lunatone}
            alt="Dark"
            height={64}
            width={64}
          ></img>
        </span>
      </div>
    </header>
  );
};

export default PokeHeader;
