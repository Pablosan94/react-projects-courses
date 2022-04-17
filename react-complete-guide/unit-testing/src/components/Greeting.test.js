import { Greeting } from "./Greeting";
import { render, screen } from "@testing-library/react";

test("will render h2", () => {
  render(<Greeting />);
  const h2 = screen.getByText("Hello World!");
  expect(h2).toBeInTheDocument();
});
