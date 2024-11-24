import { I_Props } from "@/types/UI.types";
import Link from "next/link";

const CustomLink = ({ children, ...rest }: I_Props) => {
  return (
    <Link {...rest} style={{ color: "blue" }}>
      {children}
    </Link>
  );
};

export default CustomLink;
