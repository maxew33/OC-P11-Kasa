import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/img/LOGO.png"
import styles from "./Header.module.scss"

export const Header: React.FC<{}> = () => {
    return (
        <div>
            <img src={Logo} alt="Logo de Kasa" className={styles.image} />
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
                    à Propos
                </NavLink>
            </nav>
        </div>
    )
}
