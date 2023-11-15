import { createBrowserRouter } from "react-router-dom";
import {
  ALLERGIES_ROUTE,
  CALENDAR_ROUTE,
  MAIN_ROUTE,
  REACTIONS_ROUTE,
} from "./paths";
import Main from "../../pages/main";
import Reactions from "../../pages/reactions";
import Calendar from "../../pages/calendar";
import AllergiesSelect from "../../pages/allergies-select";

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
  {
    path: ALLERGIES_ROUTE,
    element: <AllergiesSelect />,
  },
]);
export default router;
