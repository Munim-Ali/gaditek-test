/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
import { FC } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Login from "../pages/login";
import { Page, Pages } from "../constants";
import Layout from "../layout/Layout";

const Index: FC = () => {
  return useRoutes([
    {
      path: "",
      element: <Navigate to={"/login"} />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: Pages[Page.Dashboard].route,
      element: <Layout page={Page.Dashboard} />,
    },
  ]);
};

export default Index;
