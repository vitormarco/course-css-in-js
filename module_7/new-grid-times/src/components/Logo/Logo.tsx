import { format } from "date-fns/format"
import Link, { LinkProps } from "next/link"
import { UrlObject } from "url"

import styles from './Logo.module.css'

interface ILogo extends Omit<LinkProps, 'href'> {
    href?: string | UrlObject
}

const Logo = ({ href = '/', ...rest }: ILogo) => {
    return (
        <div className={styles.wrapper}>
            <Link className={styles.link} href={href} {...rest}>
                New Grid Times
            </Link>
            <p className={styles.todaysDate}>
                {format(new Date(), 'EEEE, MMMM do, yyyy')}
            </p>
        </div>
    )
}

export default Logo