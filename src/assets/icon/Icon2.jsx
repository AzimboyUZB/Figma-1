import * as React from "react"
import styled from "styled-components"

const Icon1 = (props) => (
    <Wrapper>
        <svg
            width={12}
            height={11}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.583.465c.46.319.554.92.209 1.345l-7.027 8.645L.796 6.183A.91.91 0 0 1 .91 4.828a1.103 1.103 0 0 1 1.468.104l2.28 2.453L10.126.657c.345-.424.997-.51 1.457-.192Z"
                fill="#ffffff"
            />
        </svg>
    </Wrapper>
)

export default Icon1

const Wrapper = styled.div`
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffffff;
    border-radius: 50%;
`