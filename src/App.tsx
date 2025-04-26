import { RouterProvider, createBrowserRouter } from "react-router";

import Dashboard from "./pages/dashoard";
import LoansPage from "./pages/loans";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/loans",
    element: <LoansPage />,
  },
]);

// Admin dashboard
export default function App() {
  return <RouterProvider router={router} />;
}
