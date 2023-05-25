import { useEffect, useRef } from 'react'
import styles from './Banner.module.css'

type BannerProps = {
    text: string
    src: string
}

export default function Banner(props: BannerProps) {
    const headerRef = useRef<HTMLHeadElement>(null)

    useEffect(() => {
        if (!headerRef.current) return
        headerRef.current.style.setProperty('--url', `url(${props.src})`)
    }, [])

    return (
        <header ref={headerRef} className={styles.header}>
            {props.text}
        </header>
    )
}