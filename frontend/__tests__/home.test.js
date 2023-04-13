import React from "react";
import { screen, render } from "@testing-library/react";
import Home from "../src/pages/home";

test("Home page initial render", () => {
  render(<Home />);

  expect(
    screen.getByText("Sass works if these letters are red!")
  ).toBeInTheDocument();
});
