import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import messageReducer from "./messagereducer";
import categoryReducer from "./categoryreducer";

const rootReducer = combineReducers({
  routing: routerReducer,
  messages: messageReducer,
  category: categoryReducer
});

export default rootReducer;
