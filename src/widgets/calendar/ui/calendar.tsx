import { useStore } from "effector-react";
import {
  $currentMonth,
  $currentMonthFormat,
  $daysMonth,
} from "../../../entities/calendar/model/calendar-days";
import Weather from "../../../features/weather/ui/weather";
import { Fragment, useEffect, useRef, useState } from "react";
import { getAllergiesUserForMonth } from "../../../entities/allergies/lib/allergies-fx";
import { DateTime } from "luxon";

import { setCurrentMonthFormat } from "../../../entities/calendar/lib/calendar-event";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { $allergensMonth } from "../../../entities/allergies/model/allergies";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

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

  const labels = [
    `01.${currentMonth}-10.${currentMonth}`,
    `11.${currentMonth}-20.${currentMonth}`,
    `21.${currentMonth}-${days.length}.${currentMonth}`,
  ];

  const data = {
    labels,
    datasets: allergiesMonth.map((item) => {
      return {
        label: item.title,
        backgroundColor: item.color,
        data: item.intensity
          .map((inten) => {
            if (inten.period === `01.${currentMonth}-10.${currentMonth}`) {
              return inten.value[0] === ">"
                ? inten.value.slice(1)
                : inten.value.split("-")[1];
            }
            if (inten.period === `11.${currentMonth}-20.${currentMonth}`) {
              return inten.value[0] === ">"
                ? inten.value.slice(1)
                : inten.value.split("-")[1];
            }
            if (
              inten.period ===
              `21.${currentMonth}-${days.length}.${currentMonth}`
            ) {
              return inten.value[0] === ">"
                ? inten.value.slice(1)
                : inten.value.split("-")[1];
            }
            return null;
          })
          .filter((item) => item !== null),
      };
    }),
  };

  console.log(data);

  return (
    <div className=" w-full bg-white mt-[5px] pl-[20px] pr-[35px] ">
      <h2 className="text-textMainColor text-32px">График цветения</h2>
      <p className="bg-primaryColor w-full uppercase text-24px my-[20px] py-2 rounded-2xl text-center">
        {currentMonthToFormat}
      </p>
      <div>
        <Bar options={options} data={data} />
      </div>
      <div className="flex justify-center mt-[20px]">
        <Weather height={"h-[180px]"} button={false} />
      </div>
    </div>
  );
};

export default CalendarStatistics;
