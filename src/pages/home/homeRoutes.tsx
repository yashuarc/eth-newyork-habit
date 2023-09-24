import { ReactElement } from "react";
import PageLayoutHoc from "../../hocs/PageLayoutHoc";

import Home from "./container/Home";
export type TRouteTypes = {
  path: string;
  element: ReactElement;
  key: string;
};

const HomePage = PageLayoutHoc(Home);

export const homeRoutes: TRouteTypes[] = [
  {
    path: "/",
    element: <HomePage />,
    key: "/",
  },
  {
    path: "/home",
    element: <HomePage />,
    key: "/home",
  },
];
