import "./styles/App.css";
import React, {
  useState,
  useEffect,
  ReactNode,
  MouseEventHandler,
} from "react";
import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { RouterProvider } from "react-router-dom";
import router from "../shared/router/router";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState<UserInfo | undefined>();

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
    }
    fetchData();
  }, []);

  const go: MouseEventHandler<HTMLElement> = (e) => {
    setActivePanel(e.currentTarget.dataset.to ?? "home");
  };

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <RouterProvider router={router} />
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
