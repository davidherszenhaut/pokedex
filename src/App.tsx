import React, { ReactElement, useState } from "react";
import PokeHeader from "./PokeHeader/PokeHeader";
import PokeList from "./PokeList/PokeList";
import PokeSearch from "./PokeSearch/PokeSearch";

/**
 * The root component of the site.
 * @returns The `main` element of the site.
 */
function App(): ReactElement {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <main>
      <PokeHeader />
      <PokeSearch setSearchText={setSearchText} />
      <PokeList searchText={searchText.toLowerCase()} />
    </main>
  );
}

export default App;
