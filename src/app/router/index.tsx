import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

import AccountPage from "@/pages/account";
import MainLayout from "@/shared/components/layout/main-layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/account" replace />,
        },
        {
          path: "account",
          element: <AccountPage />,
        },
      ],
    },
  ],
  {
    basename: "/wheel-of-fortune/",
  },
);

export { router };
