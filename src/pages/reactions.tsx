import { MAIN_ROUTE } from "../shared/router/paths";
import router from "../shared/router/router";
import BasePage from "../shared/ui/base-page";

const Reactions = () => {
  return (
    <BasePage title="Перекрёстные реакции">
      <button onClick={() => router.navigate(MAIN_ROUTE)}>back</button>
    </BasePage>
  );
};

export default Reactions;
