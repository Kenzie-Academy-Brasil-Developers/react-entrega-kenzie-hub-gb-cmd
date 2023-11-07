import { HiOutlinePencil } from "react-icons/hi";
import { GoTrash } from "react-icons/go";
import styles from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {

    const { setEditingTech, deleteTechnology } = useContext(TechContext);

    return (
        <li className={styles.techCard}>
            <h3>{tech.title}</h3>

            <div className={styles.editDeleteContainer}>
                <small className="headline">{tech.status}</small>
                <button onClick={() => setEditingTech(tech)}><HiOutlinePencil /></button>
                <button onClick={()  => deleteTechnology(tech.id)}><GoTrash /></button>
            </div>
        </li>
    )
}  