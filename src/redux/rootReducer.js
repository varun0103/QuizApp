import questionReducer from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  data: questionReducer,
});

export default rootReducer;
