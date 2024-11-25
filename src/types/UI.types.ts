import { ReactNode } from "react";

export interface I_Props {
  href: string;
  children: string | ReactNode;
  [x: string]: unknown;
}
