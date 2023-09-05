import { createBrowserRouter, Navigate } from "react-router-dom";

import { Home, Forms, Layouts, Tables } from "../pages";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/forms',
        element: <Forms />
      },
      {
        path: '/layouts',
        element: <Layouts />
      },
      {
        path: '/tables',
        element: <Tables />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
]);