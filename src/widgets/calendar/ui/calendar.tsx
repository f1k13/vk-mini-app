import { useStore } from "effector-react";
import {
  $currentMonth,
  $daysMonth,
} from "../../../entities/calendar/model/calendar-days";
import Weather from "../../../features/weather/ui/weather";
import { $allergensMonth } from "../../../entities/allergies/model/allergies";
import { useEffect, useRef, useState } from "react";
import { getAllergiesUserForMonth } from "../../../entities/allergies/lib/allergies-fx";
import { DateTime } from "luxon";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip as BarTooltip,
  Cell,
} from "recharts";

const CalendarStatistics = () => {
  const today = DateTime.now();
  const days = useStore($daysMonth);
  const allergiesMonth = useStore($allergensMonth);
  const currentMonth = useStore($currentMonth);
  const month = today.toFormat("MM");
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [dayWith, setDayWith] = useState<number>(0);

  useEffect(() => {
    getAllergiesUserForMonth(Number(month));

    if (parentRef.current?.getBoundingClientRect().width) {
      const day = parentRef.current.getBoundingClientRect().width / days.length;
      setDayWith(day);
    }
  }, []);

  const data = allergiesMonth.map((item) => {
    const startDate = DateTime.fromFormat(item.start, "dd.MM");
    const endDate = DateTime.fromFormat(item.end, "dd.MM");

    const dateRangeArray = [];

    for (let date = startDate; date <= endDate; date = date.plus({ days: 1 })) {
      dateRangeArray.push(date.toFormat("dd.MM"));
    }

    const filteredDates = dateRangeArray.filter((date) => {
      const dateObj = DateTime.fromFormat(date, "dd.MM");
      return !currentMonth
        ? dateObj.month === Number(month)
        : dateObj.month === Number(currentMonth);
    });

    return {
      ...item,
      date: filteredDates.length - 1,
    };
  });

  return (
    <div className=" w-full h-screen bg-white mt-[5px] ">
      <h2 className="text-textMainColor text-32px">График цветения</h2>
      <BarChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis dataKey="title" />
        <YAxis
          ticks={Array.from(
            { length: days.length === 29 ? 28 : days.length },
            (_, i) => i + 1,
          )}
        />
        <BarTooltip />
        <Bar dataKey="date">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
      <div className="flex justify-center mt-[10px] mb-10">
        <Weather height={"h-[150px]"} button={false} />
      </div>
    </div>
  );
};

export default CalendarStatistics;
