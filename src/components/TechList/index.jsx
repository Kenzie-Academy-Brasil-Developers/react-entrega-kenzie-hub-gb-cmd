import { useContext } from "react";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";


export const TechList = () => {

    const { techList } = useContext(UserContext);

    return ( 
        <ul className={styles.TechList}>
            {techList.map(tech => (
                <TechCard key={tech.id} tech={tech}/>
            ))}
        </ul>
    )
}