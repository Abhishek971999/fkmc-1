import * as actionTypes from "./actionType";
import axios from "axios";

export const fetchAllChats = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CHAT_LIST_REQUEST });
    const { data } = await axios.get(
      "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
    );
    dispatch({ type: actionTypes.CHAT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.CHAT_LIST_FAIL });
  }
};

export const fetchSingleChat = (id) => async (dispatch) =>
  dispatch({ type: actionTypes.SELECT_SINGLE_CHAT, payload: id });

export const addMessage = (payload) => async (dispatch) =>
  dispatch({ type: actionTypes.ADD_MESSAGE, payload });

export const filterChat = (payload) => async (dispatch) =>
  dispatch({ type: actionTypes.FILTER_CHATS, payload });
