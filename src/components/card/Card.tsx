import React from "react"
import styles from "./Card.module.scss"
import { useNavigate } from "react-router-dom"

type CardProps = {
    title: string
    src: string
    idx: number
}

export default function Card(props: CardProps) {
    const navigate = useNavigate()

    return (
        <article
            className={styles.card}
            onClick={() => navigate("/lodging/" + props.idx)}
        >
            <img src={props.src} alt={props.title} />
            <span className={styles.title}>{props.title}</span>
        </article>
    )
}
