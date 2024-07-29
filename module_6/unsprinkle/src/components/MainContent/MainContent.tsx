import data from '../../mockups/data'
import PhotoGridItem from '../PhotoGridItem'
import VisuallyHidden from '../VisuallyHidden'
import * as S from './styles'

const MainContent = () => {
    return (
        <S.Wrapper>
            <VisuallyHidden>
                <h1>All Photos</h1>
            </VisuallyHidden>
            {data.map(({ id, src, alt, tags}) => (
                <PhotoGridItem
                    key={id}
                    id={id}
                    src={src}
                    alt={alt}
                    tags={tags}
                />
            ))}
        </S.Wrapper>
    )
}

export default MainContent