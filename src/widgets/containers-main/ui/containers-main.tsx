import React, { useEffect } from "react";
import { getWeatherFx } from "../../../entities/weather/lib/weather-effect";
import Weather from "../../../features/weather/weather";

const ContainersMain = () => {
  useEffect(() => {
    getWeatherFx();
  }, []);
  return (
    <div className="w-full p-10">
      <Weather isVisible={true} />
      <div className="w-full mt-[34px] flex justify-between ">
        <div className="text-textMainColor w-[45%] flex justify-center items-center text-20px bg-blockSecondaryColor h-[120px] rounded-3xl shadow-outline p-5">
          <p> Симптомы</p>
        </div>
        <div className="text-textMainColor w-[45%] flex justify-center items-center text-20px bg-blockSecondaryColor h-[120px] rounded-3xl shadow-outline p-5">
          <p>Перекрёстные реакции</p>
        </div>
      </div>
      <div className="text-textMainColor mt-[21px] w-full flex justify-center items-center text-20px bg-blockSecondaryColor h-[69px] rounded-3xl shadow-outline p-5">
        <p>Изменить аллергены</p>
      </div>
    </div>
  );
};

export default ContainersMain;
