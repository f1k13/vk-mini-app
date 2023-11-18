import React from "react";
import { useStore } from "effector-react";
import { $weather } from "../../../entities/weather/model/weather";
import router from "../../../shared/router/router";
import { CALENDAR_ROUTE } from "../../../shared/router/paths";
import clsx from "clsx";
import WindIcon from "../../../shared/icons/wind-icon";

const Weather = ({ button, height }: { button?: boolean; height: string }) => {
  const weather = useStore($weather);

  return (
    <div
      className={clsx(
        "bg-blockColor w-full flex justify-between p-[18px] items-center  rounded-xl",
        height,
      )}
    >
      <div className="flex w-full flex-col">
        {button && <h2 className="text-textMainColor text-20px">Календарь</h2>}
        <p
          className={clsx(
            button &&
              "text-textMainColor text-40px max-[413px]:text-20px max-[650px]:text-20px max-[341px]:text-16px",
            "text-20px text-textMainColor",
          )}
        >
          {weather?.geo_object.province.name}
        </p>
        <div className="flex w-full items-center">
          <span
            className={clsx(
              button &&
                "text-textMainColor text-40px max-[413px]:text-32px max-[650px]:text-32px max-[341px]:text-20px",
              "text-32px text-textMainColor",
            )}
          >
            {weather?.fact.temp}°
          </span>
          {!button && (
            <img
              className="w-[60px] h-[60px]"
              src={`https://yastatic.net/weather/i/icons/funky/dark/${weather?.fact.icon}.svg`}
              alt=""
            />
          )}
        </div>
        <span
          className={clsx(
            button &&
              "text-textMainColor text-32px max-[650px]:text-20px max-[341px]:text-16px",
            "text-20px text-textMainColor",
          )}
        >
          Ощущается как {weather?.fact.feels_like}°
        </span>
      </div>
      <div className={clsx(button && "flex flex-col h-full", "flex")}>
        {!button && (
          <div className="flex items-center flex-col">
            <WindIcon />
            <p className="text-textMainColor text-24px">
              {weather?.fact.wind_speed} м/c
            </p>
          </div>
        )}
        {button && (
          <img
            className={clsx(
              button &&
                "w-[150px] h-[150px] max-[300px]:w-[100px] max-[300px]:h-[100px]",
            )}
            src={`https://yastatic.net/weather/i/icons/funky/dark/${weather?.fact.icon}.svg`}
            alt=""
          />
        )}
        {button && (
          <button
            onClick={() => router.navigate(CALENDAR_ROUTE)}
            className="text-16px font-normal mt-auto max-[463px]:px-[30px] max-[389px]:text-12px px-[57px] py-[10px] bg-blockSecondaryColor shadow-outline rounded-3xl text-textMainColor transition-colors duration-200 hover:bg-hoverButton cursor-pointer"
          >
            Подробнее
          </button>
        )}
      </div>
    </div>
  );
};

export default Weather;
