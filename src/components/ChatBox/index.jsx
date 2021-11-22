import moment from "moment";
import { useDispatch } from "react-redux";
import { randomString } from "../../utils";
import { addMessage } from "../../store/actions/chatActions";
import "./chatbox.scss";

const ChatBox = ({ message }) => {
  const dispatch = useDispatch();

  const sendMessage = (message) => {
    if (message === "Request a call") {
      const mssg = {
        messageId: randomString("msg-"),
        message: "I want a callback",
        timestamp: Date.now(),
        sender: "USER",
        messageType: "text",
      };
      dispatch(addMessage(mssg));
    }
  };

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
              <div
                className="optioned-message-option"
                onClick={() => sendMessage(option?.optionText)}
              >
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
