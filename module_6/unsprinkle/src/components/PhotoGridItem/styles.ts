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
    object-fit: cover;
`
export const Tags = styled.ul`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 4px 0px;
`
export const Tag = styled.li`
    display: inline;
    padding: 4px 8px;
    background: var(--color-gray-300);
    font-size: 0.875rem;
    font-weight: 475;
    color: var(--color-gray-800);
    
    &:not(:last-of-type) {
        margin-right: 8px;
    }
`