import NoteReducer from "./note/noteReducer";
import UserReducer from "./user/userReducer";
import { combineReducers } from "redux";
const createRootReducer = () => {
  return combineReducers({
    note: NoteReducer,
    user: UserReducer
  });
}
export default createRootReducer;