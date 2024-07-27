import React from 'react'

import Search from '../Icons/Search'
import VisuallyHidden from '../VisuallyHidden'
import * as S from './styles'

const SearchInput = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <S.Wrapper {...props}>
            <label htmlFor='header-search'>
                <VisuallyHidden>Search</VisuallyHidden>
            </label>
            <S.Input id="header-search" placeholder="Search.." />
            <S.SubmitButton>
                <VisuallyHidden>Submit</VisuallyHidden>
                <Search size={16} /> 
            </S.SubmitButton>
        </S.Wrapper>
    )
}

export default SearchInput