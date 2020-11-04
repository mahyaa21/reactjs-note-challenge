import React, { useState } from 'react';
import {
    NoteListContainer,
    NoteListBox,
    NoteBoxTitle,
    NotesBoxContent,
    DoteWrapper,
    Dote,
    DeleteButton
} from './note.style';
const NOTES = [
    {
        title: 'salam',
        content: 'khooobbiii'
    },
    {
        title: 'mersi',
        content: 'mamnoon'
    },
    {
        title: 'mersi',
        content: 'mamnoon'
    },
    {
        title: 'mersi',
        content: 'mamnoon'
    },
    {
        title: 'mersi',
        content: 'mamnoon'
    }
]
const _NoteList = (props: Props) => {
    const [deleteNote, setDeleteNote] = useState(false);
    return <NoteListContainer>
        {NOTES.map((note, index) => {
            return <NoteListBox key={index}>
                <NoteBoxTitle>{note.title}</NoteBoxTitle>
                <NotesBoxContent>{note.content}</NotesBoxContent>
                <DoteWrapper onClick={() => { setDeleteNote(true) }}>
                    <Dote />
                    <Dote />
                    <Dote />
                    <DeleteButton index={deleteNote}>Delete</DeleteButton>
                </DoteWrapper>
            </NoteListBox>
        })}
    </NoteListContainer>
}
export default _NoteList;