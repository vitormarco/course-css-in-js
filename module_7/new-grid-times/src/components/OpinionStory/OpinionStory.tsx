import Link from "next/link"

import styles from './OpinionStory.module.css'

interface IOpinionStory {
  id: string,
  title: string
  author: string
  avatar: string
}

const OpinionStory = ({
  id,
  title,
  author,
  avatar
}: IOpinionStory) => {
  return (
    <Link href={`/story/${id}`}>
      <article className={styles.wrapper}>
        <picture>
          <source 
            type="image/avif"
            srcSet={`
              ${avatar.replace('.jpg', '.avif')} 1x,
            `}
          />
          <source 
            type="image/jpeg"
            srcSet={`${avatar} 1x`}
          />
          <img className={styles.avatar} alt="" src={avatar} />
        </picture>
        <div>
          <p className={styles.authorName}>{author}</p>
          <h3 className={styles.articleTitle}>{title}</h3>
        </div>
      </article>
    </Link>
  )
}

export default OpinionStory;