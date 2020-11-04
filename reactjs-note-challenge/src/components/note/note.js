import React from 'react';
import AddNote from './addNote';
import NoteList from './noteList';
import { NoteContainer } from './note.style';
const _Note = (props: Props) => {
    return <NoteContainer>
                <AddNote/>
                <NoteList/>
            </NoteContainer>
}
export default _Note;