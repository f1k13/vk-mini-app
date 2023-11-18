import { createEvent } from "effector";

export const setDaysOfMonth = createEvent<number>();

export const setCurrentMonth = createEvent<string>();

export const setCurrentMonthFormat = createEvent<string>();
