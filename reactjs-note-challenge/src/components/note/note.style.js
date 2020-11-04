import styled from 'styled-components';

export const NoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoteContent = styled.input`
    margin-bottom: 10px;
    width: calc(100% - 240px);
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 10px;
    outline: none;
    padding: 0px 10px;
`
export const NoteBoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const AddNoteContainer = styled.div`
    width: 100%;
    margin: 24px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const NoteTitle = styled.input`
    margin-bottom: 10px;
    height: 50px;
    outline: none;
    padding: 0px 10px;
    width: calc(100% - 240px);
    margin: auto;
    margin-top: 20px;
    border: 1px solid lightgray;
    border-radius: 10px 10px 0px 0px;
    border-bottom: 0px;
`
export const NoteTextareaWrapper = styled.div`
    margin-bottom: 10px;
    border: 1px solid lightgray;
    outline: none;  
    position: relative;
    height: 300px;
    width: calc(100% - 240px);
    margin: auto;
    margin-top: 0px;
    padding: 10px;
    border-radius: 0px 0px 10px 10px;
`
export const NoteTextarea = styled.textarea`
    width:100%;
    height: 100%;
    outline: none;
    border: none;
`
export const NoteActionButtonWrapper = styled.div`
    width: calc(100% - 240px);
    margin: auto;
    display:flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 0px;
    right: 0px; 
`

export const ActionButton = styled.button`
    width: 100px;
    height: 48px;
    border: none;
    border-radius: 10px;
    outline: none;
    background-color: #0000FF;
    color: white;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background-color: #000C66;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
    }
`
export const SaveButton = styled(ActionButton)`
    margin: 5px;
`
export const DiscardButton = styled(ActionButton)`
    background-color: #FF0000;
    margin: 5px;
    &:hover{
        background-color: #9F2B00;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
    }

`
export const NoteListContainer = styled.div`
    width: 100%;
    height: 400px;
    overflow-y: scroll;
`
export const NoteListBox = styled.div`
    margin-bottom: 10px;
    width: calc(100% - 240px);
    margin: auto;
    margin-bottom: 5px;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 10px;
    outline: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`
export const NoteBoxTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`
export const NotesBoxContent = styled.div``

export const DoteWrapper = styled.a`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
    cursor: pointer;
    position: relative;
`
export const Dote = styled.div`
    width: 5px;
    height: 5px;
    background-color: black;
    margin-bottom: 1px;
    
`
export const DeleteButton = styled(ActionButton)`
    position: absolute;
    background-color: #FF0000;
    margin: 5px;
    width: 130px;
    height: 35px;
    display: ${props => props.index ? 'block' : 'none'};
    &:hover{
        background-color: #9F2B00;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
    }
`