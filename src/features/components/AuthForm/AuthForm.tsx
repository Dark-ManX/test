import { auth } from "@/core/lib/authClass";
import { user } from "@/core/lib/userClass";
import Button from "@/shared/components/Button";
import Card from "@/shared/components/Card";
import Input from "@/shared/components/Input";
import { SyntheticEvent } from "react";

const AuthForm = () => {
  return (
    <Card className="flex flex-col gap-5 items-end" data-testid="auth-form">
      <Input
        text="email"
        value={auth.getEmail()}
        onChange={(e: SyntheticEvent) => auth.changeEmail(e)}
      />
      <Input
        text="password"
        value={auth.getPassword()}
        onChange={(e: SyntheticEvent) => auth.changePassword(e)}
      />
      <div className="w-full mt-5 flex justify-center gap-5">
        <Button
          text="log in"
          role="test-formbutton"
          onClick={(e: SyntheticEvent) =>
            user.getUser(e, {
              email: auth.getEmail(),
              password: auth.getPassword(),
            })
          }
        />
      </div>
    </Card>
  );
};

export default AuthForm;
