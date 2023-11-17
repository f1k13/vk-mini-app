import { createStore } from "effector";
import { userFx } from "../lib/userFx";
import { UserInfo } from "@vkontakte/vk-bridge";

export const $user = createStore<UserInfo | null>(null).on(
  userFx.doneData,
  (_, data) => data,
);
