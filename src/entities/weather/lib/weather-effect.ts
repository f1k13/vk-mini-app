import { createEffect } from "effector";
import { api } from "../../../shared/api/api";

export const getWeatherFx = createEffect(async () => {
  const { data } = await api.get("users/weather?lat=55.154&lon=61.4291");
  return data;
});
