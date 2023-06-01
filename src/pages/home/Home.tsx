import styles from './Home.module.css'
import lodgingData from '../../data/lodgingData.json'
import Card from '../../components/card/Card'
import Banner from '../../components/banner/Banner'

export default function Home() {
    return (
        <main data-testid="home-page">
            <Banner
                text="Chez vous et partout ailleurs"
                src="/src/assets/img/home-banner-img.png"
            />
            <section className={styles.section}>
                {lodgingData.map((lodging, idx) => {
                    return (
                        <Card
                            title={lodging.title}
                            src={lodging.cover}
                            id={lodging.id}
                            key={idx}
                        />
                    )
                })}
            </section>
        </main>
    )
}
