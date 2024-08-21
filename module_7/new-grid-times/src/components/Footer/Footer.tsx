import Link from 'next/link';
import Logo from '../Logo';
import styles from './Footer.module.css'
import VisuallyHidden from '../VisuallyHidden';
import Facebook from '../Icons/Facebook';
import X from '../Icons/X';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className="max-width-wrapper">
        <div className={styles.topRow}>
          <nav>
            <ul className={styles.topNavList}>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/press">Press Releases</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </nav>
          <div className={styles.social}>
            <a href="/">
              <VisuallyHidden>Visit The Grid Times on Facebook</VisuallyHidden>
              <Facebook size={20} />
            </a>
            <a href="/">
              <VisuallyHidden>Visit The Grid Times on Twitter</VisuallyHidden>
              <X size={20} />
            </a>
          </div>
        </div>
        <div className={styles.mainNavArea}>
          <nav>
            <h2 className={styles.mainNavHeading}>Discover Content</h2>
            <ul className={styles.mainNavList}>
              <li>
                <a href="/pol">Politics</a>
              </li>
              <li>
                <a href="/wrl">World</a>
              </li>
              <li>
                <a href="/fin">Financial</a>
              </li>
              <li>
                <a href="/spo">Sports and Entertainment</a>
              </li>
              <li>
                <a href="/oped">Opinion and Editorial</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h2 className={styles.mainNavHeading}>Regional Websites</h2>
            <ul className={styles.mainNavList}>
              <li>
                <a href="/us">New Grid United States</a>
              </li>
              <li>
                <a href="/eu">New Grid Europe</a>
              </li>
              <li>
                <a href="/asia">New Grid Asia</a>
              </li>
              <li>
                <a href="/mars">New Grid Mars and Beyond</a>
              </li>
              <li>
                <a href="/au">New Grid Australia</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h2 className={styles.mainNavHeading}>Careers</h2>
            <ul className={styles.mainNavList}>
              <li>
                <a href="/pos">Open Positions</a>
              </li>
              <li>
                <a href="/team">Meet the team</a>
              </li>
              <li>
                <a href="/culture">Company Culture</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h2 className={styles.mainNavHeading}>Legal and Privacy</h2>
            <ul className={styles.mainNavList}>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/🍪">Use of cookies</a>
              </li>
              <li>
                <a href="/manage">Manage cookies</a>
              </li>
              <li>
                <a href="/legal">Legal notice</a>
              </li>
              <li>
                <a href="/tos">Terms and Conditions</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.subfooterWrapper}>
        <div className='max-width-wrapper'>
          <div className={styles.subfooter}>
            <Link href="/" className={styles.logo}>New Grid Times</Link>
            <p className={styles.disclaimer}>
              &copy; 2021 Fake Company Ltd. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;