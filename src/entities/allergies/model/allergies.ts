import { createStore } from "effector";
import { getAllergiesFx, setCalendarAllergensFx } from "../lib/allergies-fx";
import { allergenAdd, allergenDelete } from "../lib/allergies-events";

export type Allergies = {
  id: number;
  title: string;
  start: string;
  end: string;
  color: string;
  symptoms: string;
  crossReactions: string;
};

export type AllergiesParamsDay = {
  start: string;
  end: string;
};

export type CalendarDay = {
  current: string;
  dayofweek: string;
  allergens: Allergies[];
};

export const $allergies = createStore<Allergies[]>([]).on(
  getAllergiesFx.doneData,
  (_, data) => data,
);

export const $selectedAllergies = createStore<number[]>([])
  .on(allergenAdd, (state, allergies) => [...state, allergies])
  .on(allergenDelete, (state, allergies) =>
    state.filter((item) => item !== allergies),
  );

export const $calendarDays = createStore<CalendarDay[]>([]).on(
  setCalendarAllergensFx.doneData,
  (_, data) => data,
);
