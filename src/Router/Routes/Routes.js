import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LoginPage/Login/Login";
import SIgnUp from "../../Pages/LoginPage/SignUp/SIgnUp";
import SourceDetails from "../../Pages/SourceDetails/SourceDetails";

// set router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/sourcedetails",
        element: <SourceDetails></SourceDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signup",
        element: <SIgnUp></SIgnUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
