import Banner from '../../components/banner/Banner'
import Dropdown from '../../components/dropdown/Dropdown'
import aboutData from '../../data/aboutData.json'

import styles from './About.module.css'

export default function About() {
    return (
        <main data-testid="about" className={styles.container}>
            <Banner text="" src="/src/assets/img/about-banner-img.png" />
            {aboutData.map((aboutDropdown, idx) => {
                return (
                    <Dropdown
                        title={aboutDropdown.title}
                        size="large"
                        content={aboutDropdown.content}
                        key={idx}
                    />
                )
            })}
        </main>
    )
}
