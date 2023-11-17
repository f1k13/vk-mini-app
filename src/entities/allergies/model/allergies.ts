import { createStore } from "effector";
import {
  getAllergiesFx,
  getAllergiesUserForMonth,
  getSelectedAllergiesFx,
  setCalendarAllergensFx,
} from "../lib/allergies-fx";
import {
  allergenAdd,
  allergenDelete,
  selectedAdd,
  selectedDelete,
} from "../lib/allergies-events";

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

export const $allergensByUser = createStore<Allergies[]>([])
  .on(getSelectedAllergiesFx.doneData, (_, data) => data)
  .on(selectedAdd, (state, data) => [...state, data])
  .on(selectedDelete, (state, data) =>
    state.filter((item) => item.id !== data.id),
  );

export const $allergensUser = createStore<Allergies[]>([]).on(
  getSelectedAllergiesFx.doneData,
  (_, data) => data,
);

export const $allergensMonth = createStore<Allergies[]>([]).on(
  getAllergiesUserForMonth.doneData,
  (_, data) => data,
);
