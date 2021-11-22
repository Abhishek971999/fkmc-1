import "./chatitem.scss";

const ChatItem = ({ chat, selectChat }) => {
  return (
    <div className="chatitem-container" onClick={() => selectChat(chat?.id)}>
      <div className="chatitem-icon-container">
        <img className="chatitem-icon" src={chat?.imageURL} alt="Icon" />
      </div>
      <div className="chatitem-text-container">
        <p className="chatitem-title">{chat?.title}</p>
        <p className="chatitem-order-no">Order {chat?.orderId}</p>
        <p className="chatitem-message">
          {chat?.messageList[chat?.messageList?.length - 1]?.message}
        </p>
      </div>
      <div>5:57pm</div>
    </div>
  );
};

export default ChatItem;
