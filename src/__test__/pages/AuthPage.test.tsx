import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AuthForm from "@/features/components/AuthForm";

it("form present", () => {
  render(<AuthForm />);

  const form = screen.getByTestId("auth-form");

  expect(form).toBeDefined();
});
