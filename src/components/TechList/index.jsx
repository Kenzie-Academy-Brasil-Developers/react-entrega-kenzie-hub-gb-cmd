import { useContext } from "react";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";


export const TechList = () => {

    const { techList } = useContext(TechContext);

    return ( 
        <ul className={styles.TechList}>
            {techList.map(tech => (
                <TechCard key={tech.id} tech={tech}/>
            ))}
        </ul>
    )
}