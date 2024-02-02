import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/Home";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
