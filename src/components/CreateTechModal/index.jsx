import { FormSection } from "../FormSection";
import { InputForm } from "../InputForm"
import styles from "./style.module.scss";

export const CreateTechModal = () => {
    
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.createTechModal}>
                <div className={styles.modalHeader}>
                    <h3>Cadastrar Tecnologia</h3>

                    <button>X</button>
                </div>

                <FormSection>
                    <InputForm type="name" label="Nome" placeholder="Digite aqui sua tecnologia" />

                    <div className={styles.techStatusContainer}>
                        <label className="headline">Selecionar status</label>
                        <select>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                    <button className={styles.createTechnologyButton}>Cadastrar tecnologia</button>
                </FormSection>
            </div>
        </div>
    )
}