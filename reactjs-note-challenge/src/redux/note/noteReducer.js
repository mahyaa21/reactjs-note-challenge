import {
    LOAD_NOTE_LIST_SUCCESS,  
  } from "./noteActionTypes";

  const NoteReducer = function(
    state = {
      notes: {},
    },
    action = {}
  ) {
    switch (action.type) {
      case LOAD_NOTE_LIST_SUCCESS:
        return Object.assign({}, state, {
          notes: {
              ...action.data.payload,
          }
        });
      default:
        return state;
    }
  };
  
  export default NoteReducer;  