import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import IndexPage from "@/pages/IndexPage";

it("Test index page", () => {
  render(<IndexPage text="text" />);

  const text = screen.getByText("text");
  expect(text).toBeDefined();
});
