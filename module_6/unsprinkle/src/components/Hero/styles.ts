import styled from "styled-components";

export const Wrapper = styled.section`
    position: relative;
    height: 60svh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: hsl(0deg 0% 1%);

`
export const HeroImage = styled.img`
    display: block;
    width: 500px;
    height: 500px;
    max-height: 100%;
`

export const Swoop = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    width: 100%;
`