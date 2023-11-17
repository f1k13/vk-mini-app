import { useStore } from "effector-react";
import { $allergensUser } from "../../../entities/allergies/model/allergies";
import ReactionsItem from "../../../features/reactions-item/ui/reactions-item";

const ReactionsList = () => {
  const selected = useStore($allergensUser);

  return (
    <div className="pl-[16px] mt-[18px]">
      {selected.map((item, index) => (
        <ReactionsItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ReactionsList;
