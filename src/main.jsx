import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About";
import Home, { homeLoader } from "./routes/Home";
import Layout from "./routes/Layout";
import Dashboard from "./routes/dashboard/Dashboard";
import Profile from "./routes/dashboard/Profile";
import Settings from "./routes/dashboard/Settings";
import User from "./routes/User";
import NotFound from "./routes/NotFound";
import ProtectedRoute from "./components/ProtectedRoute"; // or ./routes/ProtectedRoute
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ⬅️ Wrap in layout
    errorElement: <RouteError />,
    children: [
      { path: "login", element: <Login /> },
      {
        path: "about",
        element: <About />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [
              { index: true, element: <p>Welcome to your dashboard!</p> }, // 👈 Default sub-route
              { path: "profile", element: <Profile /> },
              { path: "settings", element: <Settings /> },
            ],
          },
        ],
      },
      // {
      //   path: "dashboard",
      //   element: <Dashboard />,
      //   children: [
      //     { path: "profile", element: <Profile /> },
      //     { path: "settings", element: <Settings /> },
      //   ],
      // },
      { path: "user/:userId", element: <User /> },
      { index: true, element: <Home />, loader: homeLoader },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function RouteError({ error }) {
  return <p>Error: {error.message}</p>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </AuthProvider>
  </React.StrictMode>
);
