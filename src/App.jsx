import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import User from "./Pages/User";
import Admin from "./Pages/Admin";
import ForgetPassword from "./Pages/ForgetPassword";
import RequireAdminAuth from "./components/auth/RequireAdminAuth";
import RequireUserAuth from "./components/auth/RequireUserAuth";
import RedirectIfLoggedIn from "./components/auth/RedirectIfLoggedIn";

import "./App.css";
import FOverviewPage from "./Pages/dashboard/FOverviewPage";
import Courses from "./Pages/dashboard/Courses";
import FUsers from "./Pages/dashboard/FUsers";
import Subscriptions from "./Pages/dashboard/Subscriptions";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/OverviewPage",
      element: (
        <RequireAdminAuth>
          <FOverviewPage />,
        </RequireAdminAuth>
      ),
    },
    {
      path: "/Courses",
      element: (
        <RequireAdminAuth>
          <Courses />,
        </RequireAdminAuth>
      ),
    },
    {
      path: "/UsersPage",
      element: (
        <RequireAdminAuth>
          <FUsers />,
        </RequireAdminAuth>
      ),
    },
    {
      path: "/Subscriptions",
      element: (
        <RequireAdminAuth>
          <Subscriptions />,
        </RequireAdminAuth>
      ),
    },
    {
      path: "/user",
      element: (
        <RequireUserAuth>
          <User />
        </RequireUserAuth>
      ),
    },
    {
      path: "/admin",
      element: (
        <RequireAdminAuth>
          <Admin />
        </RequireAdminAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <RedirectIfLoggedIn>
          <Register />,
        </RedirectIfLoggedIn>
      ),
    },
    {
      path: "/login",
      element: (
        <RedirectIfLoggedIn>
          <Login />,
        </RedirectIfLoggedIn>
      ),
    },
    {
      path: "/forgetpassword",
      element: (
        <RedirectIfLoggedIn>
          <ForgetPassword />,
        </RedirectIfLoggedIn>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
