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

const AllergiesListUser = () => {
  const allergies = useStore($allergies);
  const [newSelected, setNewSelected] = useState<Allergies[]>([]);
  const [availableAllergens, setAvailableAllergens] = useState<Allergies[]>([]);

  const handleClick = (item: Allergies) => {
    if (newSelected.find((allergen) => allergen.id === item.id)) {
      setNewSelected((prev) =>
        prev.filter((allergen) => allergen.id !== item.id),
      );
      setAvailableAllergens((prev) => [...prev, item]);
    } else {
      setNewSelected((prev) => [...prev, item]);
      setAvailableAllergens((prev) =>
        prev.filter((allergen) => allergen.id !== item.id),
      );
    }

    setNewSelected((prev) => {
      sendAllergiesFx(prev.map((item) => item.id));
      return prev;
    });
  };

  useEffect(() => {
    getAllergiesFx().then((res) => setAvailableAllergens(() => res));

    getSelectedAllergiesFx().then((res) => setNewSelected(() => [...res]));
  }, []);

  return (
    <div className="pl-[17px] pr-[30px] w-full">
      <h2 className="text-textMainColor text-24px">Выбранные</h2>
      <div className="grid grid-cols-2 gap-5 mt-[13px] w-full">
        {newSelected.map((item, index) => (
          <AllergiesItemUser
            item={item}
            key={index}
            onClick={() => handleClick(item)}
          />
        ))}
      </div>
      <h2 className="text-textMainColor mt-[13px] text-left text-24px">
        Доступные
      </h2>
      <div className="grid grid-cols-2 gap-5 mt-[13px] w-full">
        {allergies
          .filter(
            (item) => !newSelected.find((allergen) => allergen.id === item.id),
          )
          .map((item, index) => (
            <AllergiesItemUser
              item={item}
              key={index}
              onClick={() => handleClick(item)}
            />
          ))}
      </div>
    </div>
  );
};

export default AllergiesListUser;
