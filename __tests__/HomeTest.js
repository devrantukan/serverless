import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Home from "../pages/index";

test("Check for Getting Started Text", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Luke Skywalker")).toBeInTheDocument();
});