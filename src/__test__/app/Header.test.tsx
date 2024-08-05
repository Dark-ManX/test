import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "@/app/components/Header";
import { navigation } from "@/app/configs/navigation";
import userEvent from "@testing-library/user-event";

describe("Header tests", () => {
  it("nav length", () => {
    render(<Header data={navigation} />);

    const links = screen.getAllByTestId("nav-item");

    expect(links.length).toBe(2);
  });

  it("check redirect to auth", async () => {
    render(<Header data={navigation} />);

    const user = userEvent.setup();
    await user.click(screen.getByText("Auth"));

    expect(screen.getByTestId("auth-form")).toBeDefined();
  });
});
