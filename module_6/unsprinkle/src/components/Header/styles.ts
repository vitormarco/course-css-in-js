import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SearchInput from "../SearchInput";

export const Wrapper = styled.header`
    background-color: var(--color-background);
`
export const InnerWrapper = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    gap: 48px;
    padding: 16px 32px;
`
export const DesktopNav = styled.nav`
    display: none;
    margin-left: auto;

    @media (min-width: 60rem) {
        display: revert;
    }
`
export const GrowingSearchInput = styled(SearchInput)`
    flex: 1;
`

export const NavList = styled.ul`
    display: flex;
    gap: 32px;
`
export const NavLink = styled.a`
    color: inherit;
    text-decoration: none;
    font-weight: 475;
`