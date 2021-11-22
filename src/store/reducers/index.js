import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import chatReducer from "./chatReducer";

const reducer = combineReducers({
  chats: chatReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
