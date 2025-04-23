import { RouterProvider, createBrowserRouter } from "react-router";

import Dashboard from "./pages/dashoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

// Admin dashboard
export default function App() {
  return <RouterProvider router={router} />;
}
