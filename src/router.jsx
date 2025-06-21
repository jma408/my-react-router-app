import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./routes/Layout";
import Home, { homeLoader } from "./routes/Home";
import About from "./routes/About";
import Dashboard from "./routes/dashboard/Dashboard";
import Profile from "./routes/dashboard/Profile";
import Settings from "./routes/dashboard/Settings";
import User from "./routes/User";
import NotFound from "./routes/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Login from "./pages/Login";
import RouteError from "./components/errors/RouteError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [
              { index: true, element: <p>Welcome to your dashboard!</p> },
              { path: "profile", element: <Profile /> },
              { path: "settings", element: <Settings /> },
            ],
          },
        ],
      },
      { path: "user/:userId", element: <User /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
