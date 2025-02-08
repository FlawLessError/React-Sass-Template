import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./HomePage";
import About from "./About";

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default function MainProvider() {
  return <RouterProvider router={router} />;
}
