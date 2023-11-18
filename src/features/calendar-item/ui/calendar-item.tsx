import React from "react";

import { CalendarDay } from "../../../entities/allergies/model/allergies";
import Tooltip from "../../../shared/ui/tooltip/tooltip";
import { DateTime } from "luxon";
import clsx from "clsx";

const CalendarItem = ({ item }: { item: CalendarDay }) => {
  const today = DateTime.now();
  const day = today.toFormat("dd.MM");
  console.log(day);
  return (
    <div
      className={clsx(
        "flex flex-col w-full h-full pt-[2px]  items-center transition-colors duration-300 max-[400px]:text-12px cursor-pointer hover:bg-blockSecondaryColor",
        day === item.current && "bg-blockSecondaryColor",
      )}
    >
      <p className="text-textMainColor">{item.current}</p>
      <p className="text-textMainColor">{item.dayofweek}</p>
      <div className="flex w-full gap-x-3 mt-[5px] justify-center flex-wrap items-center">
        {item.allergens &&
          item.allergens.map((item) => (
            <Tooltip color={item.color} key={item.id}>
              {item.title}
            </Tooltip>
          ))}
      </div>
    </div>
  );
};

export default CalendarItem;
