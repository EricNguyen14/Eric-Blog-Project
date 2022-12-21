import { react } from "react";
import Login from "./components/Login/index";
import Homepage from "./pages/HomePage";
import NotFound from "./pages/Not-found/index";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Homepage></Homepage>,
  },
  {
    path: "/login",
    exact: true,
    main: () => <Login></Login>,
  },
  {
    path: "",
    exact: true,
    main: () => <NotFound></NotFound>,
  },
];
export default routes;
