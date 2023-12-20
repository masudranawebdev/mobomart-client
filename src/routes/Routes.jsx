import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/Error/NotFound";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
