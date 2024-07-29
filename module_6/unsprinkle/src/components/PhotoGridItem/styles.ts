import styled from "styled-components";

export const Anchor = styled.a`
    text-decoration: none;
    color: inherit;
    outline-offset: 4px;
`
export const Image = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    border-radius: 2px;
    margin-bottom: 8px;
`
export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`
export const Tag = styled.li`
    padding: 4px 8px;
    background: var(--color-gray-300);
    font-size: 0.875rem;
    font-weight: 475;
    color: var(--color-gray-800);
`