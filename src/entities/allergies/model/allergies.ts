import { createStore } from "effector";
import { getAllergiesFx } from "../lib/allergies-fx";
import { allergenAdd } from "../lib/allergies-events";

export type Allergies = {
  id: number;
  title: string;
  start: string;
  end: string;
  color: string;
  symptoms: string;
  crossReactions: string;
};

export const $allergies = createStore<Allergies[]>([]).on(
  getAllergiesFx.doneData,
  (_, data) => data,
);
export const $selectedAllergies = createStore<number[]>([]).on(
  allergenAdd,
  (state, allergies) => [...state, allergies],
);
