import { createStore } from "effector";
import { getWeatherFx } from "../model/weather-effect";

type Weather = {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      icon: string;
    };
  };
};
export const $weather = createStore<Weather | null>(null).on(
  getWeatherFx.doneData,
  (_, weather) => weather,
);
