import { combineReducers } from "redux";
import frozenReducer from "./frozenReducer";
import meatReducer from "./meatReducer";
import produceReducer from "./produceReducer";

const rootReducer = combineReducers({
  frozen: frozenReducer,
  meat: meatReducer,
  produce: produceReducer,
});

export default rootReducer;
