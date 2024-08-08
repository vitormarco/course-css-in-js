import Menu from '../Icons/Menu';
import Search from '../Icons/Search';
import User from '../Icons/User';
import Logo from '../Logo';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.superHeader}>
                <div className={`${styles.row} max-width-wrapper`}>
                    <div className={styles.actionGroup}>
                        <button>
                            <Search size={24} /> 
                        </button>
                    </div>
                    <div className={styles.actionGroup}>
                        <button>
                            <Menu size={24} />
                        </button>
                    </div>
                    <div className={styles.actionGroup}>
                        <button>
                            <User size={24} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.mainHeader}>
                <Logo />
            </div>
        </header>
    )
}

export default Header;