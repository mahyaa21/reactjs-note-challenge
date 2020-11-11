import React, { useState } from 'react';
import { saveNote } from '../../api/Srvc/noteSrvc';
import { connect } from "react-redux";
import axios from 'axios';
import {
    getNoteList,
} from "../../redux/Actions";
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
        saveNote({ note: note, token: props.userInfo })
            .then(res => {
                alert('the note saved successfully!');
                fetch();
                setTitle('');
                setContent('');
                setAddNote(false);
            }).catch(error => {
                console.log(error);
            })
    }
    const discardNote = () => {
        setTitle('');
        setContent('');
        setAddNote(false);
    }
    const fetch = () => {
        props.userInfo && axios.get('https://challenge.pushe.co/api/v1/notes'
            , {
                headers: {
                    'Authorization': `jwt ${props.userInfo}`
                }
            }
        )
            .then((response) => {
                props.getNoteList({ payload: response.data })
            })
            .catch(error => {
                console.log(error);
            })

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
const mapDispatchToProps = dispatch => {
    return {
        getNoteList: (data) => dispatch(getNoteList(data)),
    };
};
const mapStateToProps = (state, props) => {
    return {
        notes: state.note.noteList,
        userInfo: state.user.userInfo
    };
};

const AddNote = connect(mapStateToProps)(_AddNote)
export default AddNote;
