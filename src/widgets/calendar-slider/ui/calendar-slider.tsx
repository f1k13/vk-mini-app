import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import CalendarItem from "../../../features/calendar-item/ui/calendar-item";
import ArrowButton from "../../../shared/icons/arrow-button";
import { useStore } from "effector-react";
import { $calendarDays } from "../../../entities/allergies/model/allergies";
import {
  getAllergiesUserForMonth,
  setCalendarAllergensFx,
} from "../../../entities/allergies/lib/allergies-fx";
import {
  setCurrentMonthFormat,
  setCurrentMonth,
  setDaysOfMonth,
} from "../../../entities/calendar/lib/calendar-event";

const CalendarSlider = () => {
  const today = DateTime.now();

  const [currentWeek, setCurrentWeek] = useState(today);

  const calendarDays = useStore($calendarDays);

  const handleNextWeek = () => {
    const nextWeek = currentWeek.plus({ weeks: 1 });
    const startDate = nextWeek.startOf("week").toFormat("dd.MM");
    const endDate = nextWeek.endOf("week").toFormat("dd.MM");
    const dayInMonth = nextWeek.daysInMonth;
    const month = nextWeek.toFormat("MM");

    getAllergiesUserForMonth(Number(month));
    setCurrentMonth(month);
    setCalendarAllergensFx({
      start: String(startDate),
      end: String(endDate),
    });

    setCurrentMonthFormat(nextWeek.toFormat("LLLL", { locale: "ru-RU" }));

    setCurrentWeek(nextWeek);

    setDaysOfMonth(Number(dayInMonth));
  };

  const handlePrevWeek = () => {
    const nextWeek = currentWeek.minus({ weeks: 1 });
    const startDate = nextWeek.startOf("week").toFormat("dd.MM");
    const endDate = nextWeek.endOf("week").toFormat("dd.MM");
    const dayInMonth = nextWeek.daysInMonth;
    const month = nextWeek.toFormat("MM");
    getAllergiesUserForMonth(Number(month));
    setCurrentMonth(month);

    setCalendarAllergensFx({
      start: String(startDate),
      end: String(endDate),
    });

    setDaysOfMonth(Number(dayInMonth));

    setCurrentMonthFormat(nextWeek.toFormat("LLLL", { locale: "ru-RU" }));

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
    <div className="flex w-full gap-[10px] h-[105px] max-[571px]:gap-[10px] max-[425px]:gap-1 items-center justify-between bg-blockColor mt-[20px] rounded-xl ">
      <button
        onClick={handlePrevWeek}
        className="bg-blockSecondaryColor px-5 h-full max-[571px]:p-1 transition-colors duration-200 hover:bg-hoverButton cursor-pointer"
      >
        <ArrowButton />
      </button>
      {calendarDays.map((item, index) => (
        <CalendarItem item={item} key={index} />
      ))}
      <button
        onClick={handleNextWeek}
        className="rotate-180 bg-blockSecondaryColor px-5 h-full max-[571px]:p-1 transition-colors duration-200 hover:bg-hoverButton cursor-pointer"
      >
        <ArrowButton />
      </button>
    </div>
  );
};

export default CalendarSlider;
