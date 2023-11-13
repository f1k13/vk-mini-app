import { createBrowserRouter } from "react-router-dom";
import { MAIN_ROUTE, REACTIONS_ROUTE } from "./paths";
import Main from "../../pages/main";
import Reactions from "../../pages/reactions";

const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <Main />,
  },
  {
    path: REACTIONS_ROUTE,
    element: <Reactions />,
  },
]);
export default router;
