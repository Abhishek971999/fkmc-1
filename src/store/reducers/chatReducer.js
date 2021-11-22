import * as actionTypes from "../actions/actionType";

const initialState = {
  chats: null,
  loading: false,
  error: null,
  selectedChat: null,
  filteredChats: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHAT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CHAT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        chats: action.payload,
      };
    case actionTypes.CHAT_LIST_FAIL:
      return {
        ...state,
        error: "SOMETHING WENT WRONG",
        loading: false,
      };
    case actionTypes.SELECT_SINGLE_CHAT:
      return {
        ...state,
        selectedChat: state?.chats.find((chat) => chat.id === action.payload),
      };
    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
        selectedChat: {
          ...state?.selectedChat,
          messageList: [...state?.selectedChat?.messageList, action.payload],
        },
      };
    case actionTypes.FILTER_CHATS:
      if (action.payload === "")
        return {
          ...state,
          filteredChats: null,
        };
      return {
        ...state,
        filteredChats: state?.chats.filter((chat) => {
          return (
            chat.orderId.toLowerCase().indexOf(action.payload.toLowerCase()) >=
              0 ||
            chat.title.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0
          );
        }),
      };
    default:
      return state;
  }
};

export default chatReducer;
