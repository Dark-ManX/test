import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => (
  <>
    <div className="flex gap-4 mb-6">
      <Link href="/auth/login">Login</Link>
      <Link href="/auth/create">Create</Link>
    </div>
    {children}
  </>
);

export default AuthLayout;
