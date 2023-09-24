import { ReactElement } from "react";
import PageLayoutHoc from "../../hocs/PageLayoutHoc";

import Onboarding from "./container/Onboarding";
export type TRouteTypes = {
  path: string;
  element: ReactElement;
  key: string;
};

const OnboardingPage = PageLayoutHoc(Onboarding);

export const onboardingRoutes: TRouteTypes[] = [
  {
    path: "/onboarding",
    element: <OnboardingPage />,
    key: "/",
  },
];
