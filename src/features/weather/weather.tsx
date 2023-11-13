import React from "react";
import { useStore } from "effector-react";
import { $weather } from "../../entities/weather/lib/weather";
import router from "../../shared/router/router";
import { CALENDAR_ROUTE } from "../../shared/router/paths";

const Weather = ({ isVisible }: { isVisible?: boolean }) => {
  const weather = useStore($weather);
  return (
    <div className="bg-blockColor w-full flex justify-between h-[250px] p-[18px] rounded-xl">
      <div>
        <h2 className="text-textMainColor text-20px">Календарь</h2>
        <p className="text-32px text-black">{weather?.location.name}</p>
        <span className="text-textMainColor text-40px">
          {weather?.current.temp_c}
        </span>
      </div>
      <div>
        <img
          className="w-[80px] h-[80px]"
          src={weather?.current.condition.icon}
          alt=""
        />
        {isVisible && (
          <button
            onClick={() => router.navigate(CALENDAR_ROUTE)}
            className="text-16px font-normal mt-[95px] px-[57px] py-[10px] bg-blockSecondaryColor shadow-outline rounded-3xl text-textMainColor"
          >
            Подробнее
          </button>
        )}
      </div>
    </div>
  );
};

export default Weather;
