import { I_Props } from "@/types/UI.types";

const CustomOption = ({ children, ...rest }: Partial<I_Props>) => (
  <option {...rest}>{children}</option>
);

export default CustomOption;
