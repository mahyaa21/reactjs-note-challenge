import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {
    loginUser,
} from "../../redux/Actions";
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
    const fetch = () => {
        props.loginUser({token: props.userInfo});
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
        loginUser: (data) => dispatch(loginUser(data)),
    };
};
const mapStateToProps = (state, props) => {
    return {
        userInfo: {
            user: state.userInfo
        }
    };
};

const Header = connect(mapStateToProps, mapDispatchToProps)(_Header)
export default Header;