import React from "react"
import { useState } from "react"
import styles from "./Home.module.css"
import lodgingData from "../../data/lodgingData.json"
import Card from "../../components/card/Card"

export const Home: React.FC<{}> = () => {
    const [count, setCount] = useState(0)
    lodgingData.forEach((data) => console.log(data))

    return (
        <main data-testid="home-page">
            <header className={styles.header}>
                Chez vous et partout ailleurs
            </header>
            <section className={styles.section}>
                {lodgingData.map((data, idx) => {
                    return (
                        <Card
                            title={data.title}
                            src={data.cover}
                            idx={idx}
                            key={idx}
                        />
                    )
                })}
            </section>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </main>
    )
}
