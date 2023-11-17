import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyFood from "../Pages/MyFood";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUsers from "../Pages/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems";

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
        path: "/my-food",
        element: (
          <PrivateRoute>
            <MyFood />
          </PrivateRoute>
        ),
        loader: () => axios.get("http://localhost:5001/api/v1/get-cart"),
      },

      {
        path: "/our-shop/:category",
        element: <OurShop />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-items",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default routes;
