import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllChats,
  fetchSingleChat,
} from "../../store/actions/chatActions";
import ChatItem from "../ChatItem";

const ChatList = () => {
  const dispatch = useDispatch();

  const { chats, loading, error, filteredChats } = useSelector(
    (state) => state.chats
  );

  useEffect(() => {
    dispatch(fetchAllChats());
  }, [dispatch]);

  const selectChat = (id) => dispatch(fetchSingleChat(id));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <Fragment>
      {filteredChats === null ? (
        <Fragment>
          {chats?.map((chat) => (
            <ChatItem key={chat.id} chat={chat} selectChat={selectChat} />
          ))}
        </Fragment>
      ) : (
        <Fragment>
          {filteredChats?.map((chat) => (
            <ChatItem key={chat.id} chat={chat} selectChat={selectChat} />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ChatList;
