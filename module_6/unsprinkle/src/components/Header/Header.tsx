import Logo from '../Logo'
import * as S from './styles'

const Header = () => {
    return (
        <S.Wrapper>
            <S.InnerWrapper>
                <Logo /> 
                <S.GrowingSearchInput />
                <S.DesktopNav>
                    <S.NavList>
                        <li>
                            <S.NavLink href=''>Categories</S.NavLink>
                        </li>
                        <li>
                            <S.NavLink href=''>Submissions</S.NavLink>
                        </li>
                        <li>
                            <S.NavLink href=''>Sign Up</S.NavLink>
                        </li>
                    </S.NavList>
                </S.DesktopNav>
            </S.InnerWrapper>
        </S.Wrapper>
    )
}

export default Header