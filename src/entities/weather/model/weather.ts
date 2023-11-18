import { createStore } from "effector";
import { getWeatherFx } from "../lib/weather-effect";

type Weather = {
  geo_object: {
    province: {
      name: string;
    };
  };
  fact: {
    temp: number;
    icon: string;
    feels_like: number;
    wind_speed: number;
    season: string;
  };
};
export const $weather = createStore<Weather | null>(null).on(
  getWeatherFx.doneData,
  (_, weather) => weather,
);
