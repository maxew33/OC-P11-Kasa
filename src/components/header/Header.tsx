import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/LOGO.png'
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.navbar}>
            <a href="/">
                <img src={Logo} alt="Logo de Kasa" className={styles.image} />
            </a>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                    data-testid="home-navlink"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                    data-testid="about-navlink"
                >
                    À propos
                </NavLink>
            </nav>
        </header>
    )
}
