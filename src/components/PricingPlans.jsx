import React from "react";
import styled from "styled-components";
import Icon1 from "../assets/icon/Icon1";
import Icon2 from "../assets/icon/Icon2";

function PricingPlans() {

    const card = [
        {
            id: 1,
            name: "Professional",
            pirce: "$239",
            month: "/month",
            title: "4.95% per funding advance",
            text1: "Unlimited Claims",
            text2: "5GB of photo storage",
            text3: "Includes 3 users",
        },
        {
            id: 2,
            name: "Enterprise",
            pirce: "Custom",
            month: "",
            title: "Call for volume discounts",
            text1: "Unlimited Claims",
            text2: "Cloud Hosting",
            text3: "Dedicated Support",
        },
    ]

    return (
        <Wrapper>
            <Container>
                <Title>
                    <H1>Pricing Plans</H1>
                    <P>Only pay for what you need with scaling plans you can grow with.</P>
                    <H5>Save 20% by paying annually</H5>
                    <TitleBtn>
                        <ButtonAnnual>Annual</ButtonAnnual>
                        <ButtonMonthly>Monthly</ButtonMonthly>
                    </TitleBtn>
                </Title>
                <BoxCard>
                    <Card>
                        <Row>
                            <H2>Starter</H2>
                            <H5><Span>$79</Span>/month</H5>
                            <P>5.95% per funding advance</P>
                            <H6><Icon1 />Up to 10 claims</H6>
                            <H6><Icon1 />5GB of photo storage</H6>
                            <H6><Icon1 />Includes 3 users</H6>
                        </Row>
                        <Button>Get Started</Button>
                    </Card>
                    <Card style={{ background: "#303F9F", color: "#fff" }}>
                        <Row>
                            <H2 style={{ color: "#fff" }}>Growth</H2>
                            <H5 style={{ color: "#fff" }}><Span style={{ color: "#fff" }}>$159</Span>/month</H5>
                            <P style={{ color: "#fff" }}>5.50% per funding advance</P>
                            <H6 style={{ color: "#fff" }}><Icon2 />Up to 50 claims</H6>
                            <H6 style={{ color: "#fff" }}><Icon2 />25GB of photo storage</H6>
                            <H6 style={{ color: "#fff" }}><Icon2 />Includes 10 users  </H6>
                        </Row>
                        <Button>Get Started</Button>
                    </Card>
                    {card.map((item) => (
                        <Card key={item.id}>
                            <Row>
                                <H2>{item.name}</H2>
                                <H5><Span>{item.pirce}</Span>{item.month}</H5>
                                <P>{item.title}</P>
                                <H6><Icon1 />{item.text1}</H6>
                                <H6><Icon1 />{item.text2}</H6>
                                <H6><Icon1 />{item.text3}</H6>
                            </Row>
                            <Button>Get Started</Button>
                        </Card>
                    ))}
                </BoxCard>
            </Container>
        </Wrapper>
    )
}

export default PricingPlans

const Wrapper = styled.div`
    width: 100%;
    height: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F5F0E8;
`

const Container = styled.div`
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 54px;
    color: #333333;
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #333333;
`

const H5 = styled.h6`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #303F9F;
`

const TitleBtn = styled.div`
    width: 230px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ButtonAnnual = styled.button`
    width: 108px;
    height: 55px;
    background: #303F9F;
    border: none;
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #FFFFFF;
`

const ButtonMonthly = styled.button`
    width: 119px;
    height: 55px;
    background: #FFFFFF;
    border: none;
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #303F9F;
`

const BoxCard = styled.div`
    width: 100%;
    height: 512px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Card = styled.div`
    width: 276px;
    height: 512px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 15px;
    padding: 30px 30px;
`

const Row = styled.div`
    width: 228px;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const H2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 37px;
    line-height: 44px;
    color: #333333;
`

const Span = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 45px;
    color: #303F9F;
`

const H6 = styled.h6`
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: #303F9F;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`

const Button = styled.button`
    width: 228px;
    height: 55px;
    background: #FFFFFF;
    border: 1px solid #303F9F;
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #303F9F;
`
