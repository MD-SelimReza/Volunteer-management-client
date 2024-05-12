import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import NeedVolunteer from "../pages/NeedVolunteer";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import ManageMyPost from "../pages/ManageMyPost";
import MyVolunteerRequestedPost from "../pages/MyVolunteerRequestedPost";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import BeVolunteer from "../pages/BeVolunteer";
import UpdatePost from "../pages/UpdatePost";
import PostDetails from "../pages/PostDetails";
import { baseURL } from "../baseUrl";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/all-post",
        element: <NeedVolunteer />,
      },
      {
        path: "/add-volunteer-post",
        element: (
          <PrivateRoute>
            <AddVolunteerPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-post",
        element: (
          <PrivateRoute>
            <ManageMyPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-volunteer-requested-post",
        element: (
          <PrivateRoute>
            <MyVolunteerRequestedPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/be-volunteer",
        element: (
          <PrivateRoute>
            <BeVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-post",
        element: (
          <PrivateRoute>
            <UpdatePost />
          </PrivateRoute>
        ),
      },
      {
        path: "/post-details/:id",
        element: (
          <PrivateRoute>
            <PostDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => axios(`${baseURL}/post-details/${params.id}`),
      },
    ],
  },
]);

export default router;
