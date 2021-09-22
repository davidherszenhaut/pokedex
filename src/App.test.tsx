import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";

test("renders Pokémon list", async () => {
  const screen = render(<App />);
  await waitFor(() => screen.getByText("Pokédex"));
});
