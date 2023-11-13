import { MAIN_ROUTE, REACTIONS_ROUTE } from "../shared/router/paths";
import router from "../shared/router/router";
import BasePage from "../shared/ui/base-page";

const Main = () => {
  
  return (
    <BasePage title="Ag-Allergies">
      <button onClick={() => router.navigate(REACTIONS_ROUTE)}>next</button>

    </BasePage>
  );
};

export default Main;
