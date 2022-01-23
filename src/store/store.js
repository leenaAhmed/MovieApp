import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./compain";
import thunk from "redux-thunk";

const Store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
