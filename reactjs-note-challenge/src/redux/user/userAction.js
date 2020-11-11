import {
  LOAD_USER_INFO,
} from "./userActionTypes";

export const loginUserAction = data => {
  return {
    type: LOAD_USER_INFO,
    data: data
  }
};