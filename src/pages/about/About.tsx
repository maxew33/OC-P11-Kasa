import Banner from '../../components/banner/Banner'
import Dropdown from '../../components/dropdown/Dropdown'
import aboutData from '../../data/aboutData.json'

export default function About() {

    return (
        <>
            <main data-testid="about">
                <Banner text="" src="/src/assets/img/about-banner-img.png" />
                {aboutData.map((dropdown, idx) => {
                    return (
                        <Dropdown
                            title={dropdown.title}
                            size="large"
                            content={dropdown.content}
                            key={idx}
                        />
                    )
                })}
            </main>
        </>
    )
}
