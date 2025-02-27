"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => (
  <>
    <nav className="flex gap-4 mb-6">
      <Link href="/jobs">Jobs</Link>
      <Link href="/liked">Favorite</Link>
    </nav>
    {children}
  </>
);

export default MainLayout;
