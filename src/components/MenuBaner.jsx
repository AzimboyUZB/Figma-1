import React from "react";
import styled from "styled-components";
import img from "../assets/img/IMAGE (15).png"
import img2 from "../assets/img/IMAGE (16).png"

function MenuBaner() {
    return (
        <Wrapper>
            <Container>
                <Img src={img} />
                <Row>
                    <Box>
                        <TitleBox>
                            <H1>If your finances are streamlined, your business will follow.</H1>
                            <Results>
                                <H6>Our results</H6>
                                <Result1><Span>1/3</Span>  Overhead costs</Result1>
                                <Result2><Span>5x</Span>  Faster sales cycle</Result2>
                                <Result3><Span>30x</Span>  Paid 30 times faster</Result3>
                            </Results>
                        </TitleBox>
                        <CardBox>
                            <Card>
                                <H3>"SquareDash has allowed us to streamline our entire accounting and collection process so that we have a
                                    predictable revenue timeline and no longer play the guessing game of when we’ll be paid on insurance claims.
                                    No more waiting on mortgage companies. No more driving around collecting checks. We just do the work and we
                                    get paid."</H3>
                                    <CardImg  src={img2}/>
                                    <P>Mike O.</P>
                            </Card>
                        </CardBox>
                    </Box>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default MenuBaner

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
`

const Container = styled.div`
    width: 90%;
    height: 584px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    position: absolute;
    width: 90%;
    height: 90%;
`

const Row = styled.div`
    position: absolute;
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`

const Box = styled.div`
    width: 90%;
    height: 440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TitleBox = styled.div`
    width: 43%;
    height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const H1 = styled.h1`
    width: 405px;
    height: 162px;
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 54px;
    color: #FFFFFF;
`

const Results = styled.div`
    width: 259px;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const H6 = styled.h6`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #F0F0F0;
`

const Result1 = styled.div`
    width: 210px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #1E4927;
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`

const Result2 = styled.div`
    width: 221px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #1E4927;
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`

const Result3 = styled.div`
    width: 259px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #1E4927;
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`

const Span = styled.span`
    color: #96FDAD;
`

const CardBox = styled.div`
    width: 620px;
    height: 440px;
    display: flex;
    align-items: center;
`

const Card = styled.div`
    width: 598px;
    height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 15px;
    padding: 30px;
`

const H3 = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    color: #333333;
`

const CardImg = styled.img`
    width: 80px;
    height: 80px;
    background: blue;
` 

const P = styled.p`
    position: absolute;
    width: 68px;
    height: 25px;
    left: 668px;
    top: 460px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
    color: #2B2E44;
`