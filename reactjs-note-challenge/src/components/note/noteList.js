import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect, useStore } from "react-redux";
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
    const [key, setKey] = useState(1);
    useEffect(() => {
        fetch();
    }, props.userInfo);
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

    const DelButton = (index) => {
        (deleteNote) ? setDeleteNote(false) : setDeleteNote(true);
        setDelButtonNumber(index);
    }
    const removeNote = (id) => {
        discardNote({ id: id, token: props.userInfo })
            .then(res => {
                alert('the note is removed successfully!');
                fetch();
                setKey((key === 1) ? 2 : 1);
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

const NoteList = connect(mapStateToProps, mapDispatchToProps)(_NoteList)
export default NoteList;