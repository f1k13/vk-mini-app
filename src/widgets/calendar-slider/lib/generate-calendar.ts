import { DateTime, Interval } from "luxon";

export type CalendarData = {
  day: string;
  date: string;
  title?: string;
};
export const generateCalendar = (currentWeek: DateTime) => {
  const startDate = currentWeek.startOf("week");
  const endDate = currentWeek.endOf("week");

  const dateInterval = Interval.fromDateTimes(startDate, endDate);

  const isDateInRange = dateInterval.contains(DateTime.now());

  const data: CalendarData[] = [];

  for (let i = 0; i < 7; i++) {
    const day = startDate.plus({ days: i }).toFormat("ccc");
    const date = startDate.plus({ days: i }).toFormat("d.MM");

    data.push({
      day,
      date,
      title: (isDateInRange && "Береза") || "",
    });
  }

  return data;
};
