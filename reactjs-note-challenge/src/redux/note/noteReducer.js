import {
  LOAD_NOTE_LIST,
  LOAD_NOTE_LIST_SUCCESS,
} from "./noteActionTypes";

const NoteReducer = function (
  state = {
    noteList: [],
  },
  action = {}
) {
  console.log(action.data);
  switch (action.type) {
    case LOAD_NOTE_LIST:
      return Object.assign({}, state, {
        noteList: [
          ...action.data.payload,
        ]
      });
    case LOAD_NOTE_LIST_SUCCESS:
      return Object.assign({}, state, {
        noteList: [
          ...action.data.payload,
        ]
      });
    default:
      return state;
  }
};

export default NoteReducer;  