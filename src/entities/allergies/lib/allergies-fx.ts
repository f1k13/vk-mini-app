import { createEffect } from "effector";
import { api } from "../../../shared/api/api";
import { Allergies } from "../model/allergies";

export const getAllergiesFx = createEffect(async () => {
  const { data } = await api.get<Allergies[]>("/allergens");
  return data;
});
