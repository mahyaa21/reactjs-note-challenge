import React, { useState } from 'react';
import { saveNote } from '../../api/Srvc/noteSrvc';
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
    const storeNote = () => {
        let note = {
            title: title,
            content: content
        }
        saveNote(note)
        .then(res => {
            alert('the note saved successfully!');
        }).catch(error=>{
            console.log(error);
        })
    }
    const discardNote = () => {
        setTitle('');
        setContent('');
        setAddNote(false);
    }
    return <AddNoteContainer>
        <NoteContent onChange={onNoteChange} name={'content'} value={content} placeholder={'Take a note ...'} />
        <ActionButton onClick={() => { (content) ? setAddNote(true) : alert('please write content first!') }}>Add</ActionButton>
        {addNote && <NoteBoxContainer>
            <NoteTitle onChange={onNoteChange} name={'title'} value={title} placeholder={'Title .......'}></NoteTitle>
            <NoteTextareaWrapper>
                <NoteTextarea onChange={onNoteChange} name={'content'} value={content} placeholder={'Take a note ...'} />
                <NoteActionButtonWrapper>
                    <DiscardButton onClick={discardNote}>discard</DiscardButton>
                    <SaveButton onClick={storeNote}>save</SaveButton>
                </NoteActionButtonWrapper>
            </NoteTextareaWrapper>
        </NoteBoxContainer>}
    </AddNoteContainer>
}
export default _AddNote;