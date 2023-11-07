import { TechCard } from "./TechCard";
import styles from "./style.module.scss";

export const TechList = () => {
    return (
        <ul className={styles.TechList}>
            <TechCard />
            <TechCard />
            <TechCard />
            <TechCard />
        </ul>
    )
}