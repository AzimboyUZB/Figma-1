import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import HeaderMenu from "./HeaderMenu";
import Login from "./Login";

function Header() {

    return (
        <>
            <Wrapper>
                <Container>
                    <Navbar>
                        <Link className="a header__title" to="/">Schedule a demo</Link>
                        <Login />
                    </Navbar>
                </Container>
                
                <HeaderMenu />
            </Wrapper>
        </>
    )
}

export default Header

const Wrapper = styled.div`
    width: 100%;
    height: 120vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(180deg, #5D92E1 0%, #9CC4FF 100%);
`

const Container = styled.div`
    width: 90%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Navbar = styled.div`
    width: 22%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

