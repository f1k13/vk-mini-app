import React, { useState } from "react";
import { DateTime } from "luxon";
import { generateCalendar } from "../lib/generate-calendar";
import CalendarItem from "../../../features/calendar-item/ui/calendar-item";
import ArrowButton from "../../../shared/icons/arrow-button";

const CalendarSlider = () => {
  const today = DateTime.now();

  const [currentWeek, setCurrentWeek] = useState(today);
  const handleNextWeek = () => {
    const nextWeek = currentWeek.plus({ weeks: 1 });
    setCurrentWeek(nextWeek);
  };

  const handlePrevWeek = () => {
    const prevWeek = currentWeek.minus({ weeks: 1 });
    setCurrentWeek(prevWeek);
  };
  return (
    <div className="flex w-full justify-between bg-blockColor">
      <button onClick={handlePrevWeek}>
        <ArrowButton />
      </button>
      {generateCalendar(currentWeek).map((item, index) => (
        <CalendarItem item={item} key={index} />
      ))}
      <button onClick={handleNextWeek} className="rotate-180">
        <ArrowButton />
      </button>
    </div>
  );
};

export default CalendarSlider;
