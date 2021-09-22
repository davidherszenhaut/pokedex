import React from "react";
import { render, screen } from "@testing-library/react";
import PokeHeader from "./PokeHeader";

test("renders Pokédex header", () => {
  render(<PokeHeader />);
  const linkElement = screen.getByText(/Pokédex/i);
  expect(linkElement).toBeInTheDocument();
});
