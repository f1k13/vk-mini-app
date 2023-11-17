import { useStore } from "effector-react";
import { $daysMonth } from "../../../entities/calendar/model/calendar-days";
import CalendarStatisticsItem from "../../../features/calendar-statistics-item/ui/calendar-statistics-item";
import Weather from "../../../features/weather/ui/weather";
import Tooltip from "../../../shared/ui/tooltip/tooltip";
import { $allergensMonth } from "../../../entities/allergies/model/allergies";
import { useEffect, useRef, useState } from "react";
import { getAllergiesUserForMonth } from "../../../entities/allergies/lib/allergies-fx";
import { DateTime } from "luxon";

const CalendarStatistics = () => {
  const today = DateTime.now();
  const days = useStore($daysMonth);
  const allergiesMonth = useStore($allergensMonth);
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
  return (
    <div className=" w-full h-1/2 mt-[5px] px-[15px] ">
      <h2 className="text-textMainColor text-32px">График цветения</h2>
      <div className="bg-blockColor flex flex-col mt-[5px] rounded-xl w-full h-[60%] px-[20px] ">
        <div className="flex justify-between w-full">
          {days.map((item) => (
            <CalendarStatisticsItem item={item} key={item} />
          ))}
        </div>
        <div ref={parentRef} className="mt-5 flex pl-[5px] flex-col h-full">
          {allergiesMonth.map((item) => (
            <Tooltip
              color={item.color}
              title={item.title}
              startDate={item.start}
              endDate={item.end}
              height={`h-[9px]`}
              widthGraph={(dayWith - 2) * days.length}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-[10px]">
        <Weather height={"h-[150px]"} button={false} />
      </div>
    </div>
  );
};

export default CalendarStatistics;
