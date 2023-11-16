import { DateTime } from "luxon";

const CalendarStatisticsItem = ({ item }: { item: number }) => {
  console.log(item);
  const today = DateTime.now();

  return (
    <div className="flex flex-col items-center w-[10%]">
      <p className="text-textMainColor">{item}</p>
      <div className="w-[8px] h-[31px] bg-calendarColor"></div>
      <div></div>
    </div>
  );
};

export default CalendarStatisticsItem;
