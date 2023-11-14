import { createEffect } from "effector/compat";
import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import { AxiosError } from "axios";
import { api, setUserIdToHeaders } from "../../../shared/api/api";

export const userFx = createEffect<void, UserInfo, AxiosError>(async () => {
  const vkUser = await bridge.send("VKWebAppGetUserInfo");
  setUserIdToHeaders(vkUser.id);
  await api.post("/users/create", { vkUser });
  return vkUser;
});
