import React from "react";
import { CalendarData } from "../../../widgets/calendar-slider/lib/generate-calendar";

const CalendarItem = ({ item }: { item: CalendarData }) => {
  return (
    <div className="flex flex-col w-[20%] justify-center items-center text-16px max-[400px]:text-12px">
      <p className="text-textMainColor">{item.date}</p>
      <p className="text-textMainColor">{item.day}</p>
    </div>
  );
};

export default CalendarItem;
