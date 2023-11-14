import { ReactNode } from "react";
import Banner from "../../widgets/banner/ui/banner";
import { useStore } from "effector-react";
import { $user } from "../../entities/user/model/user";

const BasePage = ({
  children,
  title,
  back,
}: {
  children: ReactNode;
  title?: string;
  back?: boolean;
}) => {
  const user = useStore($user);
  console.log(user);
  return (
    <div className="bg-white w-screen h-screen">
      <Banner back={back} title={title} />
      {children}
    </div>
  );
};

export default BasePage;
