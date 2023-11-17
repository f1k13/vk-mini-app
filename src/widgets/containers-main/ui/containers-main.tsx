import React, { useEffect } from "react";
import { getWeatherFx } from "../../../entities/weather/lib/weather-effect";
import Weather from "../../../features/weather/ui/weather";
import router from "../../../shared/router/router";
import {
  REACTIONS_ROUTE,
  SELECT_ROUTE,
  SYMPTOMS_ROUTE,
} from "../../../shared/router/paths";
import { getSelectedAllergiesFx } from "../../../entities/allergies/lib/allergies-fx";

const ContainersMain = () => {
  useEffect(() => {
    getWeatherFx();
    getSelectedAllergiesFx();
  }, []);
  return (
    <div className="w-full p-10">
      <Weather height={"h-[250px]"} button={true} />
      <div className="w-full mt-[34px] flex justify-between ">
        <div
          onClick={() => router.navigate(SYMPTOMS_ROUTE)}
          className="text-textMainColor w-[45%] flex justify-center items-center text-20px bg-blockSecondaryColor h-[120px] rounded-3xl shadow-outline p-5 transition-colors duration-200 hover:bg-hoverButton cursor-pointer"
        >
          <p> Симптомы</p>
        </div>
        <div
          onClick={() => router.navigate(REACTIONS_ROUTE)}
          className=" w-[45%]  flex justify-center items-center bg-blockSecondaryColor h-[120px] rounded-3xl shadow-outline p-5 transition-colors duration-200 hover:bg-hoverButton cursor-pointer"
        >
          <p className="text-textMainColor text-20px max-[359px]:text-16px">
            Перекрёстные реакции
          </p>
        </div>
      </div>
      <div
        onClick={() => router.navigate(SELECT_ROUTE)}
        className="text-textMainColor mt-[21px] w-full flex justify-center items-center  bg-blockSecondaryColor h-[69px] rounded-3xl shadow-outline p-5 transition-colors duration-200 hover:bg-hoverButton cursor-pointer"
      >
        <p className="text-textMainColor text-20px ">Изменить аллергены</p>
      </div>
    </div>
  );
};

export default ContainersMain;
