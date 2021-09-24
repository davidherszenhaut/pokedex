import React, { ReactElement, useState } from "react";
import "./App.css";
import PokeHeader from "./PokeHeader/PokeHeader";
import PokeList from "./PokeList/PokeList";
import PokeSearch from "./PokeSearch/PokeSearch";

function App(): ReactElement {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className="App">
      <PokeHeader />
      <PokeSearch setSearchText={setSearchText} />
      <PokeList searchText={searchText.toLowerCase()} />
    </div>
  );
}

export default App;
