import "./chatbox.scss";
import moment from "moment";
const ChatBox = ({ message }) => {
  return (
    <div
      className={`message-container ${message?.sender.toLowerCase()} ${
        message?.messageType
      }`}
    >
      <p>{message?.message}</p>
      {message?.messageType === "optionedMessage" && (
        <div className="optioned-message">
          {message?.options.length > 0 &&
            message?.options.map((option) => (
              <div className="optioned-message-option">
                <p className="optioned-message-title">{option?.optionText}</p>
                <p className="optioned-message-subtitle">
                  {option?.optionSubText}
                </p>
              </div>
            ))}
        </div>
      )}

      <small
        className={`${message?.messageType === "optionedMessage" && "dnone"}`}
      >
        {moment.unix(message?.timestamp).format("hh:mm:A")}{" "}
        <i className="fas fa-check-double"></i>
      </small>
    </div>
  );
};

export default ChatBox;
