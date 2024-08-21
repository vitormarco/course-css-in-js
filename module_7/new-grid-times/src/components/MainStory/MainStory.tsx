import React from 'react'
import Link from 'next/link'

import { ImageType } from '@/types/image'
import styles from './MainStory.module.css'

interface IMainStoryProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string
    title: string
    image: ImageType
    location: string
    abstract: string
}

const MainStory = ({
    id,
    title, 
    image,
    location,
    abstract,
    ...delegated
}: IMainStoryProps) => {
    return (
        <article {...delegated} className={styles.wrapper}>
            <Link href={`/story/${id}`} >
                <picture>
                    <source 
                        type='image/avif' 
                        srcSet={`
                            ${image.src.replace('.jpg', '.avif')} 1x,
                            ${image.src.replace('.jpg', '@2x.avif')} 2x,
                        `}
                    />
                    <source 
                        type='image/jpeg' 
                        srcSet={`
                            ${image.src} 1x,
                            ${image.src.replace('.jpg', '@2x.jpg')} 2x,
                        `}
                    />
                    <img className={styles.image} src={image.src} alt={image.alt} />
                </picture>
                <h2 className={styles.heading}>{title}</h2>
            </Link>
            <p className={styles.abstract}>
                <span className={styles.location}>{location}</span> - {abstract}
            </p>
            <Link className={styles.readMore} href="/story">Continue Reading...</Link>
        </article>
    )
}

export default MainStory;