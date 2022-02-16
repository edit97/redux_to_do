import {Link} from "react-router-dom";

import styles from './header.module.css'

const Header = () => {
    return (
        <div className={'header'}>
            <div className={styles.header}>
                <Link to={'/'} className={styles.logo}>LOGO</Link>
                <nav>
                    <Link to={'/'} className={styles.navLink}>Home</Link>
                    <Link to={'/list'} className={styles.navLink}>List</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header
