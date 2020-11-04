import React from 'react';
import {
    HeaderContainer,
    ButtonWrapper,
    LoginButton,
    SignUpButton,
    HeaderContent,
    HeaderDiv
} from './header.style';
const _Header = (props: Props) => {
    return <HeaderContainer>
        <HeaderDiv></HeaderDiv>
        <HeaderContent>Header</HeaderContent>
        <ButtonWrapper>
            <LoginButton>Sign In</LoginButton>
            <SignUpButton>Sign Up</SignUpButton>
        </ButtonWrapper>
    </HeaderContainer>
}
export default _Header;