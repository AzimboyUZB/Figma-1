import React from "react";
import styled from "styled-components";

function Card() {
    const handleOpen = (event) => {
        const login = document.querySelector(".login")
        event.preventDefault()

        login.classList.add("open")
    }

    return (
        <Wrapper>
            <Container>
                <H1>Get started with the<br /> future of roofing</H1>
                <P>Free the construction industry from tied-up funds and slowed-down build times.</P>
                <BoxBtn>
                    <ButtonCard>Schedule a<br /> demo</ButtonCard>
                    <ButtonLogin onClick={handleOpen}>Login</ButtonLogin>
                </BoxBtn>
            </Container>
        </Wrapper>
    )
}

export default Card

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F5F0E8;
`
const Container = styled.div`
    width: 1140px;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #303F9F;
    color: #fff;
    border-radius: 15px;
    gap: 30px;
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 54px;
    text-align: center;
    color: #FFFFFF;
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #F1F0F0;
`

const BoxBtn = styled.div`
    width: 400px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ButtonCard = styled.button`
    width: 192px;
    height: 74px;
    background: #FF9800;
    border: none;
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`

const ButtonLogin = styled.button`
    width: 192px;
    height: 74px;
    background: #FFFFFF;
    border: none;
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #2B2E44;
`