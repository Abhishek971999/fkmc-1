import { useSelector } from "react-redux";
import "./selectedchatheader.scss";

const SelectedChatHeader = () => {
  const { selectedChat } = useSelector((state) => state.chats);
  if (!selectedChat) {
    return "Loading...";
  }
  return (
    <div className="selectedchat-header-container">
      <div className="selectedchat-header-icon-container">
        <img
          src={selectedChat?.imageURL}
          alt="Icon"
          className="selectedchat-header-icon"
        />
      </div>
      <h4>{selectedChat?.title}</h4>
    </div>
  );
};

export default SelectedChatHeader;
