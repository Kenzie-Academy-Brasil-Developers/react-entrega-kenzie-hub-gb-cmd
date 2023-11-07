import { useContext } from "react";
import { FormSection } from "../FormSection";
import { InputForm } from "../InputForm";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";

export const EditTechModal = () => {

    const { editingTech, setEditingTech, updateTechnology } = useContext(TechContext);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            status: editingTech.status
        }
    });

    const submit = (formData) => {
        updateTechnology(formData);
    }

    return (
        <div className={styles.modalOverlay} role="dialog">
            <div className={styles.editTechModal}>
                <div className={styles.modalHeader}>
                    <h3>Tecnologia Detalhes</h3>

                    <button onClick={() => setEditingTech(null)}>X</button>
                </div>

                <FormSection onSubmit={handleSubmit(submit)}>
                    <InputForm type="name" label="Nome" placeholder="Digite aqui sua tecnologia" />

                    <div className={styles.techStatusContainer}>
                        <label className="headline">Status</label>
                        <select {...register("status")}>
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