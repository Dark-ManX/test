import { I_Props } from "@/shared/types";

const Index = ({ text }: I_Props) => {
  return (
    <div className="p-2">
      <h3 className="text-2xl" data-testid="header">
        {text}
      </h3>
    </div>
  );
};

export default Index;
