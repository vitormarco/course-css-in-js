import styled from "styled-components";

export const Wrapper = styled.div`
    border: 3px solid;

    display: grid;
    grid-template-columns: repeat(7, 2rem);
    gap: 4px;
    width: fit-content;
    padding: 16px;
`

export const Day = styled.div`
    border: 2px solid;
    border-radius: 4px;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`