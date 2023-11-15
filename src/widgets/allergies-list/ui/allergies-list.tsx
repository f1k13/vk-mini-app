import React, { useEffect } from "react";
import { getAllergiesFx } from "../../../entities/allergies/lib/allergies-fx";
import { useStore } from "effector-react";
import { $allergies } from "../../../entities/allergies/model/allergies";
import AllergiesItem from "../../../features/allergies-item/allergies-item";

const AllergiesList = () => {
  useEffect(() => {
    getAllergiesFx();
  }, []);
  const allergies = useStore($allergies);

  return (
    <div className="w-full flex flex-col justify-center items-center pt-[18px]">
      <h1 className="text-textMainColor text-32px">Выберите аллергены</h1>
      <div className="mt-[123px] grid grid-cols-2 place-items-center gap-x-[50px] gap-y-[20px]">
        {allergies?.map((item, index) => (
          <AllergiesItem item={item} index={index} key={index}></AllergiesItem>
        ))}
      </div>
      <button>Продолжить</button>
    </div>
  );
};

export default AllergiesList;
