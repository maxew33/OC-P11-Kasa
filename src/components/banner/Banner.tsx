import styles from './Banner.module.css'

type BannerProps = {
    text: string
    src: string
}

export default function Banner(props: BannerProps){

    return (
        <header className={styles.header} style={{
            backgroundImage: `linear-gradient(#0005, #0005), url(${props.src})`
        }}>
            {props.text}
        </header>
    )
}