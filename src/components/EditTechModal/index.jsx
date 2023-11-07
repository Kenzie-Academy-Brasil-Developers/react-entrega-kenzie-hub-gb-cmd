import { FormSection } from "../FormSection";
import { InputForm } from "../InputForm";
import styles from "./style.module.scss";

export const EditTechModal = () => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.editTechModal}>
                <div className={styles.modalHeader}>
                    <h3>Tecnologia Detalhes</h3>

                    <button>X</button>
                </div>

                <FormSection>
                    <InputForm type="name" label="Nome" placeholder="Digite aqui sua tecnologia" />

                    <div className={styles.techStatusContainer}>
                        <label className="headline">Status</label>
                        <select>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                    <button className={styles.editTechnologyButton}>Salvar alterações</button>
                </FormSection>
            </div>
        </div>
    )
}