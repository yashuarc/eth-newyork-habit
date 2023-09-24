import { FC, ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface IProps {
  children: ReactElement;
  path: string;
}

const PrivateRoute: FC<IProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {navigate({
        pathname: "/",
        search: location.search,
      })}
    </>
  );
};

export default PrivateRoute;
