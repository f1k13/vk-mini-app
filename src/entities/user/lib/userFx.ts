import { createEffect } from "effector/compat";
import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import { AxiosError } from "axios";
import { api, setUserIdToHeaders } from "../../../shared/api/api";
import router from "../../../shared/router/router";
import { ALLERGIES_ROUTE, MAIN_ROUTE } from "../../../shared/router/paths";

export const userFx = createEffect<void, UserInfo, AxiosError>(async () => {
  const vkUser = await bridge.send("VKWebAppGetUserInfo");
  setUserIdToHeaders(vkUser.id);
  const { data } = await api.post("/users/create", { ...vkUser });
  if (data) {
    router.navigate(ALLERGIES_ROUTE);
  } else {
    router.navigate(MAIN_ROUTE);
  }
  return vkUser;
});
