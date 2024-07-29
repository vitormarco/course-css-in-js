
import * as S from './styles'

const Hero = () => {
    return (
        <S.Wrapper>
            <picture>
                <source
                    type='image/avif'
                    srcSet='
                        /images/hero-img.avif 1x,
                        /images/hero-img@2x.avif 2x,
                        /images/hero-img@3x.avif 3x
                    '
                />
                <source
                    type='image/jpeg'
                    srcSet='
                        /images/hero-img.jpg 1x,
                        /images/hero-img@2x.jpg 2x,
                        /images/hero-img@3x.jpg 3x
                    '
                />
                <S.HeroImage src="/images/hero-img.jpg" />
            </picture>
            <S.Swoop src="/swoop.svg" />
        </S.Wrapper>
    )
}

export default Hero