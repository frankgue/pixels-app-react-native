import { combineReducers, legacy_createStore } from "redux";
import appReducer from "./reducers/appReducer";

const rootReducer = combineReducers({
  users: appReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
