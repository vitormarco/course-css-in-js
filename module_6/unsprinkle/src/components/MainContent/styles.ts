import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";

export const Wrapper = styled(MaxWidthWrapper)`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding-block: 128px;
`