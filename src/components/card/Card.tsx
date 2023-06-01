import styles from './Card.module.scss'
import { useNavigate } from 'react-router-dom'

type CardProps = {
    title: string
    src: string
    id: string
}

export default function Card(props: CardProps) {
    
    // Navigation function
    const navigate = useNavigate()

    return (
        <article
            className={styles.card}
            onClick={() => navigate('/lodging/' + props.id)}
        >
            <img src={props.src} alt={props.title} />
            <span className={styles.title}>{props.title}</span>
        </article>
    )
}
