import React from "react";
import styled from "styled-components";
import img from "../assets/img/IMAGE (11).png"

function MenuPlanOne() {
    return (
        <Wrapper>
            <Container>
                <About>
                    <Title>
                        <H1>Get paid for the work you<br />
                            do, as you’re doing it.</H1>
                    </Title>
                    <Plan>
                        <Box>
                            <Number>01</Number>
                            <Text>
                                <H2>Get paid instantly with claim <br />
                                    funding</H2>
                                    <P>Funding services tailored for insurance claims.</P>
                            </Text>
                        </Box>
                        <Box>
                            <Number>02</Number>
                            <Text>
                                <H2>Invoice for partial job completion</H2>
                                <P>Payment for one step before you move on to the next.</P>
                            </Text>
                        </Box>
                        <Box>
                            <Number>03</Number>
                            <Text>
                                <H2>Save time by collecting payments<br />
                                online</H2>
                                <P>No time wasted mailing checks or traveling to pick them up.</P>
                            </Text>
                        </Box>
                    </Plan>
                </About>
                <MenuPlanOneImg>
                    <Img src={img}></Img>
                </MenuPlanOneImg>
            </Container>
        </Wrapper>
    )
}

export default MenuPlanOne

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #2B2E44;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 90%;
    height: 90vh;
    display: flex;
`

const About = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Title = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 46px;
    color: #fff;
`

const Plan = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Box = styled.div`
    width: 70%;
    height: 29%;
    display: flex;
    justify-content: space-between;
`

const Number = styled.div`
    width: 64px;
    height: 64px;
    background: #F5F0E8;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #FF9800;
`

const Text = styled.div`
    width: 77%;
    height: 100%;
`

const H2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 27px;
    color: #FFFFFF;
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.445);
`

const MenuPlanOneImg = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Img = styled.img`
    width: 80%;
    height: 100%;
`