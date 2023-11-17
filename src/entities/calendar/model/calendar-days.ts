import { createStore } from "effector";
import { setDaysOfMonth } from "../lib/calendar-event";

export const $daysMonth = createStore<number[]>([]).on(
  setDaysOfMonth,
  (state, days) => {
    state.splice(0, state.length);
    for (let i = 1; i <= days; i++) {
      state.push(i);
    }
    return [...state];
  },
);
