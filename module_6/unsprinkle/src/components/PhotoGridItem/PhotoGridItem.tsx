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
                <picture>
                    <source 
                        type='image/avif' 
                        srcSet={`
                            ${src.replace('.jpg', '.avif')} 1x,
                            ${src.replace('.jpg', '@2x.avif')} 2x,
                            ${src.replace('.jpg', '@3x.avif')} 3x,
                        `} 
                    />
                    <source 
                        type='image/jpeg' 
                        srcSet={`
                            ${src} 1x,
                            ${src.replace('.jpg', '@2x.jpg')} 2x,
                            ${src.replace('.jpg', '@3x.jpg')} 3x,
                        `} 
                    />

                    <S.Image src={src} alt={alt} />
                </picture>
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