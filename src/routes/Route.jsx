import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import NeedVolunteer from "../pages/NeedVolunteer";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import ManageMyPost from "../pages/ManageMyPost";
import MyVolunteerRequestedPost from "../pages/MyVolunteerRequestedPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "/need-volunteer",
        element: <NeedVolunteer />,
      },
      {
        path: "/add-volunteer-post",
        element: <AddVolunteerPost />,
      },
      {
        path: "/manage-my-post",
        element: <ManageMyPost />,
      },
      {
        path: "/my-volunteer-requested-post",
        element: <MyVolunteerRequestedPost />,
      },
    ],
  },
]);

export default router;
