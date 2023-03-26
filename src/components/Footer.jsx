import React from "react";
import styled from "styled-components";
import Logo from "../assets/img/IMAGE (17).png"

function Footer() {
    const handleOpen = (event) => {
        const login = document.querySelector(".login")
        event.preventDefault()

        login.classList.add("open")
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Img src={Logo} />
                    <H4>14555 Dallas Pkwy. Suite 100-334, Dallas, TX 75254</H4>
                    <H4>© 2022 XSQRD, Inc d/b/a SquareDash. All rights reserved.</H4>
                    <P>Design + Development <Span>Composite</Span></P>
                </Row>
                <BoxBtn>
                    <Button>Schedule a demo</Button>
                    <ButtonLogin onClick={handleOpen}>Login</ButtonLogin>
                </BoxBtn>
            </Container>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    width: 100%;
    height: 298px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
`

const Container = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Row = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Img = styled.img`
    width: 240px;
    height: 38px;
`

const H4 = styled.h4`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #333333;
`

const P = styled.p`
    display: flex;
    gap: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #2B2E44;
`

const Span = styled.span``

const BoxBtn = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 30px 0 0 0;
`

const Button = styled.button`
    width: 170px;
    height: 25px;
    display: flex;
    justify-content: flex-start;
    background: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    border: none;
    color: #303F9F;
`

const ButtonLogin = styled.button`
    width: 51px;
    height: 25px;
    display: flex;
    justify-content: flex-start;
    background: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    border: none;
    color: #303F9F;
`