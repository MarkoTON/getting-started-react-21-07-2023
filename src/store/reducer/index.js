// Ovo je za export da mozes da pristupis svim reducerima.
import { combineReducers } from "redux";

import users from "./users";

export default combineReducers({
  users
});