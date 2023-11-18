import { useStore } from "effector-react";
import {
  $currentMonth,
  $currentMonthFormat,
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
import { setCurrentMonthFormat } from "../../../entities/calendar/lib/calendar-event";

const CalendarStatistics = () => {
  const today = DateTime.now();
  const days = useStore($daysMonth);
  const allergiesMonth = useStore($allergensMonth);
  const currentMonth = useStore($currentMonth);
  const month = today.toFormat("MM");
  const currentMonthToFormat = useStore($currentMonthFormat);
  useEffect(() => {
    getAllergiesUserForMonth(Number(month));
    setCurrentMonthFormat(today.toFormat("LLLL", { locale: "ru-RU" }));
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

  const CustomTooltip = ({
    payload,
    label,
    active,
  }: {
    payload: { value: string }[];
    label: string;
    active: boolean;
  }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="intro">{label}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className=" w-full bg-white mt-[5px] pl-[20px] pr-[35px] ">
      <h2 className="text-textMainColor text-32px">График цветения</h2>
      <p className="bg-primaryColor w-full uppercase text-24px my-[20px] py-2 rounded-2xl text-center">
        {currentMonthToFormat}
      </p>
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
        <BarTooltip
          content={({ label, payload, active }: any) => (
            <CustomTooltip label={label} active={active} payload={payload} />
          )}
        />
        <Bar dataKey="date">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
      <div className="flex justify-center mt-[20px]">
        <Weather height={"h-[180px]"} button={false} />
      </div>
    </div>
  );
};

export default CalendarStatistics;
