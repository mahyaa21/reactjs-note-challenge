import React, { useState } from 'react';
import {
    NoteBoxContainer,
    NoteTitle,
    NoteTextarea,
    NoteActionButtonWrapper,
    SaveButton,
    DiscardButton,
    ActionButton,
    AddNoteContainer,
    NoteContent,
    NoteTextareaWrapper
} from './note.style';
const _AddNote = (props: Props) => {
    const [addNote, setAddNote] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const onNoteChange = (e) => {
        (e.target.name === 'content') ? setContent(e.target.value) : setTitle(e.target.value);
    }
    return <AddNoteContainer>
        <NoteContent onChange={onNoteChange} name={'content'} value={content} placeholder={'Take a note ...'} />
        <ActionButton onClick={() => { (content) ? setAddNote(true) : alert('please write content first!') }}>Add</ActionButton>
        {addNote && <NoteBoxContainer>
            <NoteTitle onChange={onNoteChange} name={'title'} value={title} placeholder={'Title .......'}></NoteTitle>
            <NoteTextareaWrapper>
                <NoteTextarea onChange={onNoteChange} name={'content'} value={content} placeholder={'Take a note ...'} />
                <NoteActionButtonWrapper>
                    <DiscardButton>discard</DiscardButton>
                    <SaveButton>save</SaveButton>
                </NoteActionButtonWrapper>
            </NoteTextareaWrapper>
        </NoteBoxContainer>}
    </AddNoteContainer>
}
export default _AddNote;