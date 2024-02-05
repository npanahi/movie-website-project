import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import AboutUS from "../pages/AboutUs/AboutUS";
import ContactUs from "../pages/ContactUs/ContactUs";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about-us",
      element: <AboutUS />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
  ]);
  return <RouterProvider router={router} />;
}
