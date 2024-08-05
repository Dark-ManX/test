import { ReactNode } from "react";

export interface I_Props {
  text: string;
  // value: string;
  // onChange: any
  [x: string]: any;
}

export interface I_User {
  email: string;
  password: string;
}

export interface I_Card {
  children: ReactNode;
  className: string;
  [x: string]: unknown;
}

export interface I_HeaderData {
  title: string;
  path: string;
  id: string;
}
