import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AuthForm from "@/features/components/AuthForm";
import userEvent from "@testing-library/user-event";
import { user } from "@/core/lib/userClass";
import { SyntheticEvent } from "react";
import { I_User } from "@/shared/types";

describe("AuthForm tests", () => {
  it("Form test for email", () => {
    render(<AuthForm />);

    const email = screen.getByLabelText("email");

    expect(email).toBeDefined();
  });

  it("Form test for password", () => {
    render(<AuthForm />);

    const password = screen.getByLabelText("password");

    expect(password).toBeDefined();
  });

  it("Form test for button", () => {
    render(<AuthForm />);

    const btn = screen.getByRole("test-formbutton");

    expect(btn).toBeDefined();
  });

  it("Form test button click", async (data: I_User) => {
    render(<AuthForm />);

    const userEvt = userEvent;
    await userEvt.click(screen.getByRole("test-formbutton"));

    expect((e: SyntheticEvent) => user.getUser(e, data));
  });
});
