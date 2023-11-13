import { createBrowserRouter } from "react-router-dom";
import { CALENDAR_ROUTE, MAIN_ROUTE, REACTIONS_ROUTE } from "./paths";
import Main from "../../pages/main";
import Reactions from "../../pages/reactions";
import Calendar from "../../pages/calendar";

const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <Main />,
  },
  {
    path: REACTIONS_ROUTE,
    element: <Reactions />,
  },
  {
    path: CALENDAR_ROUTE,
    element: <Calendar />,
  },
]);
export default router;
