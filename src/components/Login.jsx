import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { Button, Form, Input, Alert } from 'antd';


function Login() {
    const [visible, setVisible] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleOpen = (event) => {
        const login = document.querySelector(".login")
        event.preventDefault()

        login.classList.add("open")
    }

    const handleClose = (event) => {
        const login = document.querySelector(".login")
        const input = document.querySelector(".input")
        const inputPassword = document.querySelector(".inputPassword")
        event.preventDefault()

        if (!input.value || !inputPassword.value) {
            setVisible(true)
        } else if (input.value && inputPassword.value) {
            setVisible(false)
            input.value = ""
            inputPassword.value = ""
            login.classList.remove("open")
        }
    }

    const Close = (event) => {
        const input = document.querySelector(".input")
        const login = document.querySelector(".login")
        const inputPassword = document.querySelector(".inputPassword")
        event.preventDefault()

        input.value = ""
        inputPassword.value = ""
        setVisible(false)
        login.classList.remove("open")
    }

    return (
        <Wrapper>
            <Link className="a header__login" to="/" onClick={handleOpen}>Login</Link>
            <LoginCard className="login">
                {visible && (
                    <Alert type="error" message="Error login or password" banner className="alert" />
                )}
                <LoginContainer>
                    <LoginBtn>
                        <Btn onClick={Close}>X</Btn>
                    </LoginBtn>
                    <LoginRow>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input className="input" />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input className="inputPassword" />
                            </Form.Item>


                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit" onClick={handleClose}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </LoginRow>
                </LoginContainer>
            </LoginCard>
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
`

const LoginCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: -100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5c5c5c9c;
    z-index: 10;
`

const LoginContainer = styled.div`
    width: 35%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 10px;
    color: black;
    padding: 10px;
`

const LoginBtn = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
`

const Btn = styled.button`
    width: 40px;
    height: 40px;
    border: 2px solid #0077ff;
    font-size: 25px;
    color: #0077ff;
    border-radius: 8px;
`

const LoginRow = styled.div`
    width: 100%;
    height: 80%;        
    display: flex;
    align-items: center;
    justify-content: center;
`