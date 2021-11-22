import ChatList from "./components/chatList";
import ChatListHeader from "./components/ChatListHeader";
import "./app.scss";
import { useSelector } from "react-redux";
import SelectedChatHeader from "./components/SelectedChatHeader";
import ChatMessageBox from "./components/ChatMessageBox";
import SelectedChat from "./components/SelectedChat";

const App = () => {
  const { selectedChat } = useSelector((state) => state.chats);
  return (
    <div className="chat-application-container">
      <div className="chat-application-inbox">
        <ChatListHeader />
        <ChatList />
      </div>
      {selectedChat && (
        <div className="chat-application-selected-chat">
          <SelectedChatHeader />
          <SelectedChat />
          <ChatMessageBox />
        </div>
      )}
    </div>
  );
};

export default App;
