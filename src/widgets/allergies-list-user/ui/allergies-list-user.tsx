import React, { useEffect, useState } from "react";
import { useStore } from "effector-react";
import {
  $allergensByUser,
  $allergies,
  Allergies,
} from "../../../entities/allergies/model/allergies";
import {
  getAllergiesFx,
  getSelectedAllergiesFx,
  sendAllergiesFx,
} from "../../../entities/allergies/lib/allergies-fx";
import AllergiesItemUser from "../../../features/allergies-item-user/ui/allergies-item-user";
import {
  selectedAdd,
  selectedDelete,
} from "../../../entities/allergies/lib/allergies-events";

const AllergiesListUser = () => {
  const selectedAllergies = useStore($allergensByUser);
  const allergies = useStore($allergies);
  const [newSelected, setNewSelected] = useState<number[]>([]);
  const find = allergies.filter(
    (item) => !selectedAllergies.some((select) => select.id === item.id),
  );

  const handleAddToAvailable = (item: Allergies) => {
    selectedDelete(item);
    setNewSelected([...newSelected, item.id]);
    console.log(newSelected);
    sendAllergiesFx(newSelected);
  };

  const allergenAddToSelected = (item: Allergies) => {
    selectedAdd(item);
    setNewSelected([...newSelected, item.id]);
    console.log(newSelected);
    sendAllergiesFx(newSelected);
  };

  useEffect(() => {
    getSelectedAllergiesFx();
    getAllergiesFx();
  }, []);

  return (
    <div className="pl-[17px] pr-[30px] w-full">
      <h1 className="text-textMainColor text-24px">Выбранные</h1>
      <div className="grid grid-cols-2 gap-5 mt-[13px] w-full">
        {selectedAllergies.map((item, index) => (
          <AllergiesItemUser
            item={item}
            key={index}
            onClick={() => {
              handleAddToAvailable(item);
            }}
          />
        ))}
      </div>
      <h1 className="text-textMainColor mt-[13px] text-left text-24px">
        Доступные
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-[13px] w-full">
        {find.map((item, index) => (
          <AllergiesItemUser
            item={item}
            key={index}
            onClick={() => allergenAddToSelected(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllergiesListUser;
