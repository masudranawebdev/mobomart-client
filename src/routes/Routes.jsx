import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/Error/NotFound";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
