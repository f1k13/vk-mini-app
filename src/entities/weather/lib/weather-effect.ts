import { createEffect } from "effector";
import { weatherApi } from "../../../shared/api/api";

export const getWeatherFx = createEffect(async () => {
  const { data } = await weatherApi.get("", {
    params: { q: "55.154,61.4291" },
  });
  return data;
});
