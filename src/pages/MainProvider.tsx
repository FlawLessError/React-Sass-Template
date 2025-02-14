import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
]);

export default function MainProvider() {
  return <RouterProvider router={router} />;
}
