import React, { useState } from 'react';
import { connect } from "react-redux";
import { discardNote } from '../../api/Srvc/noteSrvc';
import {
    NoteListContainer,
    NoteListBox,
    NoteBoxTitle,
    NotesBoxContent,
    DoteWrapper,
    Dote,
    DeleteButton
} from './note.style';

const _NoteList = (props: Props) => {
    const [deleteNote, setDeleteNote] = useState(false);
    const [delButtonNumber, setDelButtonNumber] = useState('');
    const DelButton = (index) => {
        (deleteNote) ? setDeleteNote(false) : setDeleteNote(true);
        setDelButtonNumber(index);
    }
    const removeNote = (id) => {
        discardNote({ id: id, token: props.userInfo })
            .then(res => {
                alert('the note is removed successfully!');
                props.fetch();
            }).catch(e => {
                console.log(e);
            })
    }
    return <NoteListContainer>
        {props.notes && props.notes.map((note, index) => {
            return <NoteListBox key={index} onClick={() => { DelButton(index) }}>
                <NoteBoxTitle>{note.title}</NoteBoxTitle>
                <NotesBoxContent>{note.content}</NotesBoxContent>
                <DoteWrapper onClick={() => { DelButton(index) }}>
                    <Dote />
                    <Dote />
                    <Dote />
                    <DeleteButton open={(delButtonNumber == index && deleteNote) ? true : false} onClick={() => { removeNote(note._id) }}>Delete</DeleteButton>
                </DoteWrapper>
            </NoteListBox>
        })}
    </NoteListContainer >
}
const mapStateToProps = (state, props) => {
    return {
        userInfo: state.user.userInfo
    };
};

const NoteList = connect(mapStateToProps)(_NoteList)
export default NoteList;