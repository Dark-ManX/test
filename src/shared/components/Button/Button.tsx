import { I_Props } from "@/shared/types";

const Button = ({ text, ...rest }: Omit<I_Props, "value" | "onChange">) => {
  return (
    <button className="p-2 bg-indigo-500" {...rest}>
      {text}
    </button>
  );
};

export default Button;
