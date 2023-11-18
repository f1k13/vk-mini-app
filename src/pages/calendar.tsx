import React from "react";
import BasePage from "../shared/ui/base-page";
import CalendarStatistics from "../widgets/calendar/ui/calendar";
import CalendarSlider from "../widgets/calendar-slider/ui/calendar-slider";

const Calendar = () => {
  return (
    <BasePage title="Календарь цветения" back={true}>
      <CalendarSlider />
      <CalendarStatistics />
    </BasePage>
  );
};

export default Calendar;
