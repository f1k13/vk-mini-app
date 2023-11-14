import React from "react";
import BasePage from "../shared/ui/base-page";
import CalendarSlider from "../widgets/calendar-slider/ui/calendar-slider";

const Calendar = () => {
  return (
    <BasePage title="Календарь цветения" back={true}>
      <CalendarSlider />
    </BasePage>
  );
};

export default Calendar;
