import { useState } from "react";
import { useDispatch } from "react-redux";
import { randomString } from "../../utils";
import { addMessage } from "../../store/actions/chatActions";
import "./chatmessagebox.scss";

const ChatMessageBox = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const mssg = {
      messageId: randomString("msg-"),
      message,
      timestamp: Date.now(),
      sender: "USER",
      messageType: "text",
    };
    dispatch(addMessage(mssg));
    setMessage("");
  };

  const onChange = (e) => setMessage(e.target.value);

  return (
    <div className="chatmessage-box-container">
      <div className="chatmessage-box">
        <input
          placeholder="Type a Message..."
          onChange={onChange}
          value={message}
        />
        <button onClick={sendMessage}>
          <i className="far fa-paper-plane" />
        </button>
      </div>
    </div>
  );
};

export default ChatMessageBox;
