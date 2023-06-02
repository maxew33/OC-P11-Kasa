import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/LOGO-BLACK.svg'
import styles from './Footer.module.scss'

export default function Footer() {
    const basePath = process.env.BASE_URL
    return (
        <footer className={styles.footer}>
            <NavLink to={`${basePath}`} data-testid="footer-link">
                <img src={Logo} alt="Logo de Kasa" className={styles.image} />
            </NavLink>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
