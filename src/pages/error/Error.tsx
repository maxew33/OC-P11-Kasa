import styles from './Error.module.css'

export default function Error() {
    return (
        <main data-testid="error" className={styles.container}>
            <p>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </p>
            <a href="/">retour à la page d'accueil</a>
        </main>
    )
}
