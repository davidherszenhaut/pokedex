import React, { ReactElement } from "react";
import "./App.css";
import PokeHeader from "./PokeHeader/PokeHeader";
import PokeList from "./PokeList/PokeList";

function App(): ReactElement {
  return (
    <div className="App">
      <PokeHeader />
      <PokeList />
    </div>
  );
}

export default App;
