import { ReactElement } from "react";
import PageLayoutHoc from "../../hocs/PageLayoutHoc";

import Challenges from "./container/Challenges";

export type TRouteTypes = {
  path: string;
  element: ReactElement;
  key: string;
};

const ChallengesComponent = PageLayoutHoc(Challenges);

export const challengeRoutes: TRouteTypes[] = [
  {
    path: "/create-challenge",
    element: <ChallengesComponent />,
    key: "/create-challenge",
  },
];
