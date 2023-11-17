import { ReactNode } from "react";
import Banner from "../../widgets/banner/ui/banner";
import { useStore } from "effector-react";
import { $user } from "../../entities/user/model/user";
import clsx from "clsx";

const BasePage = ({
  children,
  title,
  back,
  className,
}: {
  children: ReactNode;
  title?: string;
  back?: boolean;
  className?: string;
}) => {
  const user = useStore($user);
  console.log(user);
  return (
    <div className={clsx("bg-white w-screen h-screen", className)}>
      <Banner back={back} title={title} />
      {children}
    </div>
  );
};

export default BasePage;
