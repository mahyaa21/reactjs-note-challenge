import {
    LOAD_NOTE_LIST,
  } from "./noteActionTypes";
  
  export const getNoteList = data => ({
    type: LOAD_NOTE_LIST,
    data: data
  });