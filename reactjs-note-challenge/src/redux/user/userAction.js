import {
    LOAD_USER_INFO, 
  } from "./userActionTypes";
  
  export const loginUserAction = data => ({
    type: LOAD_USER_INFO,
    data: data
  });