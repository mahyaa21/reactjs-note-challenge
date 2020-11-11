import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect, useStore } from "react-redux";
import {
    getNoteList,
} from "../../redux/Actions";
import AddNote from './addNote';
import NoteList from './noteList';
import { NoteContainer } from './note.style';
const _Note = (props: Props) => {
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
                props.getNoteList({ payload: response.data });
            })
            .catch(error => {
                console.log(error);
            })

    }
    return <NoteContainer>
        <AddNote fetch={fetch} />
        <NoteList fetch={fetch} notes={props.notes} key={key} />
    </NoteContainer>
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

const Note = connect(mapStateToProps, mapDispatchToProps)(_Note)
export default Note;