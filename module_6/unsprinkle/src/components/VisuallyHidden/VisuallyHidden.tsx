import React from "react"

import * as S from './styles'

interface IVisuallyHidden extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const VisuallyHidden = ({children, ...delegated}: IVisuallyHidden) => {
    const [forceShow, setForceShow] = React.useState(false)

    React.useEffect(() => {
        if (import.meta.env.NODE_ENV !== 'production') {
            const handleKeyDown = (ev: KeyboardEvent) => {
                if (ev.key === 'Alt') {
                    setForceShow(true)
                }
            }

            const handleKeyUp = () => {
                setForceShow(false)
            }

            window.addEventListener('keydown', handleKeyDown)
            window.addEventListener('keyup', handleKeyUp)

            return () => {
                window.removeEventListener('keydown', handleKeyDown)
                window.removeEventListener('keyup', handleKeyUp)
            }
        }
    }, [])

    if (forceShow) return children

    return <S.Wrapper {...delegated}>{children}</S.Wrapper>
}

export default VisuallyHidden