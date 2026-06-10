import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/register" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default routes;
