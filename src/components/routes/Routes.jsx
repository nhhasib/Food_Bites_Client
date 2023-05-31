import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../pages/layout/Main";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OrderFood from "../pages/order/OrderFood";
import Login from "../pages/login/Login";
import Registry from "../pages/register/Register";


export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'menu',
                element:<OurMenu></OurMenu>
            },
            {
                path: 'order/:category',
                element:<OrderFood></OrderFood>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element:<Registry></Registry>
            }
      ]
    },
  ]);
  