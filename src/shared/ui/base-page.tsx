import { ReactNode } from "react";
import NavBar from "../../widgets/navbar/ui/navbar";

const BasePage = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className="bg-white w-screen h-screen">
      <NavBar title={title} />
      {children}
    </div>
  );
};

export default BasePage;
