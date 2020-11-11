import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import {
    loginUserAction,
} from "../../redux/Actions";
import axios from 'axios';
import {
    HeaderContainer,
    ButtonWrapper,
    LoginButton,
    SignUpButton,
    HeaderContent,
    HeaderDiv
} from './header.style';
const _Header = (props: Props) => {
    useEffect(() => {
        fetch();
    }, []);
    const fetch = async () => {
        try {
            const response = await axios.post("https://challenge.pushe.co/api/v1/auth/token", {
                email: 'mahyaka12@gmail.com',
                password: '123456789'
            });
            const data = await response;
            props.loginUserAction({ payload: data.data.token })
            return data;
        } catch (e) {
            console.log(e)
        }

    }
    return <HeaderContainer>
        <HeaderDiv></HeaderDiv>
        <HeaderContent>Header</HeaderContent>
        <ButtonWrapper>
            <LoginButton>Sign In</LoginButton>
            <SignUpButton>Sign Up</SignUpButton>
        </ButtonWrapper>
    </HeaderContainer>
}
const mapDispatchToProps = dispatch => {
    return {
        loginUserAction: (data) => dispatch(loginUserAction(data)),
    };
};
const mapStateToProps = (state, props) => {
    return {
        userInfo: state.user
    };
};

const Header = connect(mapStateToProps, mapDispatchToProps)(_Header)
export default Header;