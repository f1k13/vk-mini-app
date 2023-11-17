import { useStore } from "effector-react";
import { $allergensUser } from "../../../entities/allergies/model/allergies";

import SymptomsItem from "../../../features/symptoms-item/ui/symptoms-item";

const SymptomsList = () => {
  const selected = useStore($allergensUser);
  return (
    <div className="pl-[16px] mt-[18px]">
      {selected.map((item, index) => (
        <SymptomsItem key={index} item={item} />
      ))}
    </div>
  );
};

export default SymptomsList;
