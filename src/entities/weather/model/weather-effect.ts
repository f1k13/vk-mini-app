import { createEffect } from "effector";
import axios from "axios";
import { apiKey } from "../lib/api-key";

export const getWeatherFx = createEffect(async () => {
  const { data } = await axios.get(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=Chelyabinsk`,
    {
      headers: {
        "X-RapidAPI-Key": `${apiKey}`,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    },
  );
  console.log(data);
  return data;
});
