import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
`
export const HeaderDiv = styled.div`
    width: 33.33%;
`
export const ButtonWrapper = styled.div`
    margin-right: 24px;
    width: 33.33%;
    display: flex;
    justify-content: flex-end;
`
export const SignUpButton = styled.button`
    width: 100px;
    height: 48px;
    border: none;
    border-radius: 50px;
    outline: none;
    color: #0000FF;
    cursor: pointer;
    margin: 0px 3px;
    font-weight: bold;
    &:hover{
        background-color: #0000FF;
        color: white;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
    }
`
export const LoginButton = styled(SignUpButton)``
export const HeaderContent = styled.div`
    width: 33.33%;
    display: flex;
    justify-content: center;
`