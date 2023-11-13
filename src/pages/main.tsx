import { MAIN_ROUTE, REACTIONS_ROUTE } from "../shared/router/paths";
import router from "../shared/router/router";
import BasePage from "../shared/ui/base-page";
import ContainersMain from "../widgets/containers-main/ui/containers-main";
import React from "react";

const Main = () => {
  return (
    <BasePage title="Ag-Allergies">
      <ContainersMain />
    </BasePage>
  );
};

export default Main;
