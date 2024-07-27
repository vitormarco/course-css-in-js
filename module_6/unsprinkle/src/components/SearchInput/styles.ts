import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    min-width: 300px;
    height: 2rem;
`
export const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: var(--color-gray-100);
    border-radius: 1000px;
    border: none;
    padding: 0 16px;
    outline-offset: 4px;
    font-size: 1rem;

    &:focus {
        background: var(--color-gray-100);
    }

`
export const SubmitButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding-right: 8px;
    background: transparent;
    outline-offset: 4px;
    cursor: pointer;
`