import { combineReducers } from "redux";
import mapReducer from "./mapReducer";
import drawerReducer from "./drawerReducer";

const rootReducer = combineReducers({
  mapReducer,
  drawerReducer,
});

export default rootReducer;
