import React from "react";
import { CalendarData } from "../../../widgets/calendar-slider/lib/generate-calendar";
import { DateTime } from "luxon";

const CalendarItem = ({ item }: { item: CalendarData }) => {
  const today = DateTime.now();
  console.log(today.toFormat("d"));
  return (
    <div className="flex flex-col w-full justify-center items-center text-16px transition-colors duration-300 max-[400px]:text-12px hover:border-2 cursor-pointer hover:border-blockSecondaryColor">
      <p className="text-textMainColor">{item.date}</p>
      <p className="text-textMainColor">{item.day}</p>
    </div>
  );
};

export default CalendarItem;
