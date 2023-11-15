import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { generateCalendar } from "../lib/generate-calendar";
import CalendarItem from "../../../features/calendar-item/ui/calendar-item";
import ArrowButton from "../../../shared/icons/arrow-button";
import { getAllergiesFx } from "../../../entities/allergies/lib/allergies-fx";
import { useStore } from "effector-react";
import { $allergies } from "../../../entities/allergies/model/allergies";

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
    <div className="flex w-full gap-[20px] max-[571px]:gap-[10px] max-[425px]:gap-1 items-center justify-between bg-blockColor mt-[28px]">
      <button
        onClick={handlePrevWeek}
        className="bg-blockSecondaryColor p-5 max-[571px]:p-1"
      >
        <ArrowButton />
      </button>
      {generateCalendar(currentWeek).map((item, index) => (
        <CalendarItem item={item} key={index} />
      ))}
      <button
        onClick={handleNextWeek}
        className="rotate-180 bg-blockSecondaryColor p-5 max-[571px]:p-1"
      >
        <ArrowButton />
      </button>
    </div>
  );
};

export default CalendarSlider;
