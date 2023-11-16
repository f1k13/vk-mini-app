import { useStore } from "effector-react";
import { $daysMonth } from "../../../entities/calendar/model/calendar-days";
import CalendarStatisticsItem from "../../../features/calendar-statistics-item/calendar-statistics-item";
import Weather from "../../../features/weather/weather";

const CalendarStatistics = () => {
  const days = useStore($daysMonth);
  return (
    <div className=" w-full h-1/2 mt-[28px] px-[15px]">
      <h2 className="text-textMainColor text-32px">График цветения</h2>
      <div className="bg-blockColor h-3/6 flex justify-between w-full px-[20px] mt-[15px]">
        {days.map((item) => (
          <CalendarStatisticsItem item={item} key={item} />
        ))}
      </div>
      <div className="mt-[40px]">
        <Weather height={"h-[150px]"} button={false} />
      </div>
    </div>
  );
};

export default CalendarStatistics;
