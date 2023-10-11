import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Home from "../pages/index";

test("Check for Getting Started Text", () => {
  const { getByText } = render(<Home />);
  //expect(getByText("09-2023 dönemine ait enflasyon verileri")).toBeInTheDocument();
});

