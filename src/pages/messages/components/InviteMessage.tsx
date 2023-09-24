import { FC } from "react";
import { getImage } from "../../../utils";

const InviteMessage: FC = () => {
  return (
    <div className="inviteMessage flex justify-end">
      <div className="chatBubble bg-[#0d7df2] rounded-t-2xl rounded-bl-2xl rounded-br-md px-3 py-2 text-center">
        <img src={getImage("hand_emoji.svg")} />
        <p className="paragraph_medium text-white">Chat invite</p>
        <p className="supportText_regular text-white">pending</p>
      </div>
    </div>
  );
};
export default InviteMessage;
