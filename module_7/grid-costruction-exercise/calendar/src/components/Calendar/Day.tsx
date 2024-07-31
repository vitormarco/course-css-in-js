import * as S from './styles'

interface IDayProps {
    children: string | number
}

const Day = ({ children }: IDayProps) => {
    return <S.Day>{children}</S.Day>
} 

export default Day