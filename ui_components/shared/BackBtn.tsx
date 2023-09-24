import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { getImage } from "../../src/utils";

interface INavLinkProps {
  className?: string;
}

const BackBtn: FC<INavLinkProps> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className={`${className ?? ""}`}>
      <img src={getImage("arrow_back.svg")} />
    </div>
  );
};

export default BackBtn;
