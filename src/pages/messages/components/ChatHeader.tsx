import { FC } from "react";
import { NavLink } from "../../../../ui_components/shared";
import { getImage, getNounAvatar, trimAddress } from "../../../utils";

const ChatHeader: FC = () => {
  return (
    <div className="flex items-center p-3 bg-white">
      <div className="flex items-center gap-3">
        <NavLink to="" goBack>
          <img className="rotate-90" src={getImage("arrow_down.svg")} />
        </NavLink>
        <div className="flex items-center gap-2">
          <img
            src={getNounAvatar("0xD322A0bd6A139cFd359F1EFC540F6cb358d73A16")}
            className="w-10 h-10 rounded-full"
          />

          <p className="paragraph_bold">
            {trimAddress("0xD322A0bd6A139cFd359F1EFC540F6cb358d73A16", 5)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ChatHeader;
