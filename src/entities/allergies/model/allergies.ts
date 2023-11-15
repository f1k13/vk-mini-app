import { createStore } from "effector";
import { getAllergiesFx } from "../lib/allergies-fx";

export type Allergies = {
  id: number;
  title: string;
  start: string;
  end: string;
  color: string;
  symptoms: string;
  crossReactions: string;
};

export const $allergies = createStore<Allergies[] | null>(null).on(
  getAllergiesFx.doneData,
  (_, data) => data,
);
