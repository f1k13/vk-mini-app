import { createBrowserRouter } from "react-router-dom";
import {
  ALLERGIES_ROUTE,
  CALENDAR_ROUTE,
  HELLO_ROUTE,
  MAIN_ROUTE,
  REACTIONS_ROUTE,
} from "./paths";
import Main from "../../pages/main";
import Reactions from "../../pages/reactions";
import Calendar from "../../pages/calendar";
import AllergiesSelect from "../../pages/allergies-select";
import HelloPage from "../../pages/hello-page";

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
  {
    path: HELLO_ROUTE,
    element: <HelloPage />,
  },
]);
export default router;
