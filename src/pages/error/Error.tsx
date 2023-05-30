import styles from './Error.module.css'

export default function Error() {
    return (
        <main data-testid="error" className={styles.container}>
            <div>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <a href="/">retour sur la page d'accueil</a>
        </main>
    )
}
