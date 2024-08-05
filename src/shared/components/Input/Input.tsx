import { I_Props } from "@/shared/types";

const Input = ({ text, ...rest }: I_Props) => (
  <label {...rest}>
    {text}
    <input className="p-2 border border-indigo rounded-md ml-4" />
  </label>
);

export default Input;
