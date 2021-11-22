import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "./chatlistheader.scss";
import { filterChat } from "../../store/actions/chatActions";
const ChatListHeader = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const debouncedEl = useRef();

  const onChange = (val) => dispatch(filterChat(val));

  const handleChange = (e) => {
    setFilter(e.target.value);
    clearTimeout(debouncedEl.current);
    debouncedEl.current = setTimeout(() => onChange(e.target.value), 300);
  };

  return (
    <div className="chatlist-header-container">
      <h4>Filter by Title / Order ID</h4>
      <input
        placeholder="Start typing to search"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

export default ChatListHeader;
