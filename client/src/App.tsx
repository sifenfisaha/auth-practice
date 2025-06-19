import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Root from "./pages/Root";
import Authentication, { action as authAction } from "./pages/Authentication";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "auth", element: <Authentication />, action: authAction },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
