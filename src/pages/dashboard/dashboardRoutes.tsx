import { ReactElement } from "react";
import PageLayoutHoc from "../../hocs/PageLayoutHoc";

import Dashboard from "./container/Dashboard";
export type TRouteTypes = {
  path: string;
  element: ReactElement;
  key: string;
};

const DashboardComponent = PageLayoutHoc(Dashboard);

export const dashboardRoutes: TRouteTypes[] = [
  {
    path: "/dashboard",
    element: <DashboardComponent />,
    key: "/dashboard",
  },
];
