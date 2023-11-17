import { createStore } from "effector";
import { getWeatherFx } from "../lib/weather-effect";

type Weather = {
  geo_object: {
    locality: {
      name: string;
    };
  };
  fact: {
    temp: number;
    icon: string;
  };
};
export const $weather = createStore<Weather | null>(null).on(
  getWeatherFx.doneData,
  (_, weather) => weather,
);
