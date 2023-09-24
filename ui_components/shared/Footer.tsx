import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Footer: FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-slate-100">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="paragraph_bold" onClick={() => navigate("/messages")}>
          Messages
        </div>
        <div className="paragraph_bold" onClick={() => navigate("/settings")}>
          Settings
        </div>
      </div>
    </footer>
  );
};
export default Footer;
