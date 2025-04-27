import { RouterProvider, createBrowserRouter } from "react-router";

import Dashboard from "./pages/dashoard";
import LoansPage from "./pages/loans";
import SettingPage from "./pages/setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/loans",
    element: <LoansPage />,
  },
  {
    path: "/setting",
    element: <SettingPage />,
  },
]);

// Admin dashboard
export default function App() {
  return <RouterProvider router={router} />;
}
