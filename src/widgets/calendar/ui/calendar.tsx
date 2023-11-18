import { useStore } from "effector-react";
import { $daysMonth } from "../../../entities/calendar/model/calendar-days";
import Weather from "../../../features/weather/ui/weather";
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
    <div className=" w-full h-screen bg-white mt-[5px] ">
      <h2 className="text-textMainColor text-32px">График цветения</h2>
      <div className="bg-blockColor flex mt-[5px] rounded-xl w-full h-[80%] px-[20px] ">
        <div className="flex flex-col-reverse w-[20%] h-full">
          {days.map((item) => (
            <p className="text-textMainColor text-12px w-[10px]" key={item}>
              {item}
            </p>
          ))}
        </div>
        <div ref={parentRef} className="flex w-full gap-5 items-end">
          {allergiesMonth.map((item) =>
            <div className="flex flex-col ">
              <div
                className="w-[10px] h-[200px]"
                style={{ backgroundColor: item.color }}
              ></div>
              <p className="text-textMainColor text-16px">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-[10px] mb-10">
        <Weather height={"h-[150px]"} button={false} />
      </div>
    </div>
  );
};

export default CalendarStatistics;
