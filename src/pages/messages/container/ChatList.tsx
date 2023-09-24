import { FC } from "react";
import {
  ChatBeginning,
  ChatHeader,
  InviteMessage,
  MessageBox,
} from "../components";

const ChatList: FC = () => {
  return (
    <div className="chatWindow flex h-full flex-col pb-6">
      <ChatHeader />
      <div className="chatMessages h-full flex flex-col px-4">
        <ChatBeginning />
        <InviteMessage />
      </div>
      <MessageBox />
    </div>
  );
};
export default ChatList;
