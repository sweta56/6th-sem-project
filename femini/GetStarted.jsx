import React from 'react'
import styled from 'styled-components'
import LoginOptionImage from '../assets/About-Us-Graphic.png'
import Button from '../components/Reuseable/Button'
import { Link } from 'react-router-dom'


const OptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 100vh;
`
const Left = styled.div`
    background: {#858585};
    display: grid;
    place-content: center;

`
const Right = styled.div`
    padding-left: 60px;
    display: grid;
    place-content: center;
    text-align: center;
    padding-top: 60px;
`

const SuperTitle = styled.h2`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 33px;
    margin-bottom: 60px;
`

const LoginOrRegisterContainer = styled.div`
    margin-bottom: 50px;
    display: grid;
    align-content: center;
`
const Title = styled.div`
    text-transform: uppercase;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
`
const NoRadiusButton = styled(Button)`
    border-radius: 0px;
    text-transform: uppercase;
    display: block;
    width: 400px;
    margin: auto;
    margin-bottom: 20px;

    
`

const GetStarted = () => {
    return (
        <div className=" relative top-[30px]">
        <OptionsContainer>
            <Left>
            <img src={LoginOptionImage} alt={"Left"} />
            </Left>
            <Right>
                <SuperTitle>Choose suitable Account option</SuperTitle>
                <LoginOrRegisterContainer>
                    <Title>Patient Account</Title>
                    <Link to="/user_register">
                        <NoRadiusButton outlined>Register as patient </NoRadiusButton>
                    </Link>
                    <Link to="/user_login">
                        <NoRadiusButton outlined>Login as patient </NoRadiusButton>
                    </Link>
                </LoginOrRegisterContainer>
                <LoginOrRegisterContainer>
                    <Title>Doctor Account</Title>
                    <Link to="/doctor_register">
                        <NoRadiusButton outlined>Register As Doctor</NoRadiusButton>
                    </Link>
                    <Link to="/doctor_login">
                        <NoRadiusButton outlined>Login As Doctor</NoRadiusButton>
                    </Link>

                </LoginOrRegisterContainer>
            </Right>
        </OptionsContainer>
        </div>
    )
}

export default GetStarted;