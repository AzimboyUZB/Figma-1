import React from "react";
import styled from "styled-components";
import Img1 from "../assets/img/Vector (1).png"
import Img2 from "../assets/img/Vector (2).png"
import Img3 from "../assets/img/IMAGE (14).png"

function MenuStatistic() {

    const statistic = [
        {
            id: 1,
            img: Img1,
            h3: "Financial Reporting",
            p: "We help track of your financial details and keep you regularly updated."
        },
        {
            id: 2,
            img: "",
            h3: "Audit Logs",
            p: "Keep detailed records of your digital finances, all in one place."
        },
        {
            id: 3,
            img: Img2,
            h3: "Predictable Revenue",
            p: "Get paid on your schedule, not your adjusters'."
        },
        {
            id: 4,
            img: Img3,
            h3: "Custom Notifications",
            p: "Make your own templates for communications with adjusters."
        },
    ]

    return (
        <Wrapper>
            <Container>
                <Title>
                    <H1>Features built for roofers, by roofers</H1>
                    <P>The first payment software tailored to the roofing industry.</P>
                </Title>
                <Box>
                    {statistic.map((item) => (  
                        <Card key={item.id}>
                            <CardImg>
                                <Img src={item.img} />
                            </CardImg>
                            <CardTitle>
                                <H3>{item.h3}</H3>
                                <P>{item.p}</P>
                            </CardTitle>
                        </Card>))}
                </Box>
            </Container>
        </Wrapper>
    )
}

export default MenuStatistic

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F5F0E8;
`

const Container = styled.div`
    width: 90%;
    height: 74%;
`

const Title = styled.div`
    width: 100%;
    height: 25%;
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 54px;
    color: #333333;
`

const P = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #333333;
`

const Box = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Card = styled.div`
    width: 20%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 15px;
    padding: 10px;
`

const CardImg = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
`

const CardTitle = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const H3 = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 31px;
    color: #333333;
`