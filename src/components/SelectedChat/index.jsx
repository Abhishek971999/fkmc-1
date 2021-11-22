import { Fragment } from "react";
import { useSelector } from "react-redux";
import ChatBox from "../ChatBox";

import "./selectedchat.scss";
const SelectedChat = () => {
  const { selectedChat } = useSelector((state) => state.chats);
  return (
    <div className="selectedchat-message-list">
      {selectedChat?.messageList.length > 0 ? (
        <Fragment>
          {selectedChat?.messageList.map((message) => (
            <ChatBox message={message} key={message?.messageId} />
          ))}
        </Fragment>
      ) : (
        <div className="selectedchat-nomessage">
          Send a message to start chatting
        </div>
      )}
    </div>
  );
};

export default SelectedChat;
