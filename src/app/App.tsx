import "./styles/App.css";
import React, { useEffect } from "react";
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { userFx } from "../entities/user/lib/userFx";
import { RouterProvider } from "react-router-dom";
import router from "../shared/router/router";

const App = () => {
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
