import React from "react";

import { CalendarDay } from "../../../entities/allergies/model/allergies";
import Tooltip from "../../../shared/ui/tooltip/tooltip";

const CalendarItem = ({ item }: { item: CalendarDay }) => {
  return (
    <div className="flex flex-col w-full h-[90px] pt-[5px]  items-center transition-colors duration-300 max-[400px]:text-12px cursor-pointer hover:bg-blockSecondaryColor">
      <p className="text-textMainColor">{item.current}</p>
      <p className="text-textMainColor">{item.dayofweek}</p>
      <div className="flex w-full gap-x-3 mt-[15px] justify-center items-center">
        {item.allergens &&
          item.allergens.map((item) => (
            <Tooltip key={item.id} title={item.title} color={item.color} />
          ))}
      </div>
    </div>
  );
};

export default CalendarItem;
