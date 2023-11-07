import styles from "./style.module.scss"

export const TechCard = () => {
    return (
        <li className={styles.techCard}>
            <h3>React JS</h3>

            <div className={styles.editDeleteContainer}>
                <small className="headline">Avançado</small>
                <button>ico.</button>
                <button>ico.</button>
            </div>
        </li>
    )
}