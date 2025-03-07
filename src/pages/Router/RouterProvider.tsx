import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../HomePage";
import RouterOutlet from "./RouterOutlet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterOutlet />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

const RouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default RouterProvider;
