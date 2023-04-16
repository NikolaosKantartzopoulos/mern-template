import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../src/pages/home";

test("Home page initial render", async () => {
  const user = userEvent.setup();
  render(<Home />);

  expect(
    screen.getByText("Sass works if these letters are red!")
  ).toBeInTheDocument();

  const asyncTestingButton = screen.getByRole("button", {
    name: /Check Test!/i,
  });
  await user.click(asyncTestingButton);

  expect(screen.getByText(/Async testing works!!!/i)).toBeInTheDocument();
});
