import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Preview from "../pages/Preview";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  // {
  //   path: "/preview",
  //   element: <Preview />
  // }
]);

export default Router;
