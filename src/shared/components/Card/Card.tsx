import { I_Card } from "@/shared/types";

const Card = ({ children, className, ...rest }: I_Card) => (
  <div className={`p-6 rounded-lg bg-gray-700 ${className}`} {...rest}>
    {children}
  </div>
);

export default Card;
