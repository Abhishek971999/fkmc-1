import { useState } from "react";
import { useDispatch } from "react-redux";
import "./chatlistheader.scss";
import { filterChat } from "../../store/actions/chatActions";
const ChatListHeader = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const onChange = (e) => {
    setFilter(e.target.value);
    dispatch(filterChat(e.target.value));
  };

  return (
    <div className="chatlist-header-container">
      <h4>Filter by Title / Order ID</h4>
      <input
        placeholder="Start typing to search"
        onChange={onChange}
        value={filter}
      />
    </div>
  );
};

export default ChatListHeader;
