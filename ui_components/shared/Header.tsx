import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { getImage } from "../../src/utils";

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 w-full bg-white">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="paragraph_bold" onClick={() => navigate("/")}>
          <img src={getImage("logo.svg")} />
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 cursor-pointer"
            src={getImage("notification.svg")}
          />
          <img
            className="w-8 h-8 rounded-full cursor-pointer"
            src={getImage("profile.png")}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
