import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import LoginPage from "../Components/LoginPage";
import RegisterPage from "../Components/RegisterPage";
import HomeComponents from "../Layout/HomeComponents";
import Available_foods from "../Components/Available_foods";
import Add_foods from "../Components/Add_foods";
import MyFoods from "../Components/MyFoods";
import Requested_foods from "../Components/Requested_foods";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      children:[
        {
          path:"login",
          element:<LoginPage/>
        },
        {
          path:"register",
          element:<RegisterPage/>
        },
        {
          path:"/",
          element:<HomeComponents/>
        },
        {
          path:"availble-foods",
          element:<Available_foods/>
        },
        {
          path:'add-foods',
          element:<Add_foods/>
        },
        {
          path:'my-foods',
          element:<MyFoods/>
        },
        {
          path:'requests',
          element:<Requested_foods/>
        }
      ]
    },
  ]);

export default router
