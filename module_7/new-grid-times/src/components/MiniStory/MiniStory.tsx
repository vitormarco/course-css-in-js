import { ImageType } from "@/types/image";

import styles from './MiniStory.module.css'

interface IMiniStory {
  id: string
  image: ImageType
  title: string
}

const MiniStory = ({
  id,
  image,
  title
}: IMiniStory) => {
  return (
    <a href={`/story/${id}`}>
      <article className={styles.wrapper}>
        <picture>
          <source 
            type="image/avif"
            srcSet={`
              ${image.src.replace('.jpg', '.avif')} 1x,
              ${image.src.replace('.jpg', '@2x.avif')} 2x,
            `}
          />
          <source 
            type="image/avif"
            srcSet={`
              ${image.src} 1x,
              ${image.src.replace('.jpg', '@2x.jpg')} 2x,
            `}
          />
          <img src={image.src} alt={image.alt} className={styles.image} />
        </picture>
        <h3 className={styles.title}>
          {title}
        </h3>
      </article>
    </a>
  )
}

export default MiniStory;