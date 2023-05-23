import React from "react"
import { useState } from "react"

import styles from "./Home.module.css"

export const Home: React.FC<{}> = () => {
    const [count, setCount] = useState(0)

    return (
            <main data-testid="home-page">
                <header className={styles.header}>
                    Chez vous et partout ailleurs
                </header>
                <section className={styles.section}>

                </section>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </main>
    )
}
