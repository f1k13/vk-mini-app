import React, { useEffect } from "react";
import {
  getAllergiesFx,
  sendAllergiesFx,
} from "../../../entities/allergies/lib/allergies-fx";
import { useStore } from "effector-react";
import {
  $allergies,
  $selectedAllergies,
} from "../../../entities/allergies/model/allergies";
import AllergiesItem from "../../../features/allergies-item/ui/allergies-item";
import {
  allergenAdd,
  allergenDelete,
} from "../../../entities/allergies/lib/allergies-events";
import clsx from "clsx";
import router from "../../../shared/router/router";
import { MAIN_ROUTE } from "../../../shared/router/paths";

const AllergiesList = () => {
  const allergies = useStore($allergies);
  const selected = useStore($selectedAllergies);

  const setAllergies = () => {
    sendAllergiesFx(selected);
    router.navigate(MAIN_ROUTE);
  };
  const setActive = (id: number) => {
    const find = selected.find((item) => item === id);
    if (find) {
      allergenDelete(find);
    } else {
      allergenAdd(id);
    }
  };

  useEffect(() => {
    getAllergiesFx();
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center pt-[18px]">
      <h1 className="text-textMainColor text-32px">Выберите аллергены</h1>
      <div className="mt-[123px] grid grid-cols-2 place-items-center gap-x-[50px] gap-y-[20px]">
        {allergies?.map((item, index) => (
          <AllergiesItem
            item={item}
            setActive={setActive}
            active={selected.includes(item.id)}
            key={index}
          />
        ))}
      </div>
      <button
        disabled={selected.length <= 0}
        onClick={() => setAllergies()}
        className={clsx(
          "bg-blockSecondaryColor mt-20 hover:bg-hoverButton transition-colors duration-200  shadow-outline w-[320px] text-textMainColor py-2 rounded-3xl",
          "disabled:cursor-not-allowed hover:bg-blockSecondaryColor",
        )}
      >
        Продолжить
      </button>
    </div>
  );
};

export default AllergiesList;
