import React from 'react'
import styles from './Advertisement.module.css'

const Advertisement = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={styles.wrapper} {...props}>
            <p>Advertisement</p>
            <div className={styles.box} />
        </div>
    )
}

export default Advertisement