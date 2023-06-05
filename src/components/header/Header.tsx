import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/LOGO.png'
import styles from './Header.module.scss'

export default function Header() {
    const basePath = process.env.BASE_URL

    return (
        <header className={styles.navbar}>
            <NavLink to={`${basePath}`} data-testid="header-logo-navlink">
                <img src={Logo} alt="Logo de Kasa" className={styles.image} />
            </NavLink>
            <nav>
                <NavLink
                    to={`${basePath}`}
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.link
                    }
                    data-testid="home-navlink"
                >
                    Home
                </NavLink>
                <NavLink
                    to={`${basePath}about`}
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
