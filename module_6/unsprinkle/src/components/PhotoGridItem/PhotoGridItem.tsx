import * as S from './styles'

interface IPhotoGridItemProps {
    id: string,
    src: string,
    alt: string
    tags: Array<string>
}

const PhotoGridItem = ({id, src, alt, tags}: IPhotoGridItemProps) => {
    return (
        <article>
            <S.Anchor href={`/photos/${id}`}>
                <S.Image src={src} alt={alt} />
            </S.Anchor>
            <S.Tags>
                {tags.map((tag) => (
                    <S.Tag key={tag}>{tag}</S.Tag>
                ))}
            </S.Tags>
        </article>
    )
}

export default PhotoGridItem