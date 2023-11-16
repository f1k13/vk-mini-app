import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import CalendarItem from "../../../features/calendar-item/ui/calendar-item";
import ArrowButton from "../../../shared/icons/arrow-button";
import { useStore } from "effector-react";
import { $calendarDays } from "../../../entities/allergies/model/allergies";
import { setCalendarAllergensFx } from "../../../entities/allergies/lib/allergies-fx";
import { setDaysOfMonth } from "../../../entities/calendar/lib/calendar-event";

const CalendarSlider = () => {
  const today = DateTime.now();

  const [currentWeek, setCurrentWeek] = useState(today);

  const calendarDays = useStore($calendarDays);

  const handleNextWeek = () => {
    const nextWeek = currentWeek.plus({ weeks: 1 });
    const startDate = nextWeek.startOf("week").toFormat("dd.MM");
    const endDate = nextWeek.endOf("week").toFormat("dd.MM");
    const dayInMonth = nextWeek.daysInMonth;

    setCalendarAllergensFx({
      start: String(startDate),
      end: String(endDate),
    });

    setCurrentWeek(nextWeek);
    setDaysOfMonth(Number(dayInMonth));
  };

  const handlePrevWeek = () => {
    const nextWeek = currentWeek.minus({ weeks: 1 });
    const startDate = nextWeek.startOf("week").toFormat("dd.MM");
    const endDate = nextWeek.endOf("week").toFormat("dd.MM");
    const dayInMonth = nextWeek.daysInMonth;

    setCalendarAllergensFx({
      start: String(startDate),
      end: String(endDate),
    });

    setDaysOfMonth(Number(dayInMonth));
    setCurrentWeek(nextWeek);
  };

  const startDate = currentWeek.startOf("week").toFormat("dd.MM");

  const endDate = currentWeek.endOf("week").toFormat("dd.MM");

  const currentMonth = today.daysInMonth;

  useEffect(() => {
    setCalendarAllergensFx({
      start: String(startDate),
      end: String(endDate),
    });
    setDaysOfMonth(Number(currentMonth));
  }, []);

  return (
    <div className="flex w-full gap-[20px] max-[571px]:gap-[10px] max-[425px]:gap-1 items-center justify-between bg-blockColor mt-[28px]">
      <button
        onClick={handlePrevWeek}
        className="bg-blockSecondaryColor px-5 h-[90px] max-[571px]:p-1"
      >
        <ArrowButton />
      </button>
      {calendarDays.map((item, index) => (
        <CalendarItem item={item} key={index} />
      ))}
      <button
        onClick={handleNextWeek}
        className="rotate-180 bg-blockSecondaryColor px-5 h-[90px] max-[571px]:p-1"
      >
        <ArrowButton />
      </button>
    </div>
  );
};

export default CalendarSlider;
