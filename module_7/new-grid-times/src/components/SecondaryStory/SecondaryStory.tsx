import Link from "next/link";
import { ImageType } from "@/types/image";

import styles from './SecondaryStory.module.css'

interface ISecondaryStoryProps {
  id: string,
  title: string,
  image: ImageType
  abstract: string
}

const SecondaryStory = ({
  id,
  title,
  image,
  abstract
}: ISecondaryStoryProps) => {
  return (
    <Link href={`/story/${id}`}>
      <article className={styles.wrapper}>
        <picture>
          <source 
            type="image/avif" 
            srcSet={`
              ${image.src.replace('.jpg', '.avif')} 1x,
              ${image.src.replace('.jpg', '@2x.avif')} 2x
            `}
          />
          <source 
            type="image/jpeg"
            srcSet={`
              ${image.src} 1x,
              ${image.src.replace('.jpg', '@2x.jpg')} 2x
            `}
          />
          <img src={image.src} alt={image.alt} className={styles.image} />
        </picture>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.abstract}>{abstract}</p>
      </article>
    </Link>
  )
}

export default SecondaryStory;