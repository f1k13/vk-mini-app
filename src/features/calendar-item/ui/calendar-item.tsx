import React from "react";
import { CalendarData } from "../../../widgets/calendar-slider/lib/generate-calendar";

const CalendarItem = ({ item }: { item: CalendarData }) => {
  return (
    <div className="w-1/2">
      <p className="text-textMainColor">{item.date}</p>
      <p className="text-textMainColor">{item.day}</p>
    </div>
  );
};

export default CalendarItem;
