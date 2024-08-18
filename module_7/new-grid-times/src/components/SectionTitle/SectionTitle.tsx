import React from 'react';
import styles from './SectionTitle.module.css'
import { CornerLinkType } from './types';
import Link from 'next/link';

interface ISectionTitleProps {
  children: React.ReactNode
  cornerLink?: CornerLinkType
}

const SectionTitle = ({children, cornerLink}: ISectionTitleProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{children}</h2>
      {cornerLink && (
        <Link href={cornerLink.href} className={styles.cornerLink}>
          {cornerLink.content}
        </Link>
      )}
    </div>
  )
}

export default SectionTitle;