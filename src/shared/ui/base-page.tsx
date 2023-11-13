import { ReactNode } from "react";
import Banner from "../../widgets/banner/ui/banner";

const BasePage = ({
  children,
  title,
  back,
}: {
  children: ReactNode;
  title?: string;
  back?: boolean;
}) => {
  return (
    <div className="bg-white w-screen h-screen">
      <Banner back={back} title={title} />
      <div className="p-10">{children}</div>
    </div>
  );
};

export default BasePage;
