import Logo from '../../assets/img/LOGO-BLACK.svg'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="/" data-testid="footer-link">
                <img src={Logo} alt="Logo de Kasa" className={styles.image} />
            </a>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
