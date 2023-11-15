import { createEffect } from "effector";
import { api } from "../../../shared/api/api";
import { Allergies } from "../model/allergies";

export const getAllergiesFx = createEffect(async () => {
  const { data } = await api.get<Allergies[]>("/allergens");
  return data;
});
export const sendAllergiesFx = createEffect<number[], void>(async (data) => {
  await api.post("users/allergens", { allergens: data });
});
