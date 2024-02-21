import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import AboutUS from "../pages/AboutUs/AboutUS";
import ContactUs from "../pages/ContactUs/ContactUs";
import Error from "../pages/Error/Error";
import MovieDetail from "../pages/MovieDetail/MovieDetail";

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
    {
      path: "/movie/:id",
      element: <MovieDetail />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}
