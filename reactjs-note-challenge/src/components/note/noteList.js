import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import {
    getNoteList,
} from "../../redux/Actions";
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
    const [delButtonNumber, setDelButtonNumber] = useState('');
    useEffect(() => {
        fetch();
    }, []);
    const fetch = () => {
        props.getNoteList(props.userInfo);
    }
    const DelButton = (index) => {
        (deleteNote) ? setDeleteNote(false) : setDeleteNote(true);
        setDelButtonNumber(index);
    }
    const removeNote = (id) => {
        discardNote(id);
    }
    return <NoteListContainer>
        {NOTES.map((note, index) => {
            return <NoteListBox key={index} onClick={() => { DelButton(index) }}>
                <NoteBoxTitle>{note.title}</NoteBoxTitle>
                <NotesBoxContent>{note.content}</NotesBoxContent>
                <DoteWrapper onClick={() => { DelButton(index) }}>
                    <Dote />
                    <Dote />
                    <Dote />
                    <DeleteButton open={(delButtonNumber == index && deleteNote) ? true : false} onClick={() => { removeNote(note.id) }}>Delete</DeleteButton>
                </DoteWrapper>
            </NoteListBox>
        })}
    </NoteListContainer >
}
const mapDispatchToProps = dispatch => {
    return {
        getNoteList: (data) => dispatch(getNoteList(data)),
    };
};
const mapStateToProps = (state, props) => {
    return {
        notes: state.note,
        userInfo: state.user
    };
};

const NoteList = connect(mapStateToProps, mapDispatchToProps)(_NoteList)
export default NoteList;