import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/our-shop/:category",
        element: <OurShop />,
      },
    ],
  },
]);

export default routes;
