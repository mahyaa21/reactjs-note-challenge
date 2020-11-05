import {
    LOAD_USER_INFO,
  } from "./userActionTypes";
  
  export const loginUser = data => ({
    type: LOAD_USER_INFO,
    data: data
  });