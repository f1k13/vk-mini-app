import React from "react";
import { useStore } from "effector-react";
import { $weather } from "../../../entities/weather/model/weather";
import router from "../../../shared/router/router";
import { CALENDAR_ROUTE } from "../../../shared/router/paths";
import clsx from "clsx";

const Weather = ({ button, height }: { button?: boolean; height: string }) => {
  const weather = useStore($weather);

  return (
    <div
      className={clsx(
        "bg-blockColor w-full flex justify-between p-[18px]  rounded-xl",
        height,
      )}
    >
      <div className="flex flex-col">
        {button && <h2 className="text-textMainColor text-20px">Календарь</h2>}
        <p className="text-32px text-textMainColor max-[413px]:text-20px">
          {weather?.geo_object.locality.name.replace("округ", "")}
        </p>
        <span className="text-textMainColor text-40px max-[413px]:text-32px">
          {weather?.fact.temp}
        </span>
      </div>

      <div className="flex flex-col">
        <img
          className="w-[150px] h-[150px]"
          src={`https://yastatic.net/weather/i/icons/funky/dark/${weather?.fact.icon}.svg`}
          alt=""
        />
        {button && (
          <button
            onClick={() => router.navigate(CALENDAR_ROUTE)}
            className="text-16px font-normal mt-auto  max-[463px]:px-[30px] max-[389px]:text-12px px-[57px] py-[10px] bg-blockSecondaryColor shadow-outline rounded-3xl text-textMainColor transition-colors duration-200 hover:bg-hoverButton cursor-pointer"
          >
            Подробнее
          </button>
        )}
      </div>
    </div>
  );
};

export default Weather;