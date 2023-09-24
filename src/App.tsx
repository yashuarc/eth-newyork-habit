import { FC, Fragment } from "react";
import { Header } from "../ui_components/shared";
import { Route, Routes, useLocation } from "react-router-dom";
import { homeRoutes } from "./pages/home/homeRoutes";

import ErrorBoundary from "./utils/ErrorBoundary";
import { dashboardRoutes } from "./pages/dashboard/dashboardRoutes";
import { messagesRoutes } from "./pages/messages/messagesRoutes";
import { onboardingRoutes } from "./pages/onboarding/onboardingRoutes";
import { challengeRoutes } from "./pages/challenges/challengeRoutes";

const App: FC = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  // const { isConnected } = useAccount();

  // useEffect(() => {
  //   if (isConnected) {
  //     navigate("/dashboard");
  //   }
  // }, [isConnected]);

  return (
    <div className="app h-full">
      {!location.pathname.includes("onboarding") && <Header />}
      <main
        className={`h-full ${
          location.pathname.includes("onboarding") ? "" : "pt-14"
        }`}
      >
        <ErrorBoundary>
          <Routes>
            {[
              ...onboardingRoutes,
              ...homeRoutes,
              ...challengeRoutes,
              ...dashboardRoutes,
              ...messagesRoutes,
            ].map(({ path, element, key }, index) => (
              <Fragment key={index}>
                <Route path={path} element={element} key={key} />
              </Fragment>
            ))}
            {/* {[...homeRoutes].map(({ path, element, key }, index) => (
              <Fragment key={index}>
                <Route
                  element={<PrivateRoute path={path}>{element}</PrivateRoute>}
                >
                  <Route
                    path={path}
                    element={<PrivateRoute path={path}>{element}</PrivateRoute>}
                    key={key}
                  />
                </Route>
              </Fragment>
            ))} */}
          </Routes>
        </ErrorBoundary>
      </main>
      {/* {location.pathname !== "/" && <Footer />} */}
    </div>
  );
};

export default App;
