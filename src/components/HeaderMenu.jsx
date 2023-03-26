import React from "react";
import styled from "styled-components";
import Img1 from "../assets/img/IMAGE (1).png"
import Img2 from "../assets/img/IMAGE (2).png"
import Img3 from "../assets/img/IMAGE (3).png"
import Img4 from "../assets/img/IMAGE (4).png"
import Img5 from "../assets/img/IMAGE (5).png"
import Img6 from "../assets/img/IMAGE (6).png"
import Img7 from "../assets/img/IMAGE (7).png"
import Img8 from "../assets/img/IMAGE (8).png"
import Img9 from "../assets/img/IMAGE.png"
import Img10 from "../assets/img/Frame.png"
import { Link } from "react-router-dom"

function HeaderMenu() {
    const handleOpen = (event) => {
        const login = document.querySelector(".login")
        event.preventDefault()

        login.classList.add("open")
    }

    return (
        <Wrapper className="headerMenu">
            <Container>
                <Row>
                    <H1>Less time chasing checks. <br />
                        More time on the job.
                    </H1>
                    <P>The all-in-one financial software built for roofers, by roofers.</P>
                    <HeaderMenuBtn>
                        <Link to="/"><Button1>Schedule a demo!</Button1></Link>
                        <Button2 onClick={handleOpen}>Login</Button2>
                    </HeaderMenuBtn>
                </Row>
                <HeaderMenuBrands>
                    <P>Compatible with most accepted insurance companies</P>
                    <HeaderMenuBrandsPng>
                        <Img src={Img1} />
                        <Img src={Img2} />
                        <Img src={Img3} />
                        <Img src={Img4} />
                        <Img src={Img5} />
                        <Img src={Img6} />
                        <Img src={Img7} />
                        <Img src={Img8} />
                    </HeaderMenuBrandsPng>
                </HeaderMenuBrands>
                <HeaderMenuImg2><Image src={Img10} /></HeaderMenuImg2>
            </Container>
        </Wrapper>
    )
}

export default HeaderMenu

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Row = styled.div`
    width: 60%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 67px;
    color: #fff;
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
    color: #fff;
`

const HeaderMenuBtn = styled.div`
    width: 310px;
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`

const Button1 = styled.button`
    width: 197px;
    height: 53px;
    background: #303F9F;
    border: none;
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
`

const Button2 = styled.button`
    width: 96px;
    height: 53px;
    background: #FFFFFF;
    border: none;
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #303F9F;
`

const HeaderMenuBrands = styled.div`
    width: 38%;
    height: 23%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 50px;
    z-index: 1;
`

const HeaderMenuBrandsPng = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px 45px;
`

const Img = styled.img`
    width: 80px;
    height: 42px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`

const HeaderMenuImg = styled.div`
    position: absolute;
    width: 100%;
    height: 560px;
    left: 0px;
    top: 228px;
`

const HeaderMenuImg2 = styled.div`
    position: absolute;
    width: 627px;
    height: 560px;
    left: 610px;
    top: 192px;
`