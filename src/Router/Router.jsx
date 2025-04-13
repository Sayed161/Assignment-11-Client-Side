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
import Details from "../Shared/Details";
import UpdateFoods from "../Components/UpdateFoods";
import PrivateRouter from "../Providers/PrivateRouter";

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
          element:<PrivateRouter><MyFoods/></PrivateRouter>
        },
        {
          path:'requests',
          element:<Requested_foods/>
        },
        {
          path:'details',
          element:<PrivateRouter><Details></Details></PrivateRouter>
        },
        {
          path:'update',
          element:<PrivateRouter><UpdateFoods/></PrivateRouter>
        },
      ]
    },
  ]);

export default router
