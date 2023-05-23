import styles from "./Home.module.css"
import lodgingData from "../../data/lodgingData.json"
import Card from "../../components/card/Card"

export default function Home() {

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
                            id={data.id}
                            key={idx}
                        />
                    )
                })}
            </section>
        </main>
    )
}
