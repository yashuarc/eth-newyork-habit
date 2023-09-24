import { ReactElement } from "react";
import PageLayoutHoc from "../../hocs/PageLayoutHoc";

import Messages from "./container/Messages";
import NewChat from "./container/NewChat";
import ChatList from "./container/ChatList";

export type TRouteTypes = {
  path: string;
  element: ReactElement;
  key: string;
};

const MessageComponent = PageLayoutHoc(Messages);
const NewChatComponent = PageLayoutHoc(NewChat);
const ChatListComponent = PageLayoutHoc(ChatList);

export const messagesRoutes: TRouteTypes[] = [
  {
    path: "/messages",
    element: <MessageComponent />,
    key: "/messages",
  },
  {
    path: "/messages/new-chat",
    element: <NewChatComponent />,
    key: "/messages/new-chat",
  },
  {
    path: "/messages/chat",
    element: <ChatListComponent />,
    key: "/messages/chat",
  },
];
