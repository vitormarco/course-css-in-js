import React from 'react'
import * as S from './styles'

interface ICalendarProps {
    children: React.ReactNode
}



const Calendar = ({ children }: ICalendarProps) => {
    return (
        <S.Wrapper>
            {children}
        </S.Wrapper>
    )
}


export default Calendar;